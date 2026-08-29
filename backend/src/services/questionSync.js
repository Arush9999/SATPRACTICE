import pool from '../db/pool.js';
import {
  SAT_DOMAIN_CODES,
  SYNC_BATCH_SIZE,
  SYNC_DELAY_MS,
} from '../constants.js';
import {
  enrichMetadata,
  fetchQuestionDetail,
  fetchQuestionDetailsBatch,
  listQuestionMetadata,
  mergeDetailWithMetadata,
} from './collegeBoardClient.js';

function dedupeMetadata(items) {
  const seen = new Set();
  const unique = [];

  for (const item of items) {
    const id = item.external_id || item.ibn;
    if (!id || seen.has(id)) continue;
    seen.add(id);
    unique.push(item);
  }

  return unique;
}

export async function syncAllQuestions({ onProgress } = {}) {
  const report = {
    metadataListed: 0,
    detailsSynced: 0,
    skipped: 0,
    errors: [],
    byDomain: {},
  };

  const allMetadata = [];

  for (const [section, domains] of Object.entries(SAT_DOMAIN_CODES)) {
    for (const domain of domains) {
      onProgress?.({ phase: 'metadata', section, domain: domain.label });

      try {
        const listed = await listQuestionMetadata({
          test: domain.test,
          domainCode: domain.code,
        });

        const enriched = dedupeMetadata(listed).map((item) => enrichMetadata(item, section, domain.code));
        allMetadata.push(...enriched);
        report.byDomain[domain.label] = enriched.length;
        report.metadataListed += enriched.length;

        await upsertMetadata(enriched);
      } catch (error) {
        report.errors.push(`${domain.label}: ${error.message}`);
      }
    }
  }

  const missing = await getQuestionsMissingDetails();
  onProgress?.({ phase: 'details', total: missing.length });

  for (let index = 0; index < missing.length; index += SYNC_BATCH_SIZE) {
    const batch = missing.slice(index, index + SYNC_BATCH_SIZE);
    const ids = batch.map((row) => row.question_id);

    const details = await fetchQuestionDetailsBatch(ids, {
      batchSize: SYNC_BATCH_SIZE,
      delayMs: SYNC_DELAY_MS,
    });

    for (const detail of details) {
      const meta = batch.find((row) => row.question_id === detail.id);
      if (!meta) continue;

      if (detail.error) {
        report.errors.push(`${detail.id}: ${detail.error}`);
        report.skipped += 1;
        continue;
      }

      if (detail.type === 'spr') {
        report.skipped += 1;
        continue;
      }

      const merged = mergeDetailWithMetadata(
        {
          id: meta.question_id,
          section: meta.section,
          domain: meta.domain_label,
          domainCode: meta.domain_code,
          difficulty: meta.difficulty_label,
          skillCode: meta.skill_code,
        },
        detail,
      );

      await upsertQuestion(merged);
      report.detailsSynced += 1;
    }

    onProgress?.({
      phase: 'details',
      done: Math.min(index + SYNC_BATCH_SIZE, missing.length),
      total: missing.length,
    });
  }

  return report;
}

export async function syncDomainQuestions(domainLabel) {
  const domainEntry = [...SAT_DOMAIN_CODES.english, ...SAT_DOMAIN_CODES.math]
    .find((d) => d.label === domainLabel);

  if (!domainEntry) {
    throw new Error(`Unknown domain: ${domainLabel}`);
  }

  const section = SAT_DOMAIN_CODES.math.some((d) => d.label === domainLabel) ? 'math' : 'english';
  const listed = await listQuestionMetadata({
    test: domainEntry.test,
    domainCode: domainEntry.code,
  });

  const enriched = dedupeMetadata(listed).map((item) => enrichMetadata(item, section, domainEntry.code));
  await upsertMetadata(enriched);

  let synced = 0;
  for (const meta of enriched) {
    try {
      const detail = await fetchQuestionDetail(meta.id);
      if (detail.type === 'spr') continue;
      await upsertQuestion(mergeDetailWithMetadata(meta, detail));
      synced += 1;
    } catch {
      // Continue syncing remaining questions in the domain.
    }
  }

  return { listed: enriched.length, synced };
}

async function upsertMetadata(items) {
  for (const item of items) {
    await pool.query(
      `INSERT INTO sat_question_metadata (
         question_id, external_id, ibn, section, domain_code, domain_label,
         difficulty_code, difficulty_label, skill_code, question_type, listed_at
       ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,NOW())
       ON CONFLICT (question_id) DO UPDATE SET
         external_id = EXCLUDED.external_id,
         ibn = EXCLUDED.ibn,
         section = EXCLUDED.section,
         domain_code = EXCLUDED.domain_code,
         domain_label = EXCLUDED.domain_label,
         difficulty_code = EXCLUDED.difficulty_code,
         difficulty_label = EXCLUDED.difficulty_label,
         skill_code = EXCLUDED.skill_code,
         question_type = EXCLUDED.question_type,
         listed_at = NOW()`,
      [
        item.id,
        item.externalId,
        item.ibn,
        item.section,
        item.domainCode,
        item.domain,
        item.difficultyCode,
        item.difficulty,
        item.skillCode,
        item.questionType,
      ],
    );
  }
}

async function upsertQuestion(question) {
  await pool.query(
    `INSERT INTO sat_questions (
       question_id, external_id, ibn, section, domain_code, domain_label,
       difficulty_label, question_type, question_data, synced_at
     ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,NOW())
     ON CONFLICT (question_id) DO UPDATE SET
       external_id = EXCLUDED.external_id,
       ibn = EXCLUDED.ibn,
       section = EXCLUDED.section,
       domain_code = EXCLUDED.domain_code,
       domain_label = EXCLUDED.domain_label,
       difficulty_label = EXCLUDED.difficulty_label,
       question_type = EXCLUDED.question_type,
       question_data = EXCLUDED.question_data,
       synced_at = NOW()`,
    [
      question.id,
      question.externalId,
      question.ibn,
      question.section,
      question.domainCode,
      question.domain,
      question.difficulty,
      question.type,
      JSON.stringify({
        paragraph: question.paragraph,
        question: question.question,
        choices: question.choices,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        visuals: question.visuals,
      }),
    ],
  );
}

async function getQuestionsMissingDetails() {
  const { rows } = await pool.query(
    `SELECT m.question_id, m.section, m.domain_code, m.domain_label,
            m.difficulty_label, m.skill_code
     FROM sat_question_metadata m
     LEFT JOIN sat_questions q ON q.question_id = m.question_id
     WHERE q.question_id IS NULL
     ORDER BY m.listed_at ASC`,
  );
  return rows;
}

export async function getSyncStatus() {
  const { rows } = await pool.query(
    `SELECT
       (SELECT COUNT(*)::int FROM sat_question_metadata) AS metadata_count,
       (SELECT COUNT(*)::int FROM sat_questions WHERE question_type = 'mcq') AS synced_count,
       (SELECT MAX(synced_at) FROM sat_questions) AS last_synced_at`,
  );
  return rows[0];
}
