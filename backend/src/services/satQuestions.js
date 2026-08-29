import pool from '../db/pool.js';
import { DOMAIN_CODE_BY_LABEL, SECTION_COUNTS } from '../constants.js';
import { buildFullTest, buildSectionTest, collectQuestionsFromTest } from './satTestBuilder.js';

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

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

async function queryQuestions({ section, domainLabel, limit }) {
  const params = [];
  let sql = `
    SELECT question_id, section, domain_label, difficulty_label, question_data
    FROM sat_questions
    WHERE question_type = 'mcq'
  `;

  if (section) {
    params.push(section);
    sql += ` AND section = $${params.length}`;
  }

  if (domainLabel) {
    params.push(domainLabel);
    sql += ` AND domain_label = $${params.length}`;
  }

  sql += ' ORDER BY RANDOM()';
  params.push(limit);
  sql += ` LIMIT $${params.length}`;

  const { rows } = await pool.query(sql, params);
  return rows.map(rowToQuestion);
}

export async function fetchQuestions({ section, domain, limit }) {
  let questions = await queryQuestions({ section, domainLabel: domain, limit });

  if (questions.length < limit) {
    throw new Error(
      `Only ${questions.length} synced question(s) available`
      + `${domain ? ` for ${domain}` : section ? ` for ${section}` : ''}. `
      + 'Run `npm run sync-questions` in the backend folder to pull from the College Board question bank.',
    );
  }

  return shuffle(questions).slice(0, limit);
}

export async function fetchFullTest() {
  return buildFullTest();
}

export async function fetchSectionTest(section) {
  if (!['english', 'math'].includes(section)) {
    throw new Error('Section must be english or math');
  }
  return buildSectionTest(section);
}

export async function fetchTargetedPractice(domain) {
  if (!DOMAIN_CODE_BY_LABEL[domain]) {
    throw new Error(`Invalid domain: ${domain}`);
  }

  return fetchQuestions({ domain, limit: SECTION_COUNTS.targeted });
}

export async function getQuestionFromStore(questionId) {
  const { rows } = await pool.query(
    `SELECT question_id, section, domain_label, difficulty_label, question_data
     FROM sat_questions WHERE question_id = $1`,
    [questionId],
  );

  if (!rows[0]) return null;
  return rowToQuestion(rows[0]);
}
