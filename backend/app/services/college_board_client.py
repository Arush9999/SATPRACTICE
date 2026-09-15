from __future__ import annotations

import asyncio
import json

import httpx

from app.config import get_settings
from app.constants import (
    CB_API_BASE,
    CB_ASSESSMENT_ID,
    CB_DISCLOSED_BASE,
    DIFFICULTY_LABELS,
    DOMAIN_LABEL_BY_CODE,
)

REQUEST_TIMEOUT_MS = 30000
settings = get_settings()
MAX_RETRIES = settings.cb_sync_retries

DEFAULT_HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    ),
    "Origin": "https://satsuitequestionbank.collegeboard.org",
    "Referer": "https://satsuitequestionbank.collegeboard.org/",
}


def _is_retryable(status: int) -> bool:
    return status in {403, 429, 502, 503, 504}


async def _cb_post(path: str, body: dict, retries: int = MAX_RETRIES) -> dict | list:
    last_error: Exception | None = None
    timeout = REQUEST_TIMEOUT_MS / 1000

    async with httpx.AsyncClient(timeout=timeout) as client:
        for attempt in range(retries + 1):
            try:
                response = await client.post(
                    f"{CB_API_BASE}{path}",
                    headers=DEFAULT_HEADERS,
                    content=json.dumps(body),
                )
                if response.status_code >= 400:
                    error = RuntimeError(
                        f"College Board API {path} failed ({response.status_code}): "
                        f"{response.text[:200]}"
                    )
                    error.status = response.status_code  # type: ignore[attr-defined]
                    if _is_retryable(response.status_code) and attempt < retries:
                        await asyncio.sleep(min(30, 2**attempt))
                        last_error = error
                        continue
                    raise error
                return response.json()
            except Exception as exc:  # noqa: BLE001
                last_error = exc
                status = getattr(exc, "status", None)
                if attempt >= retries:
                    raise
                if status and _is_retryable(status):
                    await asyncio.sleep(min(30, 2**attempt))
                    continue
                if isinstance(exc, httpx.TimeoutException):
                    await asyncio.sleep(min(30, 2**attempt))
                    continue
                raise

    assert last_error is not None
    raise last_error


async def list_question_metadata(*, test: int, domain_code: str) -> list:
    data = await _cb_post(
        "/get-questions",
        {
            "asmtEventId": CB_ASSESSMENT_ID,
            "test": test,
            "domain": domain_code,
        },
    )
    if not isinstance(data, list):
        raise RuntimeError("College Board question list returned an unexpected response")
    return data


async def fetch_question_detail(question_id: str) -> dict:
    if not question_id:
        raise ValueError("Question ID is required")
    if "-DC" in question_id:
        return await _fetch_disclosed_question(question_id)
    data = await _cb_post("/get-question", {"external_id": question_id})
    return _normalize_detail_response(data)


async def _fetch_disclosed_question(question_id: str) -> dict:
    last_error: Exception | None = None
    timeout = REQUEST_TIMEOUT_MS / 1000

    async with httpx.AsyncClient(timeout=timeout) as client:
        for attempt in range(MAX_RETRIES + 1):
            try:
                response = await client.get(
                    f"{CB_DISCLOSED_BASE}/{question_id}.json",
                    headers={
                        "Accept": "application/json",
                        "User-Agent": DEFAULT_HEADERS["User-Agent"],
                    },
                )
                if response.status_code >= 400:
                    error = RuntimeError(f"Disclosed question fetch failed ({response.status_code})")
                    error.status = response.status_code  # type: ignore[attr-defined]
                    if _is_retryable(response.status_code) and attempt < MAX_RETRIES:
                        await asyncio.sleep(min(30, 2**attempt))
                        last_error = error
                        continue
                    raise error
                payload = response.json()
                item = payload[0] if isinstance(payload, list) else payload
                return _normalize_disclosed_question(item, question_id)
            except Exception as exc:  # noqa: BLE001
                last_error = exc
                if attempt >= MAX_RETRIES:
                    raise
                status = getattr(exc, "status", None)
                if status and _is_retryable(status):
                    await asyncio.sleep(min(30, 2**attempt))
                    continue
                raise

    assert last_error is not None
    raise last_error


def _normalize_detail_response(raw: dict) -> dict:
    question_id = raw.get("externalid") or raw.get("external_id")
    if not question_id:
        raise RuntimeError("Question detail missing external ID")

    if raw.get("type") == "spr":
        correct = raw.get("correct_answer")
        if isinstance(correct, list):
            correct = correct[0] if correct else None
        return {
            "id": question_id,
            "externalId": question_id,
            "ibn": None,
            "type": "spr",
            "section": None,
            "domain": None,
            "difficulty": None,
            "paragraph": raw.get("stimulus"),
            "question": raw.get("stem") or "",
            "choices": {},
            "correctAnswer": correct,
            "explanation": raw.get("rationale"),
            "visuals": None,
        }

    choices = {}
    options = raw.get("answerOptions") or []
    for index, option in enumerate(options):
        key = ["A", "B", "C", "D"][index] if index < 4 else None
        if key:
            choices[key] = option.get("content")

    correct = raw.get("correct_answer")
    if isinstance(correct, list):
        correct = (correct[0] or "").upper()
    else:
        correct = str(correct or "").upper()

    return {
        "id": question_id,
        "externalId": question_id,
        "ibn": None,
        "type": "mcq",
        "section": None,
        "domain": None,
        "difficulty": None,
        "paragraph": raw.get("stimulus"),
        "question": raw.get("stem") or "",
        "choices": choices,
        "correctAnswer": correct,
        "explanation": raw.get("rationale"),
        "visuals": None,
    }


def _normalize_disclosed_question(raw: dict | None, question_id: str) -> dict:
    if not raw:
        raise RuntimeError("Invalid disclosed question payload")

    answer = raw.get("answer") or {}
    if answer.get("style") == "Multiple Choice":
        choice_map = answer.get("choices") or {}
        return {
            "id": question_id,
            "externalId": None,
            "ibn": question_id,
            "type": "mcq",
            "section": None,
            "domain": None,
            "difficulty": None,
            "paragraph": raw.get("body"),
            "question": raw.get("prompt") or "",
            "choices": {
                "A": (choice_map.get("a") or {}).get("body"),
                "B": (choice_map.get("b") or {}).get("body"),
                "C": (choice_map.get("c") or {}).get("body"),
                "D": (choice_map.get("d") or {}).get("body"),
            },
            "correctAnswer": str(answer.get("correct_choice") or "").upper(),
            "explanation": answer.get("rationale"),
            "visuals": None,
        }

    return {
        "id": question_id,
        "externalId": None,
        "ibn": question_id,
        "type": "spr",
        "section": None,
        "domain": None,
        "difficulty": None,
        "paragraph": raw.get("body"),
        "question": raw.get("prompt") or "",
        "choices": {},
        "correctAnswer": None,
        "explanation": answer.get("rationale"),
        "visuals": None,
    }


def enrich_metadata(question: dict, section: str, domain_code: str) -> dict:
    question_id = question.get("external_id") or question.get("ibn")
    return {
        "id": question_id,
        "externalId": question.get("external_id"),
        "ibn": question.get("ibn"),
        "section": section,
        "domainCode": domain_code,
        "domain": DOMAIN_LABEL_BY_CODE.get(domain_code)
        or question.get("primary_class_cd_desc")
        or domain_code,
        "difficulty": DIFFICULTY_LABELS.get(question.get("difficulty"), question.get("difficulty")),
        "difficultyCode": question.get("difficulty"),
        "skillCode": question.get("skill_cd"),
        "questionType": "ibn" if question.get("ibn") else "external",
    }


def merge_detail_with_metadata(metadata: dict, detail: dict) -> dict:
    return {
        **detail,
        "id": detail.get("id") or metadata.get("id"),
        "section": metadata.get("section"),
        "domain": metadata.get("domain"),
        "difficulty": metadata.get("difficulty"),
        "domainCode": metadata.get("domainCode"),
        "skillCode": metadata.get("skillCode"),
    }


async def fetch_question_details_batch(
    ids: list[str],
    *,
    batch_size: int = 5,
    delay_ms: int = 600,
    on_progress=None,
) -> list[dict]:
    results = []
    for index, question_id in enumerate(ids):
        try:
            detail = await fetch_question_detail(question_id)
            results.append(detail)
        except Exception as exc:  # noqa: BLE001
            results.append({"id": question_id, "error": str(exc)})

        done = index + 1
        if on_progress and (done % batch_size == 0 or done == len(ids)):
            on_progress({"done": done, "total": len(ids)})

        if index + 1 < len(ids) and delay_ms > 0:
            await asyncio.sleep(delay_ms / 1000)

    return results
