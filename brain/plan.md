# Session Plan

> Created: 2026-01-27
> Request: "Fix index.qmd to match about.qmd (source of truth) — dates, skills, descriptions, job titles. Add links to Metro de Santiago and BCI titles in both pages."
> Branch: pw_cleanPages

## Discrepancies Found

### Dates
| Item | index.qmd (WRONG) | about.qmd (CORRECT) |
|------|-------------------|---------------------|
| UCL MSc | 2024 – Present | 2025 - Present |
| Metro de Santiago | 2023 – 2024 | 2023 - 2025 |

### Job Titles & Descriptions
| Item | index.qmd (WRONG) | about.qmd (CORRECT) |
|------|-------------------|---------------------|
| Banco de Chile title | "Senior Risk Analyst" | "Senior Risk Management Analyst" |
| Metro description | "improved energy efficiency through SCADA analytics" | No efficiency improvement claim — focuses on "spatial-temporal challenges" |
| Metro description | "building GenAI agents for operations" | "Implemented Generative AI agents to assist Operations Control Center and Maintenance tasks" |
| BCI description | "Implemented customer journey optimization using Databricks and Spark" | "Led data-driven profitability initiative using behavioral and financial clustering" + A/B testing |

### Skills (index.qmd has items NOT in about.qmd)
- `Graph Neural Networks` (advanced) — NOT in about.qmd
- `Bayesian Modeling` (advanced) — about.qmd has "Bayesian Statistics" under Statistical Methods
- `Computer Vision` (intermediate) — NOT in about.qmd
- `NLP` (intermediate) — NOT in about.qmd
- `PostgreSQL` (intermediate) — NOT in about.qmd
- `AWS` → should be `AWS (EC2, S3, Glue, Athena)` to match about.qmd

### Skills (about.qmd has items NOT in index.qmd)
- `MLlib` (intermediate) — NOT in index.qmd
- Entire **Statistical Methods** category missing from index.qmd

### Skills Categories
- index.qmd has **Domain Expertise** — about.qmd does not
- about.qmd has **Statistical Methods** — index.qmd does not

## Tasks

### Task 1: Fix timeline dates in index.qmd
- **Status:** Complete
- **Changes:**
  - UCL: "2024 – Present" → "2025 – Present"
  - Metro: "2023 – 2024" → "2023 – 2025"
- **Acceptance Criteria:**
  - [ ] Dates match about.qmd exactly

### Task 2: Fix About section & timeline descriptions in index.qmd
- **Status:** Complete
- **Changes:**
  - Fix Banco de Chile title: "Senior Risk Analyst" → "Senior Risk Management Analyst"
  - Rewrite About info-card to align with about.qmd summary (no fabricated claims)
  - Rewrite Metro timeline description to match about.qmd bullets
  - Rewrite BCI timeline description to match about.qmd bullets
  - Update hero summary to align with about.qmd tone
- **Acceptance Criteria:**
  - [ ] No claims in index.qmd that aren't supported by about.qmd
  - [ ] Job titles match exactly

### Task 3: Fix skills section in index.qmd to match about.qmd
- **Status:** Complete
- **Changes:**
  - Remove from ML/DL: `Graph Neural Networks`, `Bayesian Modeling`, `Computer Vision`, `NLP`
  - Add to ML/DL: `MLlib` (intermediate)
  - Keep `Generative AI` (intermediate) — already in both
  - Fix Data Engineering: `AWS` → `AWS (EC2, S3, Glue, Athena)`, remove `PostgreSQL`
  - Replace **Domain Expertise** category with **Statistical Methods** category matching about.qmd
- **Acceptance Criteria:**
  - [ ] Skills sections in both pages have identical items and proficiency levels

### Task 4: Add company links to Metro de Santiago and BCI in both pages
- **Status:** Complete
- **Changes:**
  - In index.qmd: Add link to "Metro de Santiago" → `https://www.metro.cl/gobierno-corporativo/inversionistas/#informacionrelevante`
  - In index.qmd: Add link to "BCI" → `https://www.bci.cl/investor-relations/informacion-financiera/memorias-anuales/memoria-anual-2024`
  - In about.qmd: Add link to "Metro de Santiago" (both entries) → same Metro URL
  - In about.qmd: Add link to "BCI" → same BCI URL
- **Acceptance Criteria:**
  - [ ] Links open in new tab (target="_blank" for raw HTML, or standard Quarto link syntax)
  - [ ] Links appear on company names in timeline subtitles

### Task 5: Validate with quarto preview and update brain
- **Status:** Complete
- **Acceptance Criteria:**
  - [ ] `quarto render` completes with no errors
  - [ ] Both pages render correctly
  - [ ] Links work
  - [ ] Brain files updated

---

## Completed Sessions

<details>
<summary>Session 2026-01-27 — main — Orchestrator Merge (pw_cleanSite)</summary>

> Created: 2026-01-27
> Request: "Merge pw_cleanSite worktree into main"
> Branch: main

- [x] Task 1: Merge pw_cleanSite into main (--no-ff, no conflicts)
- [x] Task 2: Remove worktree and delete branch
- [x] Task 3: Update brain files

</details>

<details>
<summary>Session 2026-01-27 — pw_cleanSite — Hide iris-eda from projects listing</summary>

> Created: 2026-01-27
> Request: "Hide the iris-eda project from the projects listing page"
> Branch: pw_cleanSite

- [x] Task 1: Hide iris-eda from projects listing (glob exclusion in `projects/index.qmd`)
- [x] Task 2: Update brain files

</details>

<details>
<summary>Session 2026-01-27 — pw_cw_sustainability — Add listing thumbnail to AI sustainability essay</summary>

> Created: 2026-01-27
> Request: "Add a thumbnail image to the AI sustainability essay project so it displays in the projects listing grid"
> Branch: pw_cw_sustainability

- [x] Task 1: Add image field to AI sustainability essay YAML front matter
- [x] Task 2: Update brain files

</details>

<details>
<summary>Session 2026-01-26 — pw_cw_sustainability — COMP0173 AI Sustainability Essay</summary>

> Created: 2026-01-26 22:50
> Request: "Create a new project page for the COMP0173 coursework essay — 'Analysing the Broader Impact of AI' — replicating the PDF content exactly with a portfolio introduction"
> Branch: pw_cw_sustainability

### Task 1: Create project directory and essay page with YAML front matter
- **Status:** Complete

### Task 2: Replicate essay body text — Description, SDGs, Social Sustainability sections
- **Status:** Complete

### Task 3: Replicate essay body text — Environmental, Economic, Other Sustainability sections
- **Status:** Complete

### Task 4: Replicate SDG intersections, speculative solutions, and references
- **Status:** Complete

### Task 5: Register in _quarto.yml and validate render
- **Status:** Complete

### Task 6: Update brain files
- **Status:** Complete

</details>

<details>
<summary>Session 2026-01-27 — Viewport Overflow Fix (pw_presentation)</summary>

**Request:** Fix presentation.qmd layout overflow — content is getting pushed out of the 1280x720 slide viewport. Fix sizing/spacing only, plus slide 5 link fix.

- [x] Task 1: Fix slide 5 link (remove anchor fragment)
- [x] Task 2: Reduce SCSS dimensions to fit 1280x720 viewport
- [x] Task 3: Reduce QMD YAML margin + render and iterate
- [x] Task 4: Update brain files

</details>

<details>
<summary>Session 2026-01-26 — UCL Application Presentation (pw_presentation)</summary>

**Request:** Transform revealjs-demo into formal 5-slide application presentation for UCL RA Grand Challenges Living Lab. Fix false claims in index.qmd.

- [x] Task 1: Fix false claims in index.qmd
- [x] Task 2: Create custom Revealjs SCSS theme
- [x] Task 3: Build all 5 slides in presentation.qmd
- [x] Task 4: Add interactive JS elements + polish
- [x] Task 5: Update index page + validate + brain sync

</details>

<details>
<summary>Session 2026-01-26 — pw_EDA_model — Compositional GP Modelling Pipeline</summary>

> Created: 2026-01-26 19:30
> Branch: pw_EDA_model

- [x] Task 1: Install GPyTorch and prepare dependencies
- [x] Task 2: Add Probabilistic Modelling Framework section with mathematical foundation
- [x] Task 3: Data preparation for GP modelling (8 buildings — one per category)
- [x] Task 4: Build and train ExactGP models for all 8 building categories
- [x] Task 5: Kernel decomposition analysis
- [x] Task 6: Weather response and intervention impact analysis
- [x] Task 7: Anomaly detection and cross-building category comparison
- [x] Task 8: Model evaluation, metrics across all categories, and conclusion
- [x] Task 9: Validate render, update freeze and brain

</details>
