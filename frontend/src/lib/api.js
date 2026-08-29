const API_BASE = import.meta.env.VITE_API_URL || '';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `Request failed (${response.status})`);
  }

  return data;
}

export const api = {
  getMe: () => request('/api/auth/me'),
  signup: (payload) => request('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify(payload),
  }),
  login: (payload) => request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  }),
  logout: () => request('/api/auth/logout', { method: 'POST' }),
  getStats: () => request('/api/stats'),
  recordAttempt: (payload) => request('/api/stats/attempts', {
    method: 'POST',
    body: JSON.stringify(payload),
  }),
  getDomains: () => request('/api/questions/domains'),
  getFullTest: () => request('/api/questions/full'),
  getSectionTest: (section) => request(`/api/questions/section/${section}`),
  getTargetedTest: (domain) => request(`/api/questions/targeted/${encodeURIComponent(domain)}`),
  checkAnswer: (questionId, selectedAnswer) => request('/api/questions/check', {
    method: 'POST',
    body: JSON.stringify({ questionId, selectedAnswer }),
  }),
  getVocabDeck: () => request('/api/vocab'),
  checkVocab: (cardId, selectedAnswer) => request('/api/vocab/check', {
    method: 'POST',
    body: JSON.stringify({ cardId, selectedAnswer }),
  }),
  getSyncStatus: () => request('/api/sync/status'),
};

export function googleLoginUrl() {
  return `${API_BASE}/api/auth/google`;
}
