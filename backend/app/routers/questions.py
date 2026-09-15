from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from urllib.parse import unquote

from app.constants import SAT_DOMAINS
from app.deps import require_user
from app.services.question_cache import cache_questions, get_cached_question, strip_answers
from app.services.sat_questions import (
    fetch_full_test,
    fetch_section_test,
    fetch_targeted_practice,
    get_question_from_store,
)
from app.services.sat_test_builder import collect_questions_from_test

router = APIRouter(prefix="/api/questions", tags=["questions"])


class CheckBody(BaseModel):
    questionId: str
    selectedAnswer: str


def serialize_timed_test(test: dict) -> dict:
    cache_questions(collect_questions_from_test(test))
    modules = []
    for module in test["modules"]:
        if module.get("type") == "break":
            modules.append(module)
        else:
            modules.append({**module, "questions": strip_answers(module["questions"])})
    return {**test, "modules": modules}


@router.get("/domains")
async def domains():
    return SAT_DOMAINS


@router.get("/full")
async def full_test(_user=Depends(require_user)):
    try:
        test = await fetch_full_test()
        return serialize_timed_test(test)
    except ValueError as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.get("/section/{section}")
async def section_test(section: str, _user=Depends(require_user)):
    if section not in {"math", "english"}:
        raise HTTPException(status_code=400, detail="Section must be math or english")
    try:
        test = await fetch_section_test(section)
        return serialize_timed_test(test)
    except ValueError as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.get("/targeted/{domain}")
async def targeted(domain: str, _user=Depends(require_user)):
    domain = unquote(domain)
    all_domains = [*SAT_DOMAINS["math"], *SAT_DOMAINS["english"]]
    if domain not in all_domains:
        raise HTTPException(status_code=400, detail="Invalid domain")
    try:
        questions = await fetch_targeted_practice(domain)
        cache_questions(questions)
        return {"questions": strip_answers(questions), "domain": domain}
    except ValueError as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.post("/check")
async def check_answer(body: CheckBody, _user=Depends(require_user)):
    if not body.questionId or not body.selectedAnswer:
        raise HTTPException(status_code=400, detail="Missing required fields")

    cached = get_cached_question(body.questionId)
    if not cached:
        cached = await get_question_from_store(body.questionId)

    if not cached:
        raise HTTPException(status_code=404, detail="Question expired. Please reload the practice set.")

    correct = str(cached["correctAnswer"]).upper()
    selected = body.selectedAnswer.upper()
    return {
        "isCorrect": selected == correct,
        "correctAnswer": correct,
        "explanation": cached.get("explanation"),
    }
