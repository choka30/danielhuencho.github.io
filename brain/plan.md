# Session Plan

> Created: 2026-01-26 16:30
> Request: "Fix ugly listing filter/sort controls — align them together, improve size, remove white box"
> Branch: pw_add_projectQMD
> Session ID: 20260126_FIX_LISTING_CONTROLS

## Problem Analysis

**Screenshot issues identified:**

1. **Sort dropdown ("Date - Oldest") and Filter input are far apart** — sort is on the far left, filter is on the far right. They should be grouped together.
2. **White boxes visible** — the `.input-group-text` icon containers (sort icon + search icon) render with a white/light background, breaking the dark theme.
3. **Inconsistent sizing** — the controls look small and disconnected from the page design.
4. **Poor alignment** — the controls float at opposite ends of the row instead of forming a cohesive toolbar.

**Root cause:** The existing `.quarto-listing .listing-actions` CSS targets `.form-control` and `.form-select` but misses:
- `.input-group-text` (the icon containers — causing white boxes)
- `.listing-actions-group` (the flex wrapper — needs layout adjustments)
- `.quarto-listing-sort` / `.quarto-listing-filter` (need width/alignment control)

## Solution

Add targeted CSS rules in `custom.scss` to:

1. Style `.listing-actions-group` as a flexbox row with `gap`, `align-items: center`, and controlled widths
2. Style `.input-group-text` with dark background + matching border (fixes white boxes)
3. Set consistent sizing for both sort and filter controls
4. Bring both controls visually together (compact, aligned toolbar)

---

## Tasks

### Task 1: Fix listing controls styling in custom.scss
- **ID:** TASK-001
- **Status:** Complete ✓
- **Completed:** 2026-01-26 16:45
- **Atomic Units:**
  - [x] Add `.listing-actions-group` flexbox layout (row, centered, gap)
  - [x] Style `.input-group-text` dark (background, border, icon color) — fixes white boxes
  - [x] Set consistent width/sizing for `.quarto-listing-sort` and `.quarto-listing-filter`
  - [x] Fine-tune padding, border-radius, and font-size for a polished look
- **Acceptance Criteria:**
  - [x] Sort and filter controls appear side-by-side (not at opposite ends)
  - [x] No white/light boxes around icons
  - [x] Controls have consistent, professional sizing
  - [x] Dark theme is maintained (matches ocean blue palette)
- **Note:** Initial attempt nested styles under `.listing-actions` which doesn't exist in Quarto's HTML. Fixed by moving selectors directly under `.quarto-listing`.

### Task 2: Validate — Preview and verify controls
- **ID:** TASK-002
- **Status:** Complete ✓
- **Completed:** 2026-01-26 16:50
- **Depends on:** TASK-001
- **Atomic Units:**
  - [x] Run `quarto preview` and visually inspect projects page
  - [x] Confirm no white backgrounds on controls
  - [x] Confirm controls are aligned together
- **Acceptance Criteria:**
  - [x] Controls render correctly in browser
  - [x] No visual regressions elsewhere on the page

---

## Session Constraints
- **Max tasks:** 2
- **Dependencies:** Task 2 depends on Task 1
- **Files to Modify:**
  - `custom.scss` (Task 1) — add/update listing control styles
- **Files NOT to Modify:**
  - `projects/index.qmd` — no content changes needed
  - `_quarto.yml` — no config changes needed
