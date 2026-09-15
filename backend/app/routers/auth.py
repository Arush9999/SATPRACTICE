from __future__ import annotations

import re

from authlib.integrations.starlette_client import OAuth
from fastapi import APIRouter, Depends, HTTPException, Request, Response
from fastapi.responses import JSONResponse, RedirectResponse
from pydantic import BaseModel, Field

from app.config import get_settings
from app.database import get_pool
from app.deps import get_current_user, hash_password, public_user, verify_password

router = APIRouter(prefix="/api/auth", tags=["auth"])
settings = get_settings()
oauth = OAuth()

if settings.google_client_id and settings.google_client_secret:
    oauth.register(
        name="google",
        client_id=settings.google_client_id,
        client_secret=settings.google_client_secret,
        server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
        client_kwargs={"scope": "openid email profile"},
    )


class SignupBody(BaseModel):
    name: str
    email: str
    password: str = Field(min_length=1)


class LoginBody(BaseModel):
    email: str
    password: str


@router.post("/signup")
async def signup(body: SignupBody, request: Request):
    name = body.name.strip()
    email = body.email.strip().lower()
    password = body.password

    if not name or not email or not password:
        raise HTTPException(status_code=400, detail="Name, email, and password are required")
    if len(password) < 8:
        raise HTTPException(status_code=400, detail="Password must be at least 8 characters")
    if not re.match(r"^[^\s@]+@[^\s@]+\.[^\s@]+$", email):
        raise HTTPException(status_code=400, detail="Enter a valid email address")

    pool = get_pool()
    async with pool.acquire() as conn:
        existing = await conn.fetchval("SELECT id FROM users WHERE LOWER(email) = $1", email)
        if existing:
            raise HTTPException(status_code=409, detail="An account with this email already exists")

        password_hash = hash_password(password)
        row = await conn.fetchrow(
            """
            INSERT INTO users (email, password_hash, name)
            VALUES ($1, $2, $3)
            RETURNING id, email, name, avatar_url
            """,
            email,
            password_hash,
            name,
        )

    request.session["user_id"] = row["id"]
    return JSONResponse(status_code=201, content={"user": public_user(row)})


@router.post("/login")
async def login(body: LoginBody, request: Request):
    email = body.email.strip().lower()
    pool = get_pool()
    async with pool.acquire() as conn:
        user = await conn.fetchrow("SELECT * FROM users WHERE LOWER(email) = $1", email)

    if not user or not user["password_hash"] or not verify_password(body.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    request.session["user_id"] = user["id"]
    return {"user": public_user(user)}


@router.get("/google")
async def google_login(request: Request):
    if not settings.google_client_id or not settings.google_client_secret:
        raise HTTPException(
            status_code=503,
            detail="Google OAuth is not configured. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.",
        )
    redirect_uri = settings.google_callback_url
    return await oauth.google.authorize_redirect(request, redirect_uri)


@router.get("/google/callback")
async def google_callback(request: Request):
    if not settings.google_client_id or not settings.google_client_secret:
        return RedirectResponse(f"{settings.frontend_url}/login?error=auth_failed")

    try:
        token = await oauth.google.authorize_access_token(request)
        userinfo = token.get("userinfo") or await oauth.google.userinfo(token=token)
    except Exception:  # noqa: BLE001
        return RedirectResponse(f"{settings.frontend_url}/login?error=auth_failed")

    google_id = userinfo.get("sub")
    email = (userinfo.get("email") or "").lower() or None
    name = userinfo.get("name")
    avatar_url = userinfo.get("picture")

    pool = get_pool()
    async with pool.acquire() as conn:
        user = await conn.fetchrow("SELECT * FROM users WHERE google_id = $1", google_id)
        if not user and email:
            by_email = await conn.fetchrow("SELECT * FROM users WHERE LOWER(email) = $1", email)
            if by_email:
                user = await conn.fetchrow(
                    """
                    UPDATE users
                    SET google_id = $1, avatar_url = COALESCE(avatar_url, $2)
                    WHERE id = $3
                    RETURNING *
                    """,
                    google_id,
                    avatar_url,
                    by_email["id"],
                )
        if not user:
            user = await conn.fetchrow(
                """
                INSERT INTO users (google_id, email, name, avatar_url)
                VALUES ($1, $2, $3, $4)
                RETURNING *
                """,
                google_id,
                email,
                name,
                avatar_url,
            )

    request.session["user_id"] = user["id"]
    return RedirectResponse(f"{settings.frontend_url}/dashboard")


@router.get("/me")
async def me(user=Depends(get_current_user)):
    if not user:
        return JSONResponse(status_code=401, content={"user": None})
    return {"user": public_user(user)}


@router.post("/logout")
async def logout(request: Request, response: Response):
    request.session.clear()
    response.delete_cookie("session")
    return {"ok": True}
