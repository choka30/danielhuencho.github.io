---
name: session-end
description: Finalize a work session. Runs final verification, updates history log, and prepares branch for merge. Use when all planned tasks are complete.
disable-model-invocation: true
---

# Session End

Finalize work session and prepare for merge.

## Pre-End Checklist

Before ending session:
- [ ] All planned tasks complete
- [ ] All tests passing
- [ ] All changes committed
- [ ] Brain files synced

## Execution Protocol

### Step 1: Verify Task Completion

Read `brain/plan.md` and check:
```
All tasks marked complete?
├── YES → Continue
└── NO  → 
    ⚠️ INCOMPLETE TASKS
    
    Remaining:
    - Task N: [description]
    
    Options:
    [A] Complete remaining tasks first
    [B] Move incomplete to backlog and end session
    [C] Abort session-end
```

### Step 2: Run Final Test Suite

```bash
poetry run pytest tests/ -v --cov=src --cov-report=term-missing
```

All tests must pass to proceed.

### Step 3: Final Brain Sync

Run `/update-brain` to ensure all files current.

### Step 4: Verify All Committed

```bash
if [ -n "$(git status --porcelain)" ]; then
    echo "Uncommitted changes detected"
    git status --short
    # Prompt to commit or stash
fi
```

### Step 5: Update History Log

Append session summary to `brain/history_log.md`:

```markdown
---

## Session: [timestamp]

### Summary
- **Date:** [date]
- **Duration:** [estimated hours]
- **Branch:** [branch name]

### Tasks Completed

| Task | Description | Commits |
|------|-------------|---------|
| 1 | [Task 1 title] | abc1234 |
| 2 | [Task 2 title] | def5678 |

### Key Decisions
1. [Decision made and rationale]
2. [Another decision if any]

### Files Changed
```
Modified: [count] files
Created:  [count] files
Deleted:  [count] files
```

### Notes
[Any observations, blockers encountered, or follow-up items]
```

### Step 6: Archive Completed Plan

In `brain/plan.md`, move completed tasks to archive or clear for next session:

```markdown
## Completed Sessions

<details>
<summary>Session [date] - [branch]</summary>

- [x] Task 1: [description]
- [x] Task 2: [description]

</details>
```

### Step 7: Check Archive Threshold

If history_log.md has 10+ sessions since last archive:
```
Consider archiving old sessions to keep history_log.md manageable.
See history_log.md "Archived Sessions" section.
```

## Output Format

```
═══════════════════════════════════════════════════════
  ✓ SESSION COMPLETE
═══════════════════════════════════════════════════════

Session Summary
───────────────────────────────────────────────────────
Branch:     feature/auth
Duration:   ~1.5 hours
Tasks:      5/5 complete

Commits:
  abc1234 feat(auth): add user model
  def5678 feat(auth): add JWT validation
  ghi9012 test(auth): add comprehensive tests
  jkl3456 docs(brain): update indexes

Test Coverage: 87%

───────────────────────────────────────────────────────

Brain Status:
  ✓ plan.md - tasks archived
  ✓ history_log.md - session logged
  ✓ codebase_index.md - synced
  ✓ general_index.md - synced

───────────────────────────────────────────────────────

Next Steps:
  1. /push - Push to remote
  2. Create PR for review
  3. /orchestrator-merge - If using worktrees

Ready for merge.
```

## Incomplete Session Handling

If ending session with incomplete tasks:

```markdown
### Incomplete Tasks (Moved to Backlog)

| Task | Status | Reason |
|------|--------|--------|
| Task 4 | Blocked | Waiting for API spec |
| Task 5 | Deferred | Out of scope |
```

These get logged in history and moved to backlog in plan.md.

## Session Metrics

Track for continuous improvement:
- Tasks planned vs completed
- Estimated vs actual time
- Test coverage change
- Blockers encountered

## Notes

- Session-end doesn't push automatically
- History is append-only (never delete entries)
- Backup is NOT created at session-end (created at session-start)
- Ready for `/orchestrator-merge` after session-end
