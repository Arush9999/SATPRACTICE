from app.config import get_settings

settings = get_settings()

CB_ASSESSMENT_ID = settings.cb_assessment_id
CB_API_BASE = settings.cb_question_bank_api
CB_DISCLOSED_BASE = settings.cb_disclosed_api

SAT_DOMAIN_CODES = {
    "english": [
        {"code": "INI", "label": "Information and Ideas", "test": 1},
        {"code": "CAS", "label": "Craft and Structure", "test": 1},
        {"code": "EOI", "label": "Expression of Ideas", "test": 1},
        {"code": "SEC", "label": "Standard English Conventions", "test": 1},
    ],
    "math": [
        {"code": "H", "label": "Algebra", "test": 2},
        {"code": "P", "label": "Advanced Math", "test": 2},
        {"code": "Q", "label": "Problem-Solving and Data Analysis", "test": 2},
        {"code": "S", "label": "Geometry and Trigonometry", "test": 2},
    ],
}

SAT_DOMAINS = {
    "math": [d["label"] for d in SAT_DOMAIN_CODES["math"]],
    "english": [d["label"] for d in SAT_DOMAIN_CODES["english"]],
}

DOMAIN_LABEL_BY_CODE = {
    d["code"]: d["label"]
    for d in [*SAT_DOMAIN_CODES["english"], *SAT_DOMAIN_CODES["math"]]
}

DOMAIN_CODE_BY_LABEL = {
    d["label"]: d["code"]
    for d in [*SAT_DOMAIN_CODES["english"], *SAT_DOMAIN_CODES["math"]]
}

DIFFICULTY_LABELS = {
    "E": "Easy",
    "M": "Medium",
    "H": "Hard",
}

SECTION_COUNTS = {
    "english": 54,
    "math": 44,
    "full": 98,
    "targeted": 15,
}

MODULE_TIMING = {
    "english": {
        "questions_per_module": 27,
        "module_seconds": 32 * 60,
    },
    "math": {
        "questions_per_module": 22,
        "module_seconds": 35 * 60,
    },
    "break_seconds": 10 * 60,
}

ADAPTIVE_THRESHOLD = 0.55
STREAK_MIN_PER_SECTION = 5
SYNC_BATCH_SIZE = settings.cb_sync_batch_size
SYNC_DELAY_MS = settings.cb_sync_delay_ms
