import pool from '../db/pool.js';
import { STREAK_MIN_PER_SECTION } from '../constants.js';

function todayDate() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayDate() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

async function updateDailyActivity(userId, section) {
  const today = todayDate();
  const column = section === 'math' ? 'math_count' : 'english_count';

  await pool.query(
    `INSERT INTO daily_activity (user_id, activity_date, math_count, english_count)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (user_id, activity_date)
     DO UPDATE SET ${column} = daily_activity.${column} + 1`,
    [userId, today, section === 'math' ? 1 : 0, section === 'english' ? 1 : 0],
  );

  const { rows } = await pool.query(
    'SELECT math_count, english_count FROM daily_activity WHERE user_id = $1 AND activity_date = $2',
    [userId, today],
  );

  if (rows[0]?.math_count >= STREAK_MIN_PER_SECTION && rows[0]?.english_count >= STREAK_MIN_PER_SECTION) {
    await updateStreak(userId, today);
  }
}

async function updateStreak(userId, today) {
  const { rows } = await pool.query(
    'SELECT current_streak, last_streak_date FROM user_streaks WHERE user_id = $1',
    [userId],
  );

  const existing = rows[0];
  const yesterday = yesterdayDate();

  if (!existing) {
    await pool.query(
      'INSERT INTO user_streaks (user_id, current_streak, last_streak_date) VALUES ($1, 1, $2)',
      [userId, today],
    );
    return;
  }

  if (existing.last_streak_date === today) return;

  const nextStreak = existing.last_streak_date === yesterday
    ? existing.current_streak + 1
    : 1;

  await pool.query(
    'UPDATE user_streaks SET current_streak = $1, last_streak_date = $2 WHERE user_id = $3',
    [nextStreak, today, userId],
  );
}

export async function recordAttempt(userId, { questionId, section, domain, isCorrect, sessionType }) {
  await pool.query(
    `INSERT INTO question_attempts (user_id, question_id, section, domain, is_correct, session_type)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [userId, questionId, section, domain, isCorrect, sessionType],
  );

  if (section === 'math' || section === 'english') {
    await updateDailyActivity(userId, section);
  }
}

export async function getUserStats(userId) {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const [totalResult, weekResult, streakResult] = await Promise.all([
    pool.query('SELECT COUNT(*)::int AS total FROM question_attempts WHERE user_id = $1', [userId]),
    pool.query(
      `SELECT section,
              COUNT(*)::int AS total,
              SUM(CASE WHEN is_correct THEN 1 ELSE 0 END)::int AS correct
       FROM question_attempts
       WHERE user_id = $1 AND attempted_at >= $2 AND section IN ('math', 'english')
       GROUP BY section`,
      [userId, weekAgo.toISOString()],
    ),
    pool.query(
      'SELECT current_streak FROM user_streaks WHERE user_id = $1',
      [userId],
    ),
  ]);

  const weekBySection = { math: null, english: null };
  for (const row of weekResult.rows) {
    weekBySection[row.section] = row.total > 0
      ? Math.round((row.correct / row.total) * 100)
      : null;
  }

  return {
    totalQuestions: totalResult.rows[0]?.total || 0,
    weeklyAccuracy: weekBySection,
    dailyStreak: streakResult.rows[0]?.current_streak || 0,
  };
}
