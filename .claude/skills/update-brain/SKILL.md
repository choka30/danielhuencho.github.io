---
name: update-brain
description: Synchronize all brain/ files with current project state. Updates indexes, marks completed tasks, and logs changes. Run after every task completion.
---

# Update Brain

Synchronize brain/ knowledge base with current project state.

## Execution Protocol

### Step 1: Scan Project Changes

Identify what changed since last update:
- New files created
- Sections added to pages
- Assets added
- Configuration changes

### Step 2: Update general_index.md

If project structure changed (new folders/files):

```markdown
## Recent Changes

| Date | Change | Location |
|------|--------|----------|
| [today] | Added [description] | `path/to/file` |
```

### Step 3: Update codebase_index.md

For content changes, update the relevant page entry:

```markdown
### `about.qmd` — CV/Resume Page

**Current State:**
- ✓ YAML front matter + intro
- ✓ Education section
- ✓ Professional Experience section
- ○ Technical Skills section (pending)
- ○ Research Interests section (pending)

**Status:** `In progress`
```

Track section-level progress, not just page-level.

### Step 4: Update plan.md

Mark completed tasks:
```markdown
### Task 2: Add Education section
- **Status:** ~~Pending~~ Complete ✓
- **Completed:** [timestamp]
```

### Step 5: Verify Consistency

- [ ] All new files in general_index.md
- [ ] Section progress updated in codebase_index.md
- [ ] Completed tasks marked in plan.md

## Output Format

```
═══════════════════════════════════════════════════════
  🧠 BRAIN UPDATE COMPLETE
═══════════════════════════════════════════════════════

✓ general_index.md    [no changes]
✓ codebase_index.md   [about.qmd: +1 section]
✓ plan.md             [1 task marked complete]

Brain synchronized.
```

## When to Run

- After every `/task` completion
- After manual file changes
- Before `/commit`
- Before `/session-end`

## What NOT to Update

- `development_standard.md` — Only changes with human approval
- `history_log.md` — Updated at session-end only

## Section Status Tracking

In codebase_index.md, track sections within pages:

```markdown
**Current State:**
- ✓ Section name (complete)
- → Section name (in progress)
- ○ Section name (pending)
```

This gives visibility into partial page completion.
