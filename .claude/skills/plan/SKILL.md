---
name: plan
description: Decompose a user's feature request into atomic tasks for a work session. Creates structured plan in brain/plan.md. Use when starting new work or when a task is too large.
disable-model-invocation: true
---

# Plan

Decompose a feature request into atomic, executable tasks.

## Execution Protocol

### Step 1: Gather Context (Use Extended Thinking)

Read all brain files to understand current state:
1. `brain/plan.md` — Check for existing work
2. `brain/general_index.md` — Understand project structure
3. `brain/codebase_index.md` — Know existing code
4. `brain/development_standard.md` — Constraints to follow

### Step 2: Decomposition Process

```
User Request
     ↓
Feature (what user wants)
     ↓
Components (logical parts)
     ↓
Tasks (technical units, 2-6 per session)
     ↓
Atomic Units (single function/class/method + test)
```

### Step 3: Validate Decomposition

Each task MUST satisfy:
- [ ] Maps to ≤3 atomic units
- [ ] Has corresponding test unit
- [ ] Can be completed in 15-30 minutes
- [ ] Has clear acceptance criteria
- [ ] Dependencies are explicit

### Step 4: Write plan.md

Create/update `brain/plan.md` with this structure:

```markdown
# Session Plan

> Created: [timestamp]
> Request: "[user's original request]"
> Branch: [current branch]

## Tasks

### Task 1: [Title]
- **Status:** Pending
- **Atomic Units:**
  - [ ] `function_name()` in `src/module/file.py`
  - [ ] `test_function_name()` in `tests/test_file.py`
- **Acceptance Criteria:**
  - [ ] Criterion 1
  - [ ] Criterion 2

### Task 2: [Title]
...

## Session Constraints
- Max tasks: 6
- Estimated time: [X hours]
- Dependencies: [list any blockers]
```

### Step 5: Present for Approval

Output the plan and ask:

```
═══════════════════════════════════════════════════════
  PLAN READY FOR REVIEW
═══════════════════════════════════════════════════════

[Summary of tasks]

Total: [N] tasks, [M] atomic units
Estimated: [X] hours

Approve this plan? (yes/modify/abort)
```

## Atomic Unit Reference

| Unit Type | Scope | Max Lines | Example |
|-----------|-------|-----------|---------|
| Function | Single responsibility | ~30 | `def parse_config(path: str) -> dict` |
| Class | Single entity | ~100 | `class ConfigParser` |
| Method | Single operation | ~20 | `def validate(self) -> bool` |
| Test | Single behavior | ~25 | `test_parse_config_handles_missing_file` |

## Rules

- **Golden Rule:** If you can't describe a unit in one sentence, it's too big
- **Session Limit:** 2-6 tasks maximum per session
- **No Orphan Code:** Every implementation unit needs a test unit
- If request is too large for one session → split into multiple plans
- Human must approve before any `/task` execution
