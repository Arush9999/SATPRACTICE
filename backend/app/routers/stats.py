from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel

from app.deps import require_user
from app.services.stats_service import get_user_stats, record_attempt

router = APIRouter(prefix="/api/stats", tags=["stats"])


class AttemptBody(BaseModel):
    questionId: str
    section: str
    domain: str | None = None
    isCorrect: bool
    sessionType: str


@router.get("")
@router.get("/")
async def stats(user=Depends(require_user)):
    return await get_user_stats(user["id"])


@router.post("/attempts")
async def attempts(body: AttemptBody, user=Depends(require_user)):
    if not body.questionId or not body.section or not body.sessionType:
        raise HTTPException(status_code=400, detail="Missing required fields")

    await record_attempt(
        user["id"],
        question_id=body.questionId,
        section=body.section,
        domain=body.domain,
        is_correct=body.isCorrect,
        session_type=body.sessionType,
    )
    return await get_user_stats(user["id"])
