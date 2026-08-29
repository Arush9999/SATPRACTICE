import {
  SAT_DOMAIN_CODES,
  SECTION_COUNTS,
  MODULE_TIMING,
  ADAPTIVE_THRESHOLD,
} from '../constants.js';
import pool from '../db/pool.js';

const DIFFICULTY_ORDER = ['Easy', 'Medium', 'Hard'];

const MODULE_PROFILES = {
  routing: {
    Easy: 0.3,
    Medium: 0.52,
    Hard: 0.18,
  },
  standard: {
    Easy: 0.48,
    Medium: 0.42,
    Hard: 0.1,
  },
  advanced: {
    Easy: 0.1,
    Medium: 0.42,
    Hard: 0.48,
  },
};

function rowToQuestion(row) {
  const data = row.question_data || {};
  return {
    id: row.question_id,
    section: row.section,
    domain: row.domain_label,
    difficulty: row.difficulty_label,
    paragraph: data.paragraph || null,
    question: data.question || '',
    choices: data.choices || {},
    correctAnswer: data.correctAnswer,
    explanation: data.explanation || null,
    visuals: data.visuals || null,
  };
}

function distributeCounts(total, buckets) {
  const base = Math.floor(total / buckets);
  const remainder = total % buckets;
  return Array.from({ length: buckets }, (_, index) => base + (index < remainder ? 1 : 0));
}

function difficultyTargets(total, profile) {
  const raw = DIFFICULTY_ORDER.map((label) => ({
    label,
    count: Math.round(total * profile[label]),
  }));

  let diff = total - raw.reduce((sum, item) => sum + item.count, 0);
  let index = 1;
  while (diff !== 0) {
    const target = raw[index % raw.length];
    target.count += diff > 0 ? 1 : -1;
    diff += diff > 0 ? -1 : 1;
    index += 1;
  }

  return Object.fromEntries(raw.map(({ label, count }) => [label, count]));
}

function interleaveByDomain(domainBuckets) {
  const queues = Object.values(domainBuckets).map((items) => [...items]);
  const merged = [];

  while (queues.some((queue) => queue.length > 0)) {
    for (const queue of queues) {
      if (queue.length > 0) merged.push(queue.shift());
    }
  }

  return merged;
}

function orderModuleQuestions(questions) {
  const byDomain = {};

  for (const question of questions) {
    if (!byDomain[question.domain]) byDomain[question.domain] = [];
    byDomain[question.domain].push(question);
  }

  for (const domain of Object.keys(byDomain)) {
    byDomain[domain].sort(
      (a, b) => DIFFICULTY_ORDER.indexOf(a.difficulty) - DIFFICULTY_ORDER.indexOf(b.difficulty),
    );
  }

  return interleaveByDomain(byDomain);
}

async function queryPool(section, domainLabel, difficultyLabel, limit, excludeIds) {
  const params = [section, domainLabel, difficultyLabel];
  let sql = `
    SELECT question_id, section, domain_label, difficulty_label, question_data
    FROM sat_questions
    WHERE question_type = 'mcq'
      AND section = $1
      AND domain_label = $2
      AND difficulty_label = $3
  `;

  if (excludeIds.length > 0) {
    params.push(excludeIds);
    sql += ` AND question_id <> ALL($${params.length})`;
  }

  sql += ' ORDER BY RANDOM()';
  params.push(limit);
  sql += ` LIMIT $${params.length}`;

  const { rows } = await pool.query(sql, params);
  return rows.map(rowToQuestion);
}

async function fillModule(section, questionCount, profile, excludeIds = []) {
  const domains = SAT_DOMAIN_CODES[section].map((entry) => entry.label);
  const domainCounts = distributeCounts(questionCount, domains.length);
  const difficultyCounts = difficultyTargets(questionCount, profile);
  const used = new Set(excludeIds);
  const selected = [];

  for (let domainIndex = 0; domainIndex < domains.length; domainIndex += 1) {
    const domain = domains[domainIndex];
    const domainQuota = domainCounts[domainIndex];
    const domainDifficulty = difficultyTargets(domainQuota, profile);

    for (const difficulty of DIFFICULTY_ORDER) {
      const needed = domainDifficulty[difficulty];
      if (needed <= 0) continue;

      const batch = await queryPool(
        section,
        domain,
        difficulty,
        needed,
        [...used],
      );

      for (const question of batch) {
        selected.push(question);
        used.add(question.id);
      }
    }
  }

  if (selected.length < questionCount) {
    const fallback = await pool.query(
      `
      SELECT question_id, section, domain_label, difficulty_label, question_data
      FROM sat_questions
      WHERE question_type = 'mcq'
        AND section = $1
        AND question_id <> ALL($2)
      ORDER BY RANDOM()
      LIMIT $3
      `,
      [section, [...used], questionCount - selected.length],
    );

    for (const row of fallback.rows) {
      const question = rowToQuestion(row);
      selected.push(question);
      used.add(question.id);
    }
  }

  if (selected.length < questionCount) {
    throw new Error(
      `Not enough ${section} questions to build a ${questionCount}-question module. `
      + 'Run `npm run sync-questions` to load more from the College Board question bank.',
    );
  }

  return orderModuleQuestions(selected.slice(0, questionCount));
}

function buildAdaptiveModule(section, moduleNumber, path, questions) {
  const timing = MODULE_TIMING[section];
  const sectionLabel = section === 'english' ? 'Reading & Writing' : 'Math';

  return {
    id: `${section}-${moduleNumber}-${path}`,
    type: 'module',
    section,
    moduleNumber,
    path,
    adaptiveFor: `${section}-${moduleNumber}`,
    label: `${sectionLabel} — Module ${moduleNumber}${path === 'advanced' ? ' (Advanced)' : path === 'standard' ? ' (Standard)' : ''}`,
    timeLimitSeconds: timing.moduleSeconds,
    questionCount: timing.questionsPerModule,
    questions,
  };
}

function buildRoutingModule(section, moduleNumber, questions) {
  const timing = MODULE_TIMING[section];
  const sectionLabel = section === 'english' ? 'Reading & Writing' : 'Math';

  return {
    id: `${section}-${moduleNumber}`,
    type: 'module',
    section,
    moduleNumber,
    path: 'routing',
    label: `${sectionLabel} — Module ${moduleNumber}`,
    timeLimitSeconds: timing.moduleSeconds,
    questionCount: timing.questionsPerModule,
    questions,
  };
}

function buildBreakModule() {
  return {
    id: 'break',
    type: 'break',
    label: 'Break',
    timeLimitSeconds: MODULE_TIMING.breakSeconds,
    description: 'Take a break before the Math section, just like on test day.',
  };
}

export async function buildSectionTest(section) {
  const timing = MODULE_TIMING[section];
  const usedIds = [];

  const module1Questions = await fillModule(
    section,
    timing.questionsPerModule,
    MODULE_PROFILES.routing,
    usedIds,
  );
  usedIds.push(...module1Questions.map((q) => q.id));

  const module2Standard = await fillModule(
    section,
    timing.questionsPerModule,
    MODULE_PROFILES.standard,
    usedIds,
  );
  usedIds.push(...module2Standard.map((q) => q.id));

  const module2Advanced = await fillModule(
    section,
    timing.questionsPerModule,
    MODULE_PROFILES.advanced,
    usedIds,
  );

  const modules = [
    buildRoutingModule(section, 1, module1Questions),
    buildAdaptiveModule(section, 2, 'standard', module2Standard),
    buildAdaptiveModule(section, 2, 'advanced', module2Advanced),
  ];

  return {
    testType: section,
    section,
    totalQuestions: timing.questionsPerModule * 2,
    totalTimeSeconds: timing.moduleSeconds * 2,
    adaptiveThreshold: ADAPTIVE_THRESHOLD,
    modules,
    adaptiveRouting: {
      [`${section}-2`]: {
        afterModule: `${section}-1`,
        threshold: ADAPTIVE_THRESHOLD,
        standardModuleId: `${section}-2-standard`,
        advancedModuleId: `${section}-2-advanced`,
      },
    },
  };
}

export async function buildFullTest() {
  const english = await buildSectionTest('english');
  const usedIds = english.modules.flatMap((module) => module.questions?.map((q) => q.id) || []);

  const mathModule1 = await fillModule(
    'math',
    MODULE_TIMING.math.questionsPerModule,
    MODULE_PROFILES.routing,
    usedIds,
  );
  usedIds.push(...mathModule1.map((q) => q.id));

  const mathModule2Standard = await fillModule(
    'math',
    MODULE_TIMING.math.questionsPerModule,
    MODULE_PROFILES.standard,
    usedIds,
  );
  usedIds.push(...mathModule2Standard.map((q) => q.id));

  const mathModule2Advanced = await fillModule(
    'math',
    MODULE_TIMING.math.questionsPerModule,
    MODULE_PROFILES.advanced,
    usedIds,
  );

  const modules = [
    ...english.modules,
    buildBreakModule(),
    buildRoutingModule('math', 1, mathModule1),
    buildAdaptiveModule('math', 2, 'standard', mathModule2Standard),
    buildAdaptiveModule('math', 2, 'advanced', mathModule2Advanced),
  ];

  return {
    testType: 'full',
    totalQuestions: SECTION_COUNTS.full,
    totalTimeSeconds: MODULE_TIMING.english.moduleSeconds * 2
      + MODULE_TIMING.breakSeconds
      + MODULE_TIMING.math.moduleSeconds * 2,
    adaptiveThreshold: ADAPTIVE_THRESHOLD,
    modules,
    adaptiveRouting: {
      ...english.adaptiveRouting,
      'math-2': {
        afterModule: 'math-1',
        threshold: ADAPTIVE_THRESHOLD,
        standardModuleId: 'math-2-standard',
        advancedModuleId: 'math-2-advanced',
      },
    },
  };
}

export function collectQuestionsFromTest(test) {
  return test.modules.flatMap((module) => module.questions || []);
}
