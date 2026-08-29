export const CB_ASSESSMENT_ID = Number(process.env.CB_ASSESSMENT_ID || 99);

export const CB_API_BASE =
  process.env.CB_QUESTION_BANK_API
  || 'https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital';

export const CB_DISCLOSED_BASE =
  process.env.CB_DISCLOSED_API || 'https://saic.collegeboard.org/disclosed';

export const SAT_DOMAIN_CODES = {
  english: [
    { code: 'INI', label: 'Information and Ideas', test: 1 },
    { code: 'CAS', label: 'Craft and Structure', test: 1 },
    { code: 'EOI', label: 'Expression of Ideas', test: 1 },
    { code: 'SEC', label: 'Standard English Conventions', test: 1 },
  ],
  math: [
    { code: 'H', label: 'Algebra', test: 2 },
    { code: 'P', label: 'Advanced Math', test: 2 },
    { code: 'Q', label: 'Problem-Solving and Data Analysis', test: 2 },
    { code: 'S', label: 'Geometry and Trigonometry', test: 2 },
  ],
};

export const SAT_DOMAINS = {
  math: SAT_DOMAIN_CODES.math.map((d) => d.label),
  english: SAT_DOMAIN_CODES.english.map((d) => d.label),
};

export const DOMAIN_LABEL_BY_CODE = Object.fromEntries(
  [...SAT_DOMAIN_CODES.english, ...SAT_DOMAIN_CODES.math].map((d) => [d.code, d.label]),
);

export const DOMAIN_CODE_BY_LABEL = Object.fromEntries(
  [...SAT_DOMAIN_CODES.english, ...SAT_DOMAIN_CODES.math].map((d) => [d.label, d.code]),
);

export const DIFFICULTY_LABELS = {
  E: 'Easy',
  M: 'Medium',
  H: 'Hard',
};

export const SECTION_COUNTS = {
  english: 54,
  math: 44,
  full: 98,
  targeted: 15,
};

// Digital SAT module timing (matches College Board Bluebook)
export const MODULE_TIMING = {
  english: {
    questionsPerModule: 27,
    moduleSeconds: 32 * 60,
  },
  math: {
    questionsPerModule: 22,
    moduleSeconds: 35 * 60,
  },
  breakSeconds: 10 * 60,
};

export const ADAPTIVE_THRESHOLD = 0.55;

export const STREAK_MIN_PER_SECTION = 5;

export const SYNC_BATCH_SIZE = Number(process.env.CB_SYNC_BATCH_SIZE || 5);
export const SYNC_DELAY_MS = Number(process.env.CB_SYNC_DELAY_MS || 600);
