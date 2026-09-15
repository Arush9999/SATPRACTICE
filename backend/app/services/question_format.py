from __future__ import annotations

import json


def row_to_question(row) -> dict:
    data = row["question_data"] or {}
    if isinstance(data, str):
        data = json.loads(data)

    return {
        "id": row["question_id"],
        "section": row["section"],
        "domain": row["domain_label"],
        "difficulty": row["difficulty_label"],
        "paragraph": data.get("paragraph"),
        "question": data.get("question") or "",
        "choices": data.get("choices") or {},
        "correctAnswer": data.get("correctAnswer"),
        "explanation": data.get("explanation"),
        "visuals": data.get("visuals"),
    }
