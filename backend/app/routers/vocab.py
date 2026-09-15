from __future__ import annotations

import json
import random

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from app.config import BACKEND_ROOT, REPO_ROOT
from app.deps import require_user
from app.services.stats_service import record_attempt

router = APIRouter(prefix="/api/vocab", tags=["vocab"])

_candidates = [
    REPO_ROOT / "data" / "vocab.json",
    BACKEND_ROOT / "data" / "vocab.json",
]
_vocab_path = next((path for path in _candidates if path.exists()), None)
if not _vocab_path:
    raise RuntimeError("vocab.json not found under data/")

with _vocab_path.open(encoding="utf-8") as handle:
    VOCAB_CARDS = json.load(handle)


class VocabCheckBody(BaseModel):
    cardId: str
    selectedAnswer: str


def _shuffle(items: list) -> list:
    copy = list(items)
    random.shuffle(copy)
    return copy


@router.get("")
@router.get("/")
async def vocab_deck(_user=Depends(require_user)):
    return {
        "cards": [
            {
                "id": card["id"],
                "question": card["question"],
                "context": card["context"],
                "choices": _shuffle([card["correct"], *card["wrong"]]),
            }
            for card in VOCAB_CARDS
        ],
        "total": len(VOCAB_CARDS),
    }


@router.post("/check")
async def vocab_check(body: VocabCheckBody, user=Depends(require_user)):
    card = next((item for item in VOCAB_CARDS if item["id"] == body.cardId), None)
    if not card:
        raise HTTPException(status_code=404, detail="Card not found")

    is_correct = body.selectedAnswer == card["correct"]
    await record_attempt(
        user["id"],
        question_id=body.cardId,
        section="english",
        domain="Vocabulary",
        is_correct=is_correct,
        session_type="vocab",
    )
    return {
        "isCorrect": is_correct,
        "correct": card["correct"],
        "explanation": card["explanation"],
    }


@router.get("/{card_id}")
async def vocab_card(card_id: str, _user=Depends(require_user)):
    card = next((item for item in VOCAB_CARDS if item["id"] == card_id), None)
    if not card:
        raise HTTPException(status_code=404, detail="Card not found")
    return {
        "id": card["id"],
        "question": card["question"],
        "context": card["context"],
        "choices": _shuffle([card["correct"], *card["wrong"]]),
    }
