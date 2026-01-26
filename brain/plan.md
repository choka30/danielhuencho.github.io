# Session Plan

> Created: 2026-01-26 15:00
> Request: "Improve the visual of the project listing (white box around search/filter), fix Iris EDA plots not printing and black text invisible on dark theme. Make visuals elegant."
> Branch: pw_add_projectQMD
> Session ID: 20260126_FIX_PROJECT_VISUALS

## Context Summary

**Problems identified:**

1. **White box on search/filter inputs** — The Quarto listing's search bar and sort dropdown render with a white background because the dark theme overrides in `custom.scss` don't fully cover all Quarto listing UI elements (e.g., `.form-control`, `.form-select`, category list container, and possibly the listing container itself have default white/light Bootstrap backgrounds).

2. **Iris EDA plots not printing** — The page has `matplotlib.use('Agg')` in setup and `plt.show()` after each plot, but the plots may not render because:
   - The title block is hidden globally by `.quarto-title` `display: none !important` — this also hides necessary page elements on subpages
   - The `#| output: false` on the setup cell is fine, but downstream cells need proper figure output
   - The `code-fold: true` in YAML front matter should work, but we need to verify cells produce output

3. **Black/invisible text** — Some text on the Iris EDA page renders as black (default) because:
   - Table styling uses inline `.style.set_properties()` but Quarto may override with its own table styles
   - The global `.quarto-title` hide rule may be too aggressive, breaking project subpage layouts
   - Quarto-generated tables (`<table>`) and inline code blocks may not inherit dark theme colors

**Root causes:**
- The `.quarto-title` hide rule (`display: none !important`) is global — it hides titles on ALL pages including project pages. This breaks the layout for project detail pages.
- The Quarto listing search/filter uses Bootstrap form controls that need explicit dark overrides.
- Table elements in Quarto output inherit default Bootstrap (light) styling.
- Category sidebar container has white/light background by default.

**Design approach:**
- Scope the title-block hiding to only the homepage and about page (where hero sections exist)
- Add comprehensive dark theme overrides for all Quarto listing UI elements
- Add dark theme overrides for Quarto-rendered tables
- Ensure Iris EDA renders properly with plots visible and all text readable
- Keep all styling in `custom.scss` (single source of truth)

---

## Tasks

### Task 1: Fix Global Title Block Hiding (Scope to Home/About Only)
- **ID:** TASK-001
- **Status:** Complete ✓
- **Completed:** 2026-01-26 15:10
- **Description:** The `.quarto-title` `display: none !important` rule hides title blocks on ALL pages, including project pages where they should be visible. Scope it to only homepage and about page.
- **Atomic Units:**
  - Modify `custom.scss`: Change the `.quarto-title` hide rule to target only pages with `.hero-wrapper` or `.hero-section` parents, OR use Quarto's page-specific CSS class
  - Add dark-themed title block styles for project pages (so titles show with proper dark colors)
- **Acceptance Criteria:**
  - [ ] Homepage and About page: title block still hidden (hero sections handle titles)
  - [ ] Project pages: title block visible with dark-themed styling
  - [ ] No white backgrounds leak through on any page

---

### Task 2: Fix Listing Search/Filter White Box & Category Sidebar
- **ID:** TASK-002
- **Status:** Complete ✓
- **Completed:** 2026-01-26 15:15
- **Description:** The search bar, sort dropdown, and category sidebar on the projects listing page have white/light backgrounds that clash with the dark theme. Add comprehensive dark theme overrides.
- **Atomic Units:**
  - Override all Bootstrap form elements within `.quarto-listing` (input, select, label, button)
  - Override category sidebar container background and text colors
  - Style the listing pagination controls if present
  - Ensure focus/hover states use accent colors
- **Acceptance Criteria:**
  - [ ] Search input has dark background, light text, no white border flash
  - [ ] Sort dropdown has dark background, light text
  - [ ] Category sidebar has dark background, light text
  - [ ] All form elements use consistent dark theme colors
  - [ ] Focus states use blue accent glow

---

### Task 3: Fix Iris EDA — Plot Output & Dark Text Visibility
- **ID:** TASK-003
- **Status:** Complete ✓
- **Completed:** 2026-01-26 15:15
- **Description:** Fix the Iris EDA page so plots render properly and all text (tables, inline code, headings) is visible on the dark background.
- **Atomic Units:**
  - Review and fix the `iris-eda/index.qmd` Python cell options to ensure plots output correctly
  - Add dark theme overrides for Quarto-generated tables (`.table`, `table`, `th`, `td`)
  - Add dark theme overrides for Quarto inline code output and cell output
  - Add dark theme for pandas Styler HTML output
  - Ensure summary table at bottom is readable
- **Acceptance Criteria:**
  - [ ] All 5 plots render and display (violin, pairplot, heatmap, confusion matrix, feature importance)
  - [ ] Tables have dark background with light text
  - [ ] Inline Python output (`{python}`) is visible
  - [ ] Summary table at bottom is readable
  - [ ] All text on the page is visible (no black-on-dark)

---

### Task 4: Visual Polish & Validation
- **ID:** TASK-004
- **Status:** Complete ✓
- **Completed:** 2026-01-26 15:20
- **Description:** Run `quarto render` to validate all fixes. Fine-tune any remaining visual issues.
- **Atomic Units:**
  - Run `quarto render` for the full site
  - Verify projects listing page visuals (search, filter, cards)
  - Verify Iris EDA page (plots, tables, text)
  - Verify Revealjs demo page still works
  - Fix any remaining visual inconsistencies
- **Acceptance Criteria:**
  - [ ] `quarto render` succeeds with no errors
  - [ ] No white/light backgrounds visible on any dark-themed page
  - [ ] All plots render on Iris EDA
  - [ ] All text is readable (no black-on-dark)
  - [ ] Search and filter UI is elegant and consistent with theme
  - [ ] Cards, badges, and layout look polished

---

## Session Constraints
- **Max tasks:** 4
- **Dependencies:**
  - Task 1 (title fix) must be done first — it unblocks project page rendering
  - Task 2 (listing fix) and Task 3 (Iris fix) can run in parallel after Task 1
  - Task 4 (validation) after Tasks 2 & 3
- **Files to Modify:**
  - `custom.scss` (Tasks 1, 2, 3) — main styling fixes
  - `projects/iris-eda/index.qmd` (Task 3) — if cell options need adjustment
- **Files NOT to Modify:**
  - `_quarto.yml` (no config changes needed)
  - `projects/index.qmd` (listing config is fine, styling goes in SCSS)
