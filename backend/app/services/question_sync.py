from __future__ import annotations

import json

from app.constants import SAT_DOMAIN_CODES, SYNC_BATCH_SIZE, SYNC_DELAY_MS
from app.database import get_pool
from app.services.college_board_client import (
    enrich_metadata,
    fetch_question_detail,
    fetch_question_details_batch,
    list_question_metadata,
    merge_detail_with_metadata,
)


def _dedupe_metadata(items: list[dict]) -> list[dict]:
    seen = set()
    unique = []
    for item in items:
        question_id = item.get("external_id") or item.get("ibn")
        if not question_id or question_id in seen:
            continue
        seen.add(question_id)
        unique.append(item)
    return unique


async def _upsert_metadata(items: list[dict]) -> None:
    pool = get_pool()
    async with pool.acquire() as conn:
        for item in items:
            await conn.execute(
                """
                INSERT INTO sat_question_metadata (
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
                  listed_at = NOW()
                """,
                item["id"],
                item.get("externalId"),
                item.get("ibn"),
                item["section"],
                item["domainCode"],
                item["domain"],
                item.get("difficultyCode"),
                item.get("difficulty"),
                item.get("skillCode"),
                item.get("questionType"),
            )


async def _upsert_question(question: dict) -> None:
    pool = get_pool()
    payload = json.dumps(
        {
            "paragraph": question.get("paragraph"),
            "question": question.get("question"),
            "choices": question.get("choices"),
            "correctAnswer": question.get("correctAnswer"),
            "explanation": question.get("explanation"),
            "visuals": question.get("visuals"),
        }
    )
    async with pool.acquire() as conn:
        await conn.execute(
            """
            INSERT INTO sat_questions (
              question_id, external_id, ibn, section, domain_code, domain_label,
              difficulty_label, question_type, question_data, synced_at
            ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9::jsonb,NOW())
            ON CONFLICT (question_id) DO UPDATE SET
              external_id = EXCLUDED.external_id,
              ibn = EXCLUDED.ibn,
              section = EXCLUDED.section,
              domain_code = EXCLUDED.domain_code,
              domain_label = EXCLUDED.domain_label,
              difficulty_label = EXCLUDED.difficulty_label,
              question_type = EXCLUDED.question_type,
              question_data = EXCLUDED.question_data,
              synced_at = NOW()
            """,
            question["id"],
            question.get("externalId"),
            question.get("ibn"),
            question["section"],
            question.get("domainCode"),
            question["domain"],
            question.get("difficulty"),
            question.get("type"),
            payload,
        )


async def _questions_missing_details() -> list:
    pool = get_pool()
    async with pool.acquire() as conn:
        return await conn.fetch(
            """
            SELECT m.question_id, m.section, m.domain_code, m.domain_label,
                   m.difficulty_label, m.skill_code
            FROM sat_question_metadata m
            LEFT JOIN sat_questions q ON q.question_id = m.question_id
            WHERE q.question_id IS NULL
            ORDER BY m.listed_at ASC
            """
        )


async def sync_all_questions(*, on_progress=None) -> dict:
    report = {
        "metadataListed": 0,
        "detailsSynced": 0,
        "skipped": 0,
        "errors": [],
        "byDomain": {},
    }

    for section, domains in SAT_DOMAIN_CODES.items():
        for domain in domains:
            if on_progress:
                on_progress({"phase": "metadata", "section": section, "domain": domain["label"]})
            try:
                listed = await list_question_metadata(test=domain["test"], domain_code=domain["code"])
                enriched = [
                    enrich_metadata(item, section, domain["code"])
                    for item in _dedupe_metadata(listed)
                ]
                report["byDomain"][domain["label"]] = len(enriched)
                report["metadataListed"] += len(enriched)
                await _upsert_metadata(enriched)
            except Exception as exc:  # noqa: BLE001
                report["errors"].append(f"{domain['label']}: {exc}")

    missing = await _questions_missing_details()
    if on_progress:
        on_progress({"phase": "details", "total": len(missing)})

    for index in range(0, len(missing), SYNC_BATCH_SIZE):
        batch = missing[index : index + SYNC_BATCH_SIZE]
        ids = [row["question_id"] for row in batch]
        details = await fetch_question_details_batch(
            ids,
            batch_size=SYNC_BATCH_SIZE,
            delay_ms=SYNC_DELAY_MS,
        )

        for detail in details:
            meta = next((row for row in batch if row["question_id"] == detail.get("id")), None)
            if not meta:
                continue
            if detail.get("error"):
                report["errors"].append(f"{detail['id']}: {detail['error']}")
                report["skipped"] += 1
                continue
            if detail.get("type") == "spr":
                report["skipped"] += 1
                continue

            merged = merge_detail_with_metadata(
                {
                    "id": meta["question_id"],
                    "section": meta["section"],
                    "domain": meta["domain_label"],
                    "domainCode": meta["domain_code"],
                    "difficulty": meta["difficulty_label"],
                    "skillCode": meta["skill_code"],
                },
                detail,
            )
            await _upsert_question(merged)
            report["detailsSynced"] += 1

        if on_progress:
            on_progress(
                {
                    "phase": "details",
                    "done": min(index + SYNC_BATCH_SIZE, len(missing)),
                    "total": len(missing),
                }
            )

    return report


async def sync_domain_questions(domain_label: str) -> dict:
    domain_entry = next(
        (
            d
            for d in [*SAT_DOMAIN_CODES["english"], *SAT_DOMAIN_CODES["math"]]
            if d["label"] == domain_label
        ),
        None,
    )
    if not domain_entry:
        raise ValueError(f"Unknown domain: {domain_label}")

    section = (
        "math"
        if any(d["label"] == domain_label for d in SAT_DOMAIN_CODES["math"])
        else "english"
    )
    listed = await list_question_metadata(test=domain_entry["test"], domain_code=domain_entry["code"])
    enriched = [enrich_metadata(item, section, domain_entry["code"]) for item in _dedupe_metadata(listed)]
    await _upsert_metadata(enriched)

    synced = 0
    for meta in enriched:
        try:
            detail = await fetch_question_detail(meta["id"])
            if detail.get("type") == "spr":
                continue
            await _upsert_question(merge_detail_with_metadata(meta, detail))
            synced += 1
        except Exception:  # noqa: BLE001
            continue

    return {"listed": len(enriched), "synced": synced}


async def get_sync_status() -> dict:
    pool = get_pool()
    async with pool.acquire() as conn:
        row = await conn.fetchrow(
            """
            SELECT
              (SELECT COUNT(*)::int FROM sat_question_metadata) AS metadata_count,
              (SELECT COUNT(*)::int FROM sat_questions WHERE question_type = 'mcq') AS synced_count,
              (SELECT MAX(synced_at) FROM sat_questions) AS last_synced_at
            """
        )
    return {
        "metadata_count": row["metadata_count"],
        "synced_count": row["synced_count"],
        "last_synced_at": row["last_synced_at"].isoformat() if row["last_synced_at"] else None,
    }
