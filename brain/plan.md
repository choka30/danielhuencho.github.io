# Session Plan

> Created: 2026-01-27 00:15
> Request: "Fix presentation.qmd layout overflow — content is getting pushed out of the 1280×720 slide viewport. Do NOT change content or theme design, only fix sizing/spacing to fit. Also fix the link in slide 5 (remove #model-evaluation-and-discussion anchor). Iterate with multiple agents to find the best visual solution."
> Branch: pw_presentation

## Root Cause Analysis

The slides render at 1280×720 with `margin: 0.08` → usable area is approximately **1178×662px**. Content overflows because:

1. **Root font size too large:** `$presentation-font-size-root: 38px` — at 0.85em body text this gives ~32px text, which is too big for content-dense slides
2. **Excessive padding:** `section { padding: 40px 60px }` → 80px vertical + 120px horizontal lost
3. **Cumulative component spacing:** Each `.highlight-box`, `.fade-card`, `.stat-card` has padding + margin that accumulates across multiple instances per slide
4. **h2 heading overhead:** border-bottom + 0.8em margin-bottom takes ~50px
5. **Timeline vertical footprint:** `.path-timeline` with margins takes ~120px before the two-column content starts on slide 2
6. **Slide 3 is worst offender:** 3 highlight-boxes + quote + paragraph = ~5 content blocks stacking vertically
7. **Slide 4 right column:** 3 fade-cards stacking = needs tight spacing
8. **Slide 5:** Columns + 4 stat cards + kernel animation + contact = very dense

## Strategy: SCSS-Only Sizing Fix + One QMD Link Fix

**Approach:** Reduce root font, tighten padding/margins in SCSS, and reduce the YAML margin. Do NOT restructure slides or change content — the design and text are confirmed perfect by the user. Only touch dimensional values.

**Iteration approach:** Use multiple agents to test different sizing parameters and compare results.

---

## Tasks

### Task 1: Fix slide 5 link (remove anchor fragment)
- **Status:** Complete
- **Atomic Units:**
  - [ ] In `presentation.qmd` line 241: change `https://danielhuencho.com/projects/unicon-eda/#model-evaluation-and-discussion` → `https://danielhuencho.com/projects/unicon-eda/`
- **Acceptance Criteria:**
  - [ ] Link points to the root project page, not the anchor
  - [ ] No other content changes

---

### Task 2: Reduce SCSS dimensions to fit 1280×720 viewport
- **Status:** Complete
- **Depends on:** Task 1
- **Atomic Units:**
  - [ ] Reduce `$presentation-font-size-root` from 38px → 30px (all relative `em` sizes scale down proportionally)
  - [ ] Reduce section padding from `40px 60px` → `20px 40px`
  - [ ] Tighten `.highlight-box` padding/margin: `0.5em 1em`, margin `0.35em 0`
  - [ ] Tighten `.fade-card` padding: `0.6em 1em`, margin `0.25em 0`
  - [ ] Tighten `.stat-card` padding: `0.5em 0.7em`
  - [ ] Reduce `.stat-card .stat-value` from `1.6em` → `1.4em`
  - [ ] Reduce `h2` margin-bottom from `0.8em` → `0.5em`
  - [ ] Reduce `.path-timeline` margin from `1em 0` → `0.5em 0`
  - [ ] Tighten `.slide-quote` margin from `0.8em 0` → `0.4em 0`, padding `0.4em 0.8em`
  - [ ] Reduce `.icon-list li` margin-bottom from `0.5em` → `0.3em`
- **Acceptance Criteria:**
  - [ ] All 5 slides fit within the 1280×720 viewport without overflow
  - [ ] No content is cut off at the bottom or right edge
  - [ ] Text remains readable (not too small)
  - [ ] Cards, boxes, and components remain properly aligned and centered
  - [ ] Overall aesthetic stays clean and professional (ocean blue theme preserved)

---

### Task 3: Reduce QMD YAML margin + render and iterate
- **Status:** Complete
- **Depends on:** Task 2
- **Atomic Units:**
  - [ ] Reduce YAML `margin: 0.08` → `margin: 0.04` (4% instead of 8% — recovers ~50px each direction)
  - [ ] Run `quarto render projects/revealjs-demo/presentation.qmd`
  - [ ] Visually inspect all 5 slides for overflow, alignment, and readability
  - [ ] If any slide still overflows → iterate font sizes or spacing in SCSS until all fit
  - [ ] If alignment is off (elements shifted to one side, uneven columns) → adjust SCSS
- **Acceptance Criteria:**
  - [ ] `quarto render` succeeds without errors
  - [ ] All 5 slides visually fit — no scrollbars, no cut-off content
  - [ ] Columns are balanced (50/50 or 55/45 as designed)
  - [ ] Timeline centered on slide 2
  - [ ] Stat cards properly arranged on slide 5
  - [ ] Kernel animation area visible
  - [ ] Contact info visible at bottom of slide 5
  - [ ] Professional, clean appearance maintained

---

### Task 4: Update brain files
- **Status:** Complete
- **Depends on:** Task 3
- **Atomic Units:**
  - [ ] Run `/update-brain` to sync codebase_index and general_index
- **Acceptance Criteria:**
  - [ ] Brain files reflect the sizing fixes

---

## Session Constraints
- Max tasks: 4
- Dependencies: Task 1 → Task 2 → Task 3 → Task 4 (sequential — each builds on prior)
- **Content rule:** Do NOT change any text content, only dimensional/spacing values
- **Theme rule:** Keep all colors, gradients, fonts, animations — only change sizes
- **Files modified:** `presentation-theme.scss` (sizing), `presentation.qmd` (link + margin), brain files
- **Iteration:** If first pass doesn't solve overflow for all slides, iterate SCSS values in Task 3
