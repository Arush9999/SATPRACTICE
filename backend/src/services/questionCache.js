const cache = new Map();
const TTL_MS = 60 * 60 * 1000;

export function cacheQuestions(questions) {
  const expiresAt = Date.now() + TTL_MS;
  for (const q of questions) {
    cache.set(q.id, { ...q, expiresAt });
  }
}

export function getCachedQuestion(id) {
  const entry = cache.get(id);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    cache.delete(id);
    return null;
  }
  return entry;
}

export function stripAnswers(questions) {
  return questions.map(({ correctAnswer, explanation, expiresAt, ...rest }) => ({
    ...rest,
    hasExplanation: Boolean(explanation),
  }));
}
