# Session Plan

> Created: 2026-01-25
> Request: "Update CLAUDE.md, brain/ files, and skills for a Quarto-based Data Science portfolio website"
> Branch: main (personal_webpage project)
> Session ID: 20260125_BRAIN_RESTRUCTURE

## Context Analysis

### Current Problem
The brain architecture was copied from an ML project (Deep Kernel Building Damage Assessment) and doesn't match this Quarto portfolio project. Key mismatches:

| Component | Current State | Required State |
|-----------|---------------|----------------|
| CLAUDE.md | References PyTorch, pytest, ML workflows | Quarto website workflows |
| brain/general_index.md | Documents src/, notebooks/ structure | Should document Quarto structure |
| brain/codebase_index.md | Documents ML functions/classes | Should document .qmd pages, components |
| brain/development_standard.md | Python/ML standards | Quarto/SCSS/content standards |
| Skills | TDD-focused (pytest) | Content-focused (quarto preview/render) |

### Design Principles for Portfolio Brain

1. **Content-Centric**: Track pages, sections, assets instead of functions/classes
2. **Worktree-Compatible**: plan.md remains session-specific, other files persist
3. **Quarto-Native**: Commands align with `quarto preview`, `quarto render`
4. **Portfolio-Focused**: Standards for academic content, not code testing

---

## Tasks

### Task 1: Rewrite CLAUDE.md for Quarto Portfolio
- **ID:** TASK-001
- **Status:** Pending
- **Atomic Units:**
  - [ ] Create new `CLAUDE.md` with Quarto-specific mission, tech stack, commands
- **Acceptance Criteria:**
  - [ ] Mission reflects portfolio website goal
  - [ ] Tech stack shows Quarto, SCSS, Python (for notebooks)
  - [ ] Quick Start uses `quarto preview`
  - [ ] Brain integration section preserved
  - [ ] Skills reference updated for content workflows

---

### Task 2: Rewrite brain/general_index.md
- **ID:** TASK-002
- **Status:** Pending
- **Atomic Units:**
  - [ ] Create new `general_index.md` documenting Quarto project structure
- **Acceptance Criteria:**
  - [ ] Directory tree matches actual + target structure
  - [ ] Folder types: `[CONTENT]`, `[ASSETS]`, `[CONFIG]`, `[META]`
  - [ ] Key paths reference Quarto-specific locations
  - [ ] Target architecture from project_context.md included

---

### Task 3: Rewrite brain/codebase_index.md → content_index.md
- **ID:** TASK-003
- **Status:** Pending
- **Atomic Units:**
  - [ ] Rename to `content_index.md` (better reflects Quarto portfolio)
  - [ ] Document pages, sections, components instead of functions/classes
- **Acceptance Criteria:**
  - [ ] Tracks each .qmd page with purpose and status
  - [ ] Tracks each notebook with intended showcase
  - [ ] Tracks assets (images, CV PDF)
  - [ ] Content roadmap replaces implementation roadmap

---

### Task 4: Rewrite brain/development_standard.md → content_standard.md
- **ID:** TASK-004
- **Status:** Pending
- **Atomic Units:**
  - [ ] Rename to `content_standard.md`
  - [ ] Replace Python/ML standards with Quarto/content standards
- **Acceptance Criteria:**
  - [ ] YAML front matter standards
  - [ ] SCSS/CSS styling guidelines
  - [ ] Image optimization standards
  - [ ] Notebook best practices for portfolio display
  - [ ] Commit message format preserved
  - [ ] Definition of Done adapted for content tasks

---

### Task 5: Update Key Skills for Quarto Workflow
- **ID:** TASK-005
- **Status:** Pending
- **Atomic Units:**
  - [ ] Update `/task` skill (remove pytest, add quarto preview checks)
  - [ ] Update `/status` skill (remove test health, add page status)
  - [ ] Update `/update-brain` skill (adapt for content tracking)
- **Acceptance Criteria:**
  - [ ] `/task` uses quarto-appropriate validation
  - [ ] `/status` shows page completion, asset status, build health
  - [ ] `/update-brain` syncs content_index.md correctly

---

### Task 6: Reset brain/history_log.md for Fresh Start
- **ID:** TASK-006
- **Status:** Pending
- **Atomic Units:**
  - [ ] Archive old ML project history
  - [ ] Reset statistics for portfolio project
- **Acceptance Criteria:**
  - [ ] Previous session archived in collapsible section
  - [ ] Statistics reset to 0
  - [ ] Ready for first portfolio session

---

## Session Constraints

- **Max tasks:** 6
- **Dependencies:**
  - Task 1 should be done first (CLAUDE.md sets the tone)
  - Tasks 2-4 can be parallelized
  - Task 5 depends on understanding new brain structure
  - Task 6 is independent

## Architecture Decision: File Naming

**Proposal:** Rename brain files for better semantic clarity:

| Current Name | Proposed Name | Rationale |
|--------------|---------------|-----------|
| `codebase_index.md` | `content_index.md` | Portfolio tracks content, not code |
| `development_standard.md` | `content_standard.md` | Standards are for content creation |
| `general_index.md` | (keep) | Still describes project structure |
| `plan.md` | (keep) | Session task planning |
| `history_log.md` | (keep) | Session history |

**Trade-off:** Renaming requires updating all skill references. Worth it for long-term clarity.

---

## Notes

- Skills that don't apply to Quarto (like `/test`) could be repurposed or kept as stubs
- The worktree workflow still makes sense for parallel content development
- `quarto preview` replaces `pytest` as the primary validation mechanism
- Consider adding `/preview` skill specifically for Quarto live preview

---

## References

- Project context: `project_context.md`
- Quarto docs: https://quarto.org/docs/websites/
- Target audience: UK tech recruiters, academic reviewers
