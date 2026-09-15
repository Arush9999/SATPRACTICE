from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException
from urllib.parse import unquote

from app.deps import require_user
from app.services.question_sync import get_sync_status, sync_all_questions, sync_domain_questions

router = APIRouter(prefix="/api/sync", tags=["sync"])


@router.get("/status")
async def sync_status(_user=Depends(require_user)):
    return await get_sync_status()


@router.post("/all")
async def sync_all(_user=Depends(require_user)):
    report = await sync_all_questions()
    status = await get_sync_status()
    return {"report": report, "status": status}


@router.post("/domain/{domain}")
async def sync_domain(domain: str, _user=Depends(require_user)):
    try:
        report = await sync_domain_questions(unquote(domain))
        return report
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
