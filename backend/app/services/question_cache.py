import time

TTL_MS = 60 * 60 * 1000
_cache: dict[str, dict] = {}


def cache_questions(questions: list[dict]) -> None:
    expires_at = time.time() * 1000 + TTL_MS
    for question in questions:
        _cache[question["id"]] = {**question, "expiresAt": expires_at}


def get_cached_question(question_id: str) -> dict | None:
    entry = _cache.get(question_id)
    if not entry:
        return None
    if time.time() * 1000 > entry["expiresAt"]:
        _cache.pop(question_id, None)
        return None
    return entry


def strip_answers(questions: list[dict]) -> list[dict]:
    cleaned = []
    for question in questions:
        item = {
            key: value
            for key, value in question.items()
            if key not in {"correctAnswer", "explanation", "expiresAt"}
        }
        item["hasExplanation"] = bool(question.get("explanation"))
        cleaned.append(item)
    return cleaned
