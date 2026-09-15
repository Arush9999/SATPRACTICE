from __future__ import annotations

import asyncio
import sys
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parent.parent
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

from app.database import close_pool, init_pool, run_migrations


async def main() -> None:
    await init_pool()
    await run_migrations()
    print("Database migration complete")
    await close_pool()


if __name__ == "__main__":
    asyncio.run(main())
