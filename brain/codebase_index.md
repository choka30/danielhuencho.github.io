# Content & Codebase Index

> Last updated: 2026-01-26 15:20
> Total pages: 7 (Home, About, Projects listing, Iris EDA, Revealjs demo page, Revealjs presentation, + 2 legacy)
> Total assets: 2 profile photos + 1 thumbnail + 5 generated plots
> Content status: Projects listing with search/tags, 2 demo projects complete, dark theme visual fixes applied

---

## Page Overview

| Page | File | Purpose | Status |
|------|------|---------|--------|
| Home | `index.qmd` | Landing page with hero + bio | Complete |
| About | `about.qmd` | Detailed CV/Resume | Complete |
| Projects | `projects/index.qmd` | Portfolio listing (grid + search + tags) | Complete |
| Iris EDA | `projects/iris-eda/index.qmd` | Iris dataset EDA demo | Complete |
| Revealjs Demo | `projects/revealjs-demo/index.qmd` | Presentation demo page | Complete |
| Revealjs Slides | `projects/revealjs-demo/presentation.qmd` | 3-slide Revealjs presentation | Complete |
| Dashboard | `dashboard.qmd` | Sample visualization | Review needed |
| Code Example | `pythond-code-example.qmd` | Python demo | Review needed |

---

## Current Pages

### `index.qmd` — Landing Page

**Purpose:** First impression for recruiters. Hero section with friendly photo, headline, and brief bio.

**Current State:**
- ✓ YAML front matter (title: Daniel Huencho)
- ✓ Hero section with neural network animation
- ✓ Professional headline (MSc AI @ UCL)
- ✓ Bio paragraph in info-card
- ✓ Skills section with legend (Advanced/Intermediate — 2 levels)
- ✓ Industry-standard skill categories (no Scala, no Cloudera)
- ✓ Friendly photo (`my_photo_friendly.jpeg`)
- ✓ Timeline highlights section
- ✓ Improved text contrast (WCAG AA)
- ✓ Title block hidden via `body-classes: hide-title-block` (scoped, not global)
- ✓ Dark-only theme (no light mode toggle)
- ✓ Ensemble Models replaces XGBoost
- ✓ Databricks moved to Intermediate

**Status:** `Complete` — fully functional landing page with simplified skills

---

### `about.qmd` — CV/Resume Page

**Purpose:** Detailed professional background. Replaces traditional PDF CV with interactive web version.

**Current State:**
- ✓ YAML front matter (title, pagetitle, page-layout)
- ✓ Hero section with photo, name, headline
- ✓ Summary paragraph
- ✓ Education section (UCL, PUC MSc, PUC Engineering)
- ✓ Professional Experience timeline (4 positions)
- ✓ Technical Skills section with legend (Advanced/Intermediate — 2 levels)
- ✓ Industry-standard skill categories (no Scala, no Cloudera)
- ✓ Ensemble Models replaces XGBoost, Databricks moved to Intermediate
- ✓ Statistical Methods section
- ✓ Languages section
- ✓ Conferences & Events section
- ✓ Downloadable CV link
- ✓ Improved text contrast (WCAG AA)
- ✓ Dark-only theme applied

**Status:** `Complete` — fully styled and organized with simplified skills

---

### `projects/index.qmd` — Projects Listing Page

**Purpose:** Portfolio grid showing all projects with search and tag filtering.

**Current State:**
- ✓ Quarto native `listing` with `type: grid`
- ✓ `filter-ui: true` — search bar for text filtering
- ✓ `categories: true` — sidebar tag filtering
- ✓ `sort-ui: true` — sort dropdown
- ✓ Grid layout (2 columns)
- ✓ Dark theme card styles in custom.scss
- ✓ Search/filter/sort inputs styled dark (no white boxes)
- ✓ Sort + filter controls grouped together (flexbox toolbar)
- ✓ Icon containers (`.input-group-text`) dark-themed (no white boxes)
- ✓ Category sidebar styled dark
- ✓ Pagination controls styled dark

**Status:** `Complete`

---

### `projects/iris-eda/index.qmd` — Iris Dataset EDA

**Purpose:** Demo project showcasing data visualization and ML with the classic Iris dataset.

**Current State:**
- ✓ YAML front matter (title, date, description, categories, image)
- ✓ Categories: Python, EDA, Scikit-learn, Visualization
- ✓ Dark-themed matplotlib/seaborn plots
- ✓ Violin plots (feature distributions by species)
- ✓ Pairplot (all feature combinations)
- ✓ Correlation heatmap
- ✓ Random Forest classifier with confusion matrix
- ✓ Feature importance bar chart
- ✓ Code-fold enabled, figure captions included
- ✓ Markdown explanations between code cells
- ✓ Tables use plain pandas output (CSS handles dark styling, no inline Styler)
- ✓ Title block visible with dark theme (scoped hide-title-block fix)
- ✓ All text readable on dark background (CSS overrides for tables, cell output, captions)
- ✓ Plots render correctly — removed `matplotlib.use('Agg')` and `plt.show()` (Quarto captures figures via Jupyter inline backend)
- ✓ `plt.savefig()` retained for listing card thumbnails

**Status:** `Complete`

---

### `projects/revealjs-demo/index.qmd` — Revealjs Demo Page

**Purpose:** Project page describing the Revealjs presentation with a link to open it.

**Current State:**
- ✓ YAML front matter (title, date, description, categories)
- ✓ Categories: Quarto, Presentation, Revealjs
- ✓ Description of Revealjs features
- ✓ Link to open presentation.html
- ✓ Reference to Quarto Revealjs docs

**Status:** `Complete`

---

### `projects/revealjs-demo/presentation.qmd` — Revealjs Slides

**Purpose:** 3-slide demo presentation using Quarto Revealjs format.

**Current State:**
- ✓ `format: revealjs` with moon theme
- ✓ Slide transitions (slide), slide numbers, controls
- ✓ 3 slides with lorem ipsum content
- ✓ Speaker notes on first slide
- ✓ Footer and logo configured

**Status:** `Complete`

---

### `dashboard.qmd` — Sample Dashboard

**Purpose:** Currently a sample matplotlib visualization.

**Current State:** Basic sine wave plot with Python code

**Decision Required:**
- [ ] Keep as code showcase?
- [ ] Repurpose for project visualization?
- [ ] Remove entirely?

**Status:** `Review needed`

---

### `pythond-code-example.qmd` — Code Example

**Purpose:** Unknown — needs review

**Decision Required:**
- [ ] Integrate into projects?
- [ ] Remove?

**Status:** `Review needed`

---

## Planned Pages (Target Architecture)

### `projects/research-methodology.ipynb`

**Purpose:** Showcase UCL dissertation research methods

**Planned Content:**
- Deep Kernel Learning (DKL) explanation
- Variational Autoencoders (VAEs) for urban form
- Graph Neural Networks (GNNs) for infrastructure
- Bayesian modeling approaches
- Visual examples with code

**Status:** `Not created`

---

### `projects/industry-portfolio.qmd`

**Purpose:** Showcase 7+ years industry experience

**Planned Content:**
- Metro de Santiago: GenAI agents, Big Data pipelines, SCADA energy efficiency
- BCI: Databricks/Spark, customer journey optimization
- Banco de Chile: Risk models, Cloudera migration
- Key achievements with metrics

**Status:** `Not created`

---

## Asset Inventory

### Images (`assets/images/`)

| File | Purpose | Status |
|------|---------|--------|
| my_photo_professional.jpeg | Professional headshot (about.qmd) | ✓ Added |
| my_photo_friendly.jpeg | Friendly photo (index.qmd hero) | ✓ Added |
| hero-bg.jpg | Hero section background | Optional |
| revealjs-thumbnail.png | Revealjs demo card image | ✓ Generated |
| iris-pairplot.png | Iris EDA card image (auto-generated) | ✓ Generated |
| iris-*.png | Iris EDA plots (violin, heatmap, etc.) | ✓ Generated |

### Documents (`assets/`)

| File | Purpose | Status |
|------|---------|--------|
| cv.pdf | Downloadable resume | Missing |

---

## Configuration Files

### `_quarto.yml` — Site Configuration

**Current State:**
- Navbar: Home, About, Projects (+ GitHub, LinkedIn icons)
- Render targets: index.qmd, about.qmd, projects/**
- Theme: cosmo + custom.scss (dark only)
- Font: Inter (Google Fonts)

**Status:** `Complete` — includes projects nav + render targets

**Notes:**
- Render targets must be explicitly listed for git worktree directories
- The Revealjs presentation renders as standalone HTML
- `QUARTO_PYTHON` env var needed for render: `/home/dhuencho/dev_py/0001_start_pytorch/.venv/bin/python`

---

## Content Roadmap

### Phase 1: Foundation ✓
1. ✓ Update `_quarto.yml` with proper config
2. ✓ Create `custom.scss` for styling
3. ✓ Rewrite `index.qmd` with real content
4. ✓ Create `about.qmd` with CV content

### Phase 2: Projects (in progress)
5. ✓ Create `projects/` directory structure + listing page
6. ✓ Create demo projects (Iris EDA + Revealjs)
7. ○ Create `research-methodology.ipynb` (future)
8. ○ Create `industry-portfolio.qmd` (future)

### Phase 3: Polish
9. ✓ Add professional photo
10. ○ Create downloadable CV
11. ○ Review and decide on dashboard.qmd
12. ○ Mobile optimization
13. ○ SEO metadata

---

## Notes

- Content is the main deliverable, not code
- Each page should tell a story for recruiters
- Notebooks should have polished output (hide messy code)
- Update this file via `/update-brain` after creating/modifying pages
