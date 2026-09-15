from __future__ import annotations

from app.constants import (
    ADAPTIVE_THRESHOLD,
    MODULE_TIMING,
    SAT_DOMAIN_CODES,
    SECTION_COUNTS,
)
from app.database import get_pool
from app.services.question_format import row_to_question

DIFFICULTY_ORDER = ["Easy", "Medium", "Hard"]

MODULE_PROFILES = {
    "routing": {"Easy": 0.3, "Medium": 0.52, "Hard": 0.18},
    "standard": {"Easy": 0.48, "Medium": 0.42, "Hard": 0.1},
    "advanced": {"Easy": 0.1, "Medium": 0.42, "Hard": 0.48},
}


def distribute_counts(total: int, buckets: int) -> list[int]:
    base = total // buckets
    remainder = total % buckets
    return [base + (1 if index < remainder else 0) for index in range(buckets)]


def difficulty_targets(total: int, profile: dict[str, float]) -> dict[str, int]:
    raw = [
        {"label": label, "count": round(total * profile[label])}
        for label in DIFFICULTY_ORDER
    ]
    diff = total - sum(item["count"] for item in raw)
    index = 1
    while diff != 0:
        target = raw[index % len(raw)]
        target["count"] += 1 if diff > 0 else -1
        diff += -1 if diff > 0 else 1
        index += 1
    return {item["label"]: item["count"] for item in raw}


def interleave_by_domain(domain_buckets: dict[str, list]) -> list:
    queues = [list(items) for items in domain_buckets.values()]
    merged = []
    while any(queues):
        for queue in queues:
            if queue:
                merged.append(queue.pop(0))
    return merged


def order_module_questions(questions: list[dict]) -> list[dict]:
    by_domain: dict[str, list] = {}
    for question in questions:
        by_domain.setdefault(question["domain"], []).append(question)

    for domain in by_domain:
        by_domain[domain].sort(
            key=lambda q: DIFFICULTY_ORDER.index(q["difficulty"])
            if q["difficulty"] in DIFFICULTY_ORDER
            else 99
        )

    return interleave_by_domain(by_domain)


async def query_pool(
    section: str,
    domain_label: str,
    difficulty_label: str,
    limit: int,
    exclude_ids: list[str],
) -> list[dict]:
    params: list = [section, domain_label, difficulty_label]
    sql = """
        SELECT question_id, section, domain_label, difficulty_label, question_data
        FROM sat_questions
        WHERE question_type = 'mcq'
          AND section = $1
          AND domain_label = $2
          AND difficulty_label = $3
    """
    if exclude_ids:
        params.append(exclude_ids)
        sql += f" AND question_id <> ALL(${len(params)})"

    sql += " ORDER BY RANDOM()"
    params.append(limit)
    sql += f" LIMIT ${len(params)}"

    pool = get_pool()
    async with pool.acquire() as conn:
        rows = await conn.fetch(sql, *params)
    return [row_to_question(row) for row in rows]


async def fill_module(
    section: str,
    question_count: int,
    profile: dict[str, float],
    exclude_ids: list[str] | None = None,
) -> list[dict]:
    exclude_ids = list(exclude_ids or [])
    domains = [entry["label"] for entry in SAT_DOMAIN_CODES[section]]
    domain_counts = distribute_counts(question_count, len(domains))
    used = set(exclude_ids)
    selected: list[dict] = []

    for domain_index, domain in enumerate(domains):
        domain_quota = domain_counts[domain_index]
        domain_difficulty = difficulty_targets(domain_quota, profile)

        for difficulty in DIFFICULTY_ORDER:
            needed = domain_difficulty[difficulty]
            if needed <= 0:
                continue
            batch = await query_pool(section, domain, difficulty, needed, list(used))
            for question in batch:
                selected.append(question)
                used.add(question["id"])

    if len(selected) < question_count:
        pool = get_pool()
        async with pool.acquire() as conn:
            rows = await conn.fetch(
                """
                SELECT question_id, section, domain_label, difficulty_label, question_data
                FROM sat_questions
                WHERE question_type = 'mcq'
                  AND section = $1
                  AND question_id <> ALL($2)
                ORDER BY RANDOM()
                LIMIT $3
                """,
                section,
                list(used) or [""],
                question_count - len(selected),
            )
        for row in rows:
            question = row_to_question(row)
            selected.append(question)
            used.add(question["id"])

    if len(selected) < question_count:
        raise ValueError(
            f"Not enough {section} questions to build a {question_count}-question module. "
            "Run `python -m scripts.sync_questions` to load more from the College Board question bank."
        )

    return order_module_questions(selected[:question_count])


def build_adaptive_module(section: str, module_number: int, path: str, questions: list[dict]) -> dict:
    timing = MODULE_TIMING[section]
    section_label = "Reading & Writing" if section == "english" else "Math"
    suffix = " (Advanced)" if path == "advanced" else (" (Standard)" if path == "standard" else "")
    return {
        "id": f"{section}-{module_number}-{path}",
        "type": "module",
        "section": section,
        "moduleNumber": module_number,
        "path": path,
        "adaptiveFor": f"{section}-{module_number}",
        "label": f"{section_label} — Module {module_number}{suffix}",
        "timeLimitSeconds": timing["module_seconds"],
        "questionCount": timing["questions_per_module"],
        "questions": questions,
    }


def build_routing_module(section: str, module_number: int, questions: list[dict]) -> dict:
    timing = MODULE_TIMING[section]
    section_label = "Reading & Writing" if section == "english" else "Math"
    return {
        "id": f"{section}-{module_number}",
        "type": "module",
        "section": section,
        "moduleNumber": module_number,
        "path": "routing",
        "label": f"{section_label} — Module {module_number}",
        "timeLimitSeconds": timing["module_seconds"],
        "questionCount": timing["questions_per_module"],
        "questions": questions,
    }


def build_break_module() -> dict:
    return {
        "id": "break",
        "type": "break",
        "label": "Break",
        "timeLimitSeconds": MODULE_TIMING["break_seconds"],
        "description": "Take a break before the Math section, just like on test day.",
    }


async def build_section_test(section: str) -> dict:
    timing = MODULE_TIMING[section]
    used_ids: list[str] = []

    module1 = await fill_module(section, timing["questions_per_module"], MODULE_PROFILES["routing"], used_ids)
    used_ids.extend(q["id"] for q in module1)

    module2_standard = await fill_module(
        section, timing["questions_per_module"], MODULE_PROFILES["standard"], used_ids
    )
    used_ids.extend(q["id"] for q in module2_standard)

    module2_advanced = await fill_module(
        section, timing["questions_per_module"], MODULE_PROFILES["advanced"], used_ids
    )

    modules = [
        build_routing_module(section, 1, module1),
        build_adaptive_module(section, 2, "standard", module2_standard),
        build_adaptive_module(section, 2, "advanced", module2_advanced),
    ]

    return {
        "testType": section,
        "section": section,
        "totalQuestions": timing["questions_per_module"] * 2,
        "totalTimeSeconds": timing["module_seconds"] * 2,
        "adaptiveThreshold": ADAPTIVE_THRESHOLD,
        "modules": modules,
        "adaptiveRouting": {
            f"{section}-2": {
                "afterModule": f"{section}-1",
                "threshold": ADAPTIVE_THRESHOLD,
                "standardModuleId": f"{section}-2-standard",
                "advancedModuleId": f"{section}-2-advanced",
            }
        },
    }


async def build_full_test() -> dict:
    english = await build_section_test("english")
    used_ids = [
        q["id"]
        for module in english["modules"]
        for q in (module.get("questions") or [])
    ]

    math1 = await fill_module(
        "math",
        MODULE_TIMING["math"]["questions_per_module"],
        MODULE_PROFILES["routing"],
        used_ids,
    )
    used_ids.extend(q["id"] for q in math1)

    math2_standard = await fill_module(
        "math",
        MODULE_TIMING["math"]["questions_per_module"],
        MODULE_PROFILES["standard"],
        used_ids,
    )
    used_ids.extend(q["id"] for q in math2_standard)

    math2_advanced = await fill_module(
        "math",
        MODULE_TIMING["math"]["questions_per_module"],
        MODULE_PROFILES["advanced"],
        used_ids,
    )

    modules = [
        *english["modules"],
        build_break_module(),
        build_routing_module("math", 1, math1),
        build_adaptive_module("math", 2, "standard", math2_standard),
        build_adaptive_module("math", 2, "advanced", math2_advanced),
    ]

    return {
        "testType": "full",
        "totalQuestions": SECTION_COUNTS["full"],
        "totalTimeSeconds": (
            MODULE_TIMING["english"]["module_seconds"] * 2
            + MODULE_TIMING["break_seconds"]
            + MODULE_TIMING["math"]["module_seconds"] * 2
        ),
        "adaptiveThreshold": ADAPTIVE_THRESHOLD,
        "modules": modules,
        "adaptiveRouting": {
            **english["adaptiveRouting"],
            "math-2": {
                "afterModule": "math-1",
                "threshold": ADAPTIVE_THRESHOLD,
                "standardModuleId": "math-2-standard",
                "advancedModuleId": "math-2-advanced",
            },
        },
    }


def collect_questions_from_test(test: dict) -> list[dict]:
    questions = []
    for module in test["modules"]:
        questions.extend(module.get("questions") or [])
    return questions
