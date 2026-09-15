from __future__ import annotations

from typing import Any

from fastapi import Depends, HTTPException, Request
from passlib.context import CryptContext

from app.database import get_pool

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(password: str, password_hash: str) -> bool:
    return pwd_context.verify(password, password_hash)


def public_user(row: Any) -> dict:
    return {
        "id": row["id"],
        "email": row["email"],
        "name": row["name"],
        "avatarUrl": row["avatar_url"],
    }


async def get_current_user(request: Request) -> dict | None:
    user_id = request.session.get("user_id")
    if not user_id:
        return None

    pool = get_pool()
    async with pool.acquire() as conn:
        row = await conn.fetchrow(
            "SELECT id, email, name, avatar_url FROM users WHERE id = $1",
            user_id,
        )
    if not row:
        request.session.clear()
        return None
    return dict(row)


async def require_user(user: dict | None = Depends(get_current_user)) -> dict:
    if not user:
        raise HTTPException(status_code=401, detail="Authentication required")
    return user
