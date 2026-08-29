import {
  CB_API_BASE,
  CB_ASSESSMENT_ID,
  CB_DISCLOSED_BASE,
  DIFFICULTY_LABELS,
  DOMAIN_LABEL_BY_CODE,
} from '../constants.js';

const REQUEST_TIMEOUT_MS = 30000;
const MAX_RETRIES = Number(process.env.CB_SYNC_RETRIES || 4);

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  Origin: 'https://satsuitequestionbank.collegeboard.org',
  Referer: 'https://satsuitequestionbank.collegeboard.org/',
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRetryableStatus(status) {
  return status === 403 || status === 429 || status === 502 || status === 503 || status === 504;
}

async function cbPost(path, body, { retries = MAX_RETRIES } = {}) {
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(`${CB_API_BASE}${path}`, {
        method: 'POST',
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(body),
        signal: controller.signal,
      });

      if (!response.ok) {
        const text = await response.text().catch(() => '');
        const error = new Error(`College Board API ${path} failed (${response.status}): ${text.slice(0, 200)}`);
        error.status = response.status;

        if (isRetryableStatus(response.status) && attempt < retries) {
          const waitMs = Math.min(30000, 1000 * (2 ** attempt));
          await sleep(waitMs);
          lastError = error;
          continue;
        }

        throw error;
      }

      return response.json();
    } catch (error) {
      lastError = error;
      if (error.name === 'AbortError' && attempt < retries) {
        await sleep(1000 * (2 ** attempt));
        continue;
      }
      if (attempt >= retries) throw error;
      if (!error.status || !isRetryableStatus(error.status)) throw error;
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError;
}

export async function listQuestionMetadata({ test, domainCode }) {
  const data = await cbPost('/get-questions', {
    asmtEventId: CB_ASSESSMENT_ID,
    test,
    domain: domainCode,
  });

  if (!Array.isArray(data)) {
    throw new Error('College Board question list returned an unexpected response');
  }

  return data;
}

export async function fetchQuestionDetail(questionId) {
  if (!questionId) {
    throw new Error('Question ID is required');
  }

  if (questionId.includes('-DC')) {
    return fetchDisclosedQuestion(questionId);
  }

  const data = await cbPost('/get-question', { external_id: questionId });
  return normalizeDetailResponse(data);
}

async function fetchDisclosedQuestion(questionId) {
  let lastError;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(`${CB_DISCLOSED_BASE}/${questionId}.json`, {
        headers: {
          Accept: 'application/json',
          'User-Agent': DEFAULT_HEADERS['User-Agent'],
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        const error = new Error(`Disclosed question fetch failed (${response.status})`);
        error.status = response.status;
        if (isRetryableStatus(response.status) && attempt < MAX_RETRIES) {
          await sleep(Math.min(30000, 1000 * (2 ** attempt)));
          lastError = error;
          continue;
        }
        throw error;
      }

      const payload = await response.json();
      const item = Array.isArray(payload) ? payload[0] : payload;
      return normalizeDisclosedQuestion(item, questionId);
    } catch (error) {
      lastError = error;
      if (attempt >= MAX_RETRIES) throw error;
      if (!error.status || !isRetryableStatus(error.status)) throw error;
      await sleep(Math.min(30000, 1000 * (2 ** attempt)));
    } finally {
      clearTimeout(timeout);
    }
  }

  throw lastError;
}

function normalizeDetailResponse(raw) {
  if (!raw?.externalid && !raw?.external_id) {
    throw new Error('Question detail missing external ID');
  }

  const id = raw.externalid || raw.external_id;

  if (raw.type === 'spr') {
    return {
      id,
      externalId: id,
      ibn: null,
      type: 'spr',
      section: null,
      domain: null,
      difficulty: null,
      paragraph: raw.stimulus || null,
      question: raw.stem || '',
      choices: {},
      correctAnswer: Array.isArray(raw.correct_answer) ? raw.correct_answer[0] : raw.correct_answer,
      explanation: raw.rationale || null,
      visuals: null,
    };
  }

  const choices = {};
  if (Array.isArray(raw.answerOptions)) {
    raw.answerOptions.forEach((option, index) => {
      const key = ['A', 'B', 'C', 'D'][index];
      if (key) choices[key] = option.content;
    });
  }

  const correctAnswer = Array.isArray(raw.correct_answer)
    ? raw.correct_answer[0]?.toUpperCase()
    : String(raw.correct_answer || '').toUpperCase();

  return {
    id,
    externalId: id,
    ibn: null,
    type: 'mcq',
    section: null,
    domain: null,
    difficulty: null,
    paragraph: raw.stimulus || null,
    question: raw.stem || '',
    choices,
    correctAnswer,
    explanation: raw.rationale || null,
    visuals: null,
  };
}

function normalizeDisclosedQuestion(raw, questionId) {
  if (!raw) throw new Error('Invalid disclosed question payload');

  if (raw.answer?.style === 'Multiple Choice') {
    const choices = {
      A: raw.answer.choices?.a?.body,
      B: raw.answer.choices?.b?.body,
      C: raw.answer.choices?.c?.body,
      D: raw.answer.choices?.d?.body,
    };

    return {
      id: questionId,
      externalId: null,
      ibn: questionId,
      type: 'mcq',
      section: null,
      domain: null,
      difficulty: null,
      paragraph: raw.body || null,
      question: raw.prompt || '',
      choices,
      correctAnswer: String(raw.answer.correct_choice || '').toUpperCase(),
      explanation: raw.answer.rationale || null,
      visuals: null,
    };
  }

  return {
    id: questionId,
    externalId: null,
    ibn: questionId,
    type: 'spr',
    section: null,
    domain: null,
    difficulty: null,
    paragraph: raw.body || null,
    question: raw.prompt || '',
    choices: {},
    correctAnswer: null,
    explanation: raw.answer?.rationale || null,
    visuals: null,
  };
}

export function enrichMetadata(question, section, domainCode) {
  const id = question.external_id || question.ibn;
  return {
    id,
    externalId: question.external_id || null,
    ibn: question.ibn || null,
    section,
    domainCode,
    domain: DOMAIN_LABEL_BY_CODE[domainCode] || question.primary_class_cd_desc || domainCode,
    difficulty: DIFFICULTY_LABELS[question.difficulty] || question.difficulty || null,
    difficultyCode: question.difficulty || null,
    skillCode: question.skill_cd || null,
    questionType: question.ibn ? 'ibn' : 'external',
  };
}

export function mergeDetailWithMetadata(metadata, detail) {
  return {
    ...detail,
    id: detail.id || metadata.id,
    section: metadata.section,
    domain: metadata.domain,
    difficulty: metadata.difficulty,
    domainCode: metadata.domainCode,
    skillCode: metadata.skillCode,
  };
}

export async function fetchQuestionDetailsBatch(ids, { batchSize = 5, delayMs = 600, onProgress } = {}) {
  const results = [];
  let done = 0;

  // Fetch one at a time within each batch to avoid College Board rate limits
  for (let index = 0; index < ids.length; index += 1) {
    const id = ids[index];
    try {
      const detail = await fetchQuestionDetail(id);
      results.push(detail);
    } catch (error) {
      results.push({ id, error: error.message });
    }

    done += 1;
    if (done % batchSize === 0 || done === ids.length) {
      onProgress?.({ done, total: ids.length });
    }

    if (index + 1 < ids.length && delayMs > 0) {
      await sleep(delayMs);
    }
  }

  return results;
}
