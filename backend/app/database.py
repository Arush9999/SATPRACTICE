from pathlib import Path

import asyncpg

from app.config import BACKEND_ROOT, get_settings

_pool: asyncpg.Pool | None = None


def _to_asyncpg_dsn(url: str) -> str:
    if url.startswith("postgresql://"):
        return "postgres://" + url[len("postgresql://") :]
    return url


async def init_pool() -> asyncpg.Pool:
    global _pool
    if _pool is None:
        settings = get_settings()
        _pool = await asyncpg.create_pool(
            dsn=_to_asyncpg_dsn(settings.database_url),
            min_size=1,
            max_size=10,
        )
    return _pool


async def close_pool() -> None:
    global _pool
    if _pool is not None:
        await _pool.close()
        _pool = None


def get_pool() -> asyncpg.Pool:
    if _pool is None:
        raise RuntimeError("Database pool is not initialized")
    return _pool


async def run_migrations() -> None:
    pool = get_pool()
    schema_path = BACKEND_ROOT / "sql" / "schema.sql"
    migrate_auth_path = BACKEND_ROOT / "sql" / "migrate_auth.sql"

    schema = schema_path.read_text(encoding="utf-8")
    async with pool.acquire() as conn:
        await conn.execute(schema)
        if migrate_auth_path.exists():
            try:
                await conn.execute(migrate_auth_path.read_text(encoding="utf-8"))
            except Exception as exc:  # noqa: BLE001
                message = str(exc)
                if "already exists" not in message:
                    print(f"Auth migration note: {message}")
