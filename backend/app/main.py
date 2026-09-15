from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException
from starlette.middleware.sessions import SessionMiddleware

from app.config import get_settings
from app.database import close_pool, init_pool, run_migrations
from app.routers import auth, questions, stats, sync, vocab


@asynccontextmanager
async def lifespan(_app: FastAPI):
    await init_pool()
    await run_migrations()
    settings = get_settings()
    if not settings.google_client_id or not settings.google_client_secret:
        print("Google OAuth not configured — set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET")
    yield
    await close_pool()


settings = get_settings()
app = FastAPI(title="SAT Practice API", lifespan=lifespan)

# Last added = outermost. Session must wrap the app; CORS should be outermost.
app.add_middleware(
    SessionMiddleware,
    secret_key=settings.session_secret,
    session_cookie="session",
    same_site="lax",
    https_only=False,
    max_age=30 * 24 * 60 * 60,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_url],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def _error_payload(detail) -> dict:
    if isinstance(detail, list):
        first = detail[0] if detail else {"msg": "Validation error"}
        message = first.get("msg") if isinstance(first, dict) else str(first)
        return {"error": message}
    return {"error": str(detail)}


@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(_request: Request, exc: StarletteHTTPException):
    return JSONResponse(status_code=exc.status_code, content=_error_payload(exc.detail))


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(_request: Request, exc: RequestValidationError):
    return JSONResponse(status_code=400, content=_error_payload(exc.errors()))


@app.exception_handler(Exception)
async def unhandled_exception_handler(_request: Request, exc: Exception):
    print(exc)
    return JSONResponse(status_code=500, content={"error": str(exc) or "Internal server error"})


@app.get("/api/health")
async def health():
    return {"ok": True}


app.include_router(auth.router)
app.include_router(questions.router)
app.include_router(stats.router)
app.include_router(vocab.router)
app.include_router(sync.router)
