from __future__ import annotations

import random

from app.constants import DOMAIN_CODE_BY_LABEL, SECTION_COUNTS
from app.database import get_pool
from app.services.question_format import row_to_question
from app.services.sat_test_builder import build_full_test, build_section_test


def shuffle(items: list) -> list:
    copy = list(items)
    random.shuffle(copy)
    return copy


async def query_questions(*, section: str | None = None, domain_label: str | None = None, limit: int) -> list[dict]:
    params: list = []
    sql = """
        SELECT question_id, section, domain_label, difficulty_label, question_data
        FROM sat_questions
        WHERE question_type = 'mcq'
    """

    if section:
        params.append(section)
        sql += f" AND section = ${len(params)}"

    if domain_label:
        params.append(domain_label)
        sql += f" AND domain_label = ${len(params)}"

    sql += " ORDER BY RANDOM()"
    params.append(limit)
    sql += f" LIMIT ${len(params)}"

    pool = get_pool()
    async with pool.acquire() as conn:
        rows = await conn.fetch(sql, *params)
    return [row_to_question(row) for row in rows]


async def fetch_questions(*, section: str | None = None, domain: str | None = None, limit: int) -> list[dict]:
    questions = await query_questions(section=section, domain_label=domain, limit=limit)
    if len(questions) < limit:
        scope = f" for {domain}" if domain else (f" for {section}" if section else "")
        raise ValueError(
            f"Only {len(questions)} synced question(s) available{scope}. "
            "Run `python -m scripts.sync_questions` in the backend folder to pull from the College Board question bank."
        )
    return shuffle(questions)[:limit]


async def fetch_full_test() -> dict:
    return await build_full_test()


async def fetch_section_test(section: str) -> dict:
    if section not in {"english", "math"}:
        raise ValueError("Section must be english or math")
    return await build_section_test(section)


async def fetch_targeted_practice(domain: str) -> list[dict]:
    if domain not in DOMAIN_CODE_BY_LABEL:
        raise ValueError(f"Invalid domain: {domain}")
    return await fetch_questions(domain=domain, limit=SECTION_COUNTS["targeted"])


async def get_question_from_store(question_id: str) -> dict | None:
    pool = get_pool()
    async with pool.acquire() as conn:
        row = await conn.fetchrow(
            """
            SELECT question_id, section, domain_label, difficulty_label, question_data
            FROM sat_questions WHERE question_id = $1
            """,
            question_id,
        )
    if not row:
        return None
    return row_to_question(row)
