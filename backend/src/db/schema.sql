CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  google_id VARCHAR(255) UNIQUE,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  name VARCHAR(255),
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT users_auth_method CHECK (google_id IS NOT NULL OR password_hash IS NOT NULL)
);

CREATE TABLE IF NOT EXISTS question_attempts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  question_id VARCHAR(100) NOT NULL,
  section VARCHAR(20) NOT NULL,
  domain VARCHAR(100),
  is_correct BOOLEAN NOT NULL,
  session_type VARCHAR(50) NOT NULL,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_streaks (
  user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  current_streak INTEGER DEFAULT 0,
  last_streak_date DATE
);

CREATE TABLE IF NOT EXISTS daily_activity (
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  activity_date DATE NOT NULL,
  math_count INTEGER DEFAULT 0,
  english_count INTEGER DEFAULT 0,
  PRIMARY KEY (user_id, activity_date)
);

CREATE INDEX IF NOT EXISTS idx_attempts_user_date ON question_attempts(user_id, attempted_at);
CREATE INDEX IF NOT EXISTS idx_attempts_user_section ON question_attempts(user_id, section);

CREATE TABLE IF NOT EXISTS sat_question_metadata (
  question_id VARCHAR(100) PRIMARY KEY,
  external_id VARCHAR(100),
  ibn VARCHAR(100),
  section VARCHAR(20) NOT NULL,
  domain_code VARCHAR(10) NOT NULL,
  domain_label VARCHAR(100) NOT NULL,
  difficulty_code VARCHAR(1),
  difficulty_label VARCHAR(20),
  skill_code VARCHAR(10),
  question_type VARCHAR(20),
  listed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sat_questions (
  question_id VARCHAR(100) PRIMARY KEY,
  external_id VARCHAR(100),
  ibn VARCHAR(100),
  section VARCHAR(20) NOT NULL,
  domain_code VARCHAR(10) NOT NULL,
  domain_label VARCHAR(100) NOT NULL,
  difficulty_label VARCHAR(20),
  question_type VARCHAR(10) NOT NULL DEFAULT 'mcq',
  question_data JSONB NOT NULL,
  synced_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_sat_questions_section ON sat_questions(section);
CREATE INDEX IF NOT EXISTS idx_sat_questions_domain ON sat_questions(domain_label);
CREATE INDEX IF NOT EXISTS idx_sat_metadata_section ON sat_question_metadata(section);
CREATE INDEX IF NOT EXISTS idx_sat_metadata_domain ON sat_question_metadata(domain_label);
