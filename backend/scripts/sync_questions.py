from __future__ import annotations

import asyncio
import sys
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parent.parent
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

from app.database import close_pool, init_pool, run_migrations
from app.services.question_sync import get_sync_status, sync_all_questions


async def main() -> None:
    await init_pool()
    await run_migrations()

    print("Syncing questions from College Board SAT Suite Question Bank...")
    print("This may take several minutes on the first run.\n")

    def on_progress(progress):
        if progress.get("phase") == "metadata":
            print(f"Listing metadata: {progress.get('domain')}")
        elif progress.get("phase") == "details":
            print(f"Fetching details: {progress.get('done', 0)}/{progress.get('total', '?')}")

    report = await sync_all_questions(on_progress=on_progress)
    status = await get_sync_status()

    print("\nSync complete.")
    print(f"Metadata listed: {report['metadataListed']}")
    print(f"Details synced: {report['detailsSynced']}")
    print(f"Skipped: {report['skipped']}")
    print(f"In database: {status['synced_count']} MCQ questions")
    if report["errors"]:
        print(f"Errors ({len(report['errors'])}):")
        for error in report["errors"][:10]:
            print(f"  - {error}")

    await close_pool()


if __name__ == "__main__":
    asyncio.run(main())
