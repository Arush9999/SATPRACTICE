from __future__ import annotations

from datetime import date, datetime, timedelta, timezone

from app.constants import STREAK_MIN_PER_SECTION
from app.database import get_pool


def _today() -> date:
    return datetime.now(timezone.utc).date()


def _yesterday() -> date:
    return _today() - timedelta(days=1)


async def _update_streak(user_id: int, today: date) -> None:
    pool = get_pool()
    async with pool.acquire() as conn:
        existing = await conn.fetchrow(
            "SELECT current_streak, last_streak_date FROM user_streaks WHERE user_id = $1",
            user_id,
        )

        if not existing:
            await conn.execute(
                "INSERT INTO user_streaks (user_id, current_streak, last_streak_date) VALUES ($1, 1, $2)",
                user_id,
                today,
            )
            return

        if existing["last_streak_date"] == today:
            return

        next_streak = (
            existing["current_streak"] + 1
            if existing["last_streak_date"] == _yesterday()
            else 1
        )
        await conn.execute(
            "UPDATE user_streaks SET current_streak = $1, last_streak_date = $2 WHERE user_id = $3",
            next_streak,
            today,
            user_id,
        )


async def _update_daily_activity(user_id: int, section: str) -> None:
    today = _today()
    column = "math_count" if section == "math" else "english_count"
    pool = get_pool()

    async with pool.acquire() as conn:
        await conn.execute(
            f"""
            INSERT INTO daily_activity (user_id, activity_date, math_count, english_count)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT (user_id, activity_date)
            DO UPDATE SET {column} = daily_activity.{column} + 1
            """,
            user_id,
            today,
            1 if section == "math" else 0,
            1 if section == "english" else 0,
        )

        row = await conn.fetchrow(
            "SELECT math_count, english_count FROM daily_activity WHERE user_id = $1 AND activity_date = $2",
            user_id,
            today,
        )

    if (
        row
        and row["math_count"] >= STREAK_MIN_PER_SECTION
        and row["english_count"] >= STREAK_MIN_PER_SECTION
    ):
        await _update_streak(user_id, today)


async def record_attempt(
    user_id: int,
    *,
    question_id: str,
    section: str,
    domain: str | None,
    is_correct: bool,
    session_type: str,
) -> None:
    pool = get_pool()
    async with pool.acquire() as conn:
        await conn.execute(
            """
            INSERT INTO question_attempts
              (user_id, question_id, section, domain, is_correct, session_type)
            VALUES ($1, $2, $3, $4, $5, $6)
            """,
            user_id,
            question_id,
            section,
            domain,
            is_correct,
            session_type,
        )

    if section in {"math", "english"}:
        await _update_daily_activity(user_id, section)


async def get_user_stats(user_id: int) -> dict:
    week_ago = datetime.now(timezone.utc) - timedelta(days=7)
    pool = get_pool()

    async with pool.acquire() as conn:
        total = await conn.fetchval(
            "SELECT COUNT(*)::int FROM question_attempts WHERE user_id = $1",
            user_id,
        )
        week_rows = await conn.fetch(
            """
            SELECT section,
                   COUNT(*)::int AS total,
                   SUM(CASE WHEN is_correct THEN 1 ELSE 0 END)::int AS correct
            FROM question_attempts
            WHERE user_id = $1 AND attempted_at >= $2 AND section IN ('math', 'english')
            GROUP BY section
            """,
            user_id,
            week_ago,
        )
        streak = await conn.fetchval(
            "SELECT current_streak FROM user_streaks WHERE user_id = $1",
            user_id,
        )

    weekly = {"math": None, "english": None}
    for row in week_rows:
        weekly[row["section"]] = (
            round((row["correct"] / row["total"]) * 100) if row["total"] > 0 else None
        )

    return {
        "totalQuestions": total or 0,
        "weeklyAccuracy": weekly,
        "dailyStreak": streak or 0,
    }
