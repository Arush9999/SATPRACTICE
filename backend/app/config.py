from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

BACKEND_ROOT = Path(__file__).resolve().parent.parent
REPO_ROOT = BACKEND_ROOT.parent


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=(
            str(BACKEND_ROOT / ".env"),
            str(REPO_ROOT / ".env"),
        ),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    database_url: str = "postgresql://satpractice:satpractice@localhost:5433/satpractice"
    port: int = 3001
    session_secret: str = "change-me-to-a-long-random-string"
    frontend_url: str = "http://localhost:5173"
    google_client_id: str = ""
    google_client_secret: str = ""
    google_callback_url: str = "http://localhost:3001/api/auth/google/callback"
    cb_question_bank_api: str = (
        "https://qbank-api.collegeboard.org/msreportingquestionbank-prod/questionbank/digital"
    )
    cb_disclosed_api: str = "https://saic.collegeboard.org/disclosed"
    cb_assessment_id: int = 99
    cb_sync_batch_size: int = 5
    cb_sync_delay_ms: int = 600
    cb_sync_retries: int = 4


@lru_cache
def get_settings() -> Settings:
    return Settings()
