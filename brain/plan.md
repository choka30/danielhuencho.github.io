# Session Plan

> Created: 2026-01-26 23:10
> Request: "Transform revealjs-demo into formal 5-slide application presentation for UCL RA Grand Challenges Living Lab. Fix false claims in index.qmd. Follow presentation.md strictly for content, be creative only with format/interactivity."
> Branch: pw_presentation

## Fact-Check Audit

**False claim found in `index.qmd:163`:**
- WRONG: "Built Big Data pipelines achieving 15% energy cost reduction through SCADA analytics"
- CV SAYS: "Architected an end-to-end big data pipeline for high-frequency SCADA energy data [...] to identify key drivers of efficiency using linear models and anomaly detection techniques"
- FIX: Remove fabricated "15% energy cost reduction" — replace with factual description from CV

**`about.qmd`:** Verified against CV — descriptions are accurate. No changes needed.

---

## Content Source: `assets/presentation.md` (followed strictly)

The presentation has 5 content pillars. Each maps to one slide:

| Slide | Pillar from presentation.md | Key Points (from the file, not invented) |
|-------|----------------------------|------------------------------------------|
| 1 | **Title/Intro** | Name, MSc AI @ UCL, role title — "my skills can help create a good solution for your problem" |
| 2 | **Technical Knowledge** | Industrial Eng + MSc Statistics background, MSc AI @ UCL, DKL + Bayesian modelling for dissertation, GP Summer School (gpss.cc), trade-offs in uncertainty quantification |
| 3 | **Passion for Applicable Knowledge** | Defined own dissertation (united Galasso with Guedj), Henry Moss presentation "Experimental Design in Age of Generative Models", Daniel Giles PhD student, Max Harris project (next token generation), philosophy: "enhancing models for capability not intelligence", compositional kernels as core interest |
| 4 | **Engineering + People** | Metro SCADA energy pipeline (AWS: S3, Glue, Athena, Lambda, EC2, CI/CD), agile/testing, sensor data robustness, anomaly detection, production-level architecture + Teamwork: Galasso & Nicole Paul, Daniel Giles, Chloe, SRA at Ramsay Hall (personal stake in UCL energy), interdisciplinary value |
| 5 | **UNICON Demo + CTA** | Showcase https://danielhuencho.com/projects/unicon-eda/#model-evaluation-and-discussion, link to the problem they want to solve, closing call to action |

---

## Tasks

### Task 1: Fix false claims in index.qmd
- **Status:** Complete
- **Atomic Units:**
  - [ ] Replace line 163 in `index.qmd`: remove "achieving 15% energy cost reduction" — use CV-accurate wording: "Built Big Data pipelines for high-frequency SCADA energy data, identifying key drivers of efficiency through anomaly detection"
- **Acceptance Criteria:**
  - [ ] No fabricated metrics remain in index.qmd
  - [ ] Wording matches CV factual description
  - [ ] Page still renders correctly

---

### Task 2: Create custom Revealjs SCSS theme
- **Status:** Complete
- **Atomic Units:**
  - [ ] Create `projects/revealjs-demo/presentation-theme.scss` with Revealjs `/*-- scss:defaults --*/` and `/*-- scss:rules --*/`
  - [ ] Ocean blue dark palette (matching site: #0d1b2a, #1b2838, #63b3ed, #2c5282)
  - [ ] Custom utility classes for slide layouts: `.highlight-box`, `.stat-row`, `.icon-item`, `.gradient-text`, `.fade-card`
  - [ ] CSS animations: subtle entrance effects, glow accents, smooth fragment transitions
- **Acceptance Criteria:**
  - [ ] Readable at presentation scale (40px+ root font)
  - [ ] Consistent with site ocean blue palette
  - [ ] Clean, minimal aesthetic — not cluttered

---

### Task 3: Build all 5 slides in presentation.qmd
- **Status:** Complete
- **Depends on:** Task 2
- **Atomic Units:**
  - [ ] Rewrite `projects/revealjs-demo/presentation.qmd` YAML (theme, transitions, footer, logo)
  - [ ] **Slide 1 — Title:** Gradient background, name, "MSc AI for Sustainable Development @ UCL", role reference. Minimal — just identity and purpose. Use `title-slide-attributes`.
  - [ ] **Slide 2 — Technical Knowledge:** Background path (Industrial Eng → MSc Stats → MSc AI @ UCL). DKL + Bayesian research for dissertation. GP Summer School reference. Columns layout, incremental fragments. Keep text sparse — key phrases only.
  - [ ] **Slide 3 — Passion & Research Vision:** Defined own dissertation (united Galasso + Guedj). Henry Moss presentation reference. Philosophy quote about capability vs intelligence. Compositional kernels as core interest. Fragment animations to build narrative.
  - [ ] **Slide 4 — Engineering + People:** Two-column split. Left: Metro SCADA pipeline, AWS stack, agile/testing, sensor robustness. Right: Interdisciplinary collaboration, SRA at Ramsay Hall, team examples. Keep to bullet points.
  - [ ] **Slide 5 — UNICON Demo + CTA:** Link/screenshot to live GP demo. Connect to the problem they want to solve. Closing statement. Interactive element (clickable link, embedded preview, or JS animation).
  - [ ] Speaker notes on all slides with talking points from presentation.md
- **Acceptance Criteria:**
  - [ ] All content comes directly from presentation.md — nothing invented
  - [ ] Slides are clean and sparse (no walls of text)
  - [ ] Fragments and transitions create engaging flow
  - [ ] At least one interactive JS element or advanced Revealjs feature (auto-animate, background-iframe, or custom animation)
  - [ ] Speaker notes provide full talking points for the presenter

---

### Task 4: Add interactive JS elements + polish
- **Status:** Complete
- **Depends on:** Task 3
- **Atomic Units:**
  - [ ] Add an animated/interactive element: kernel decomposition visualization, typing effect, or animated skill flow
  - [ ] Polish transitions between slides (auto-animate where elements carry across)
  - [ ] Ensure all fragments animate smoothly
  - [ ] Test all interactive elements work in browser
- **Acceptance Criteria:**
  - [ ] At least one JS-powered interactive element on slides
  - [ ] Smooth auto-animate transitions between related slides
  - [ ] No broken animations or layout issues
  - [ ] Professional, polished feel

---

### Task 5: Update index page + validate + brain sync
- **Status:** Complete
- **Depends on:** Task 4
- **Atomic Units:**
  - [ ] Update `projects/revealjs-demo/index.qmd` — new title ("Application: UCL Grand Challenges Living Lab"), description, categories
  - [ ] Run `quarto render projects/revealjs-demo/presentation.qmd` to validate
  - [ ] Run `quarto render` full site to confirm nothing is broken
  - [ ] Run `/update-brain` to sync brain files
- **Acceptance Criteria:**
  - [ ] All 5 slides render without errors
  - [ ] Full site renders cleanly (including fixed index.qmd)
  - [ ] index.qmd metadata reflects the application presentation
  - [ ] Brain files updated

---

## Session Constraints
- Max tasks: 5
- Dependencies: Task 1 (independent) | Task 2 → Task 3 → Task 4 → Task 5
- Content rule: ALL slide content from `assets/presentation.md` — do NOT invent claims or metrics
- Creativity rule: Format, layout, animations, interactivity ONLY — not content
- CV reference: `assets/CV DHM 20251222.pdf` — source of truth for factual claims
- Files modified: `index.qmd`, `projects/revealjs-demo/presentation.qmd`, `projects/revealjs-demo/index.qmd`
- Files created: `projects/revealjs-demo/presentation-theme.scss`
