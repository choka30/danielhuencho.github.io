# Content & Codebase Index

> Last updated: 2026-01-27
> Total pages: 8 (Home, About, Projects listing, Iris EDA, UNICON EDA+GP, UCL Application page, UCL Application presentation, + 2 legacy)
> Total assets: 2 profile photos + 1 thumbnail + 21 generated plots + 1 reference PDF + 1 job description PDF + 1 Gemini image + 1 custom SCSS theme
> Content status: Projects listing with search/tags, 3 projects complete (Iris, UNICON EDA+GP, UCL Application), freeze enabled

---

## Page Overview

| Page | File | Purpose | Status |
|------|------|---------|--------|
| Home | `index.qmd` | Landing page with hero + bio | Complete |
| About | `about.qmd` | Detailed CV/Resume | Complete |
| Projects | `projects/index.qmd` | Portfolio listing (grid + search + tags) | Complete |
| Iris EDA | `projects/iris-eda/index.qmd` | Iris dataset EDA demo | Complete |
| UNICON EDA | `projects/unicon-eda/index.qmd` | UNICON energy dataset EDA | Complete |
| UCL Application | `projects/revealjs-demo/index.qmd` | UCL RA application presentation page | Complete |
| UCL App Slides | `projects/revealjs-demo/presentation.qmd` | 5-slide Revealjs application presentation | Complete |
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

- ✓ Fixed false "15% energy cost reduction" claim — now uses CV-accurate wording

**Status:** `Complete` — fully functional landing page with simplified skills, fact-checked

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

### `projects/unicon-eda/index.qmd` — UNICON Dataset EDA + GP Modelling

**Purpose:** Exploratory data analysis and Gaussian Process probabilistic modelling of the UNICON open dataset — electricity, gas, and water consumption across La Trobe University's 5 campuses (2018–2021).

**Current State (EDA section — cells 1–21):**
- ✓ YAML front matter (title, date, description, categories: Python/EDA/Energy/Time Series/Gaussian Processes/Probabilistic ML/PyTorch, image)
- ✓ Introduction with dataset overview and key features
- ✓ Zip extraction (idempotent — skips if already extracted)
- ✓ All 11 CSVs loaded with optimized float32 dtypes
- ✓ Metadata tables: campus_meta, building_meta, nmi_meta, calendar, events
- ✓ Building categories cross-tab (by campus and category)
- ✓ Schema report for all 6 consumption/weather files (dtypes, nulls, memory, date ranges)
- ✓ Temporal coverage table (start/end dates, record counts, median intervals)
- ✓ Descriptive statistics by campus (electricity, gas, water, weather)
- ✓ Missing values bar chart
- ✓ Daily/weekly electricity consumption time series (by campus, with COVID-19 marker)
- ✓ Consumption distributions (electricity/gas/water, log scale)
- ✓ Weather–electricity correlation heatmap (Bundoora campus)
- ✓ Temperature vs consumption scatter (coloured by year)
- ✓ Summary table with key findings
- ✓ Next steps section (probabilistic modelling approaches)

**Current State (GP Modelling section — cells 22–39):**
- ✓ Mathematical framework: GP prior, posterior, marginal likelihood, compositional kernel design (LaTeX)
- ✓ 6-component additive kernel: trend + annual + weekly + weather + calendar + events
- ✓ GPyTorch setup with CUDA GPU support
- ✓ Building selection: 1 representative per category (8 categories: teaching, library, office, residence, mixed use, sport, other, leased)
- ✓ Daily aggregation + 15-feature engineering (6 weather + 4 calendar + 2 temporal + 3 event)
- ✓ Temporal train/test split (pre-2020 train / 2020+ test)
- ✓ `EnergyGP(ExactGP)` model class with 6 additive kernels
- ✓ Training convergence plot for all 8 categories
- ✓ GP posterior with 95% CI for primary teaching building
- ✓ Kernel decomposition: 6-panel additive components plot
- ✓ Learned periodicities: weekly bar chart + annual line plot
- ✓ Temperature response curve (synthetic sweep with thermoneutral zone)
- ✓ COVID-19 CUSUM changepoint detection
- ✓ Counterfactual ECM impact analysis (kWh savings)
- ✓ Anomaly detection (z > 2.5σ flagging)
- ✓ Cross-building 8-panel posterior comparison
- ✓ Hyperparameter comparison bars (weekly/annual/weather amplitudes)
- ✓ Full hyperparameter table
- ✓ 3-panel evaluation (scatter, residual histogram, calibration diagram)
- ✓ Metrics table (RMSE, MAE, MAPE, coverage for all 8 categories)
- ✓ Hypothesis testing discussion + limitations + references

**Theme & Output:**
- ✓ All plots use dark ocean blue theme
- ✓ 16 figures saved as PNG (5 EDA + 11 GP)
- ✓ `code-fold: true`, `execute.warning: false`
- ✓ `execute.freeze: auto` inherited from `_quarto.yml`
- ✓ `_freeze/projects/unicon-eda/` contains all cached outputs (16 figures + html.json)
- ✓ Total cells: 39 (21 EDA + 18 GP)

**Data dependency:** Requires `data/raw/archive.zip` (gitignored, ~142MB). Freeze enables deployment without data.

**Status:** `Complete`

---

### `projects/revealjs-demo/index.qmd` — UCL Application Presentation Page

**Purpose:** Project page describing the formal UCL RA application presentation with a link to open it.

**Current State:**
- ✓ YAML front matter (title: "Application: UCL Grand Challenges Living Lab", date, description)
- ✓ Categories: Presentation, Gaussian Processes, Energy, UCL
- ✓ Presentation structure overview (5 slides)
- ✓ Interactive features description
- ✓ Link to open presentation.html
- ✓ Built-with section (Quarto Revealjs, custom SCSS, vanilla JS)

**Status:** `Complete`

---

### `projects/revealjs-demo/presentation.qmd` — UCL Application Slides

**Purpose:** Formal 5-slide application presentation for the UCL Research Assistant — Grand Challenges Living Lab role. Content follows `assets/presentation.md` strictly.

**Current State:**
- ✓ `format: revealjs` with custom ocean blue theme (`presentation-theme.scss`)
- ✓ Title slide with gradient background (auto-generated from YAML)
- ✓ Slide 2: Technical Knowledge — education timeline (animated path nodes), probabilistic modelling card, tools card
- ✓ Slide 3: Passion for Applicable Knowledge — dissertation story (Galasso + Guedj), research connections (Henry Moss, Daniel Giles, Max Harris), philosophy quote, compositional kernels
- ✓ Slide 4: Engineering & Collaboration — Metro SCADA pipeline + AWS stack, interdisciplinary teamwork, SRA at Ramsay Hall personal stake
- ✓ Slide 5: UNICON GP Demo — live demo link, stat cards (8 categories, 6 kernels, 16 visualisations), kernel equation typing animation (JS), contact info CTA
- ✓ Speaker notes on all 4 content slides with detailed talking points from presentation.md
- ✓ Fade transitions, fragment reveals, columns layout
- ✓ Footer: "Daniel Huencho | UCL Grand Challenges Living Lab"
- ✓ 1280x720 resolution, 4% margin, slide numbers (c/t)
- ✓ All content verified against CV — no fabricated claims
- ✓ Viewport-fitted: all 5 slides fit within 1280×720 without overflow (verified via pixel budget analysis)
- ✓ Demo link points to project root (no anchor fragment)

**Interactive Elements:**
- ✓ Education path timeline with pulsing current position (CSS animation)
- ✓ Stat cards with hover effects
- ✓ Kernel equation typing animation (vanilla JS, MutationObserver trigger)
- ✓ Progressive fragment reveals on all slides

**Status:** `Complete`

---

### `projects/revealjs-demo/presentation-theme.scss` — Custom Revealjs Theme

**Purpose:** Ocean blue dark SCSS theme for the Revealjs presentation, matching the site's palette.

**Current State:**
- ✓ `/*-- scss:defaults --*/` section: colors (#0d1b2a, #1b2838, #63b3ed), Inter font, 30px root
- ✓ `/*-- scss:rules --*/` section: custom components
- ✓ `.highlight-box` — bordered info cards with gradient background
- ✓ `.stat-row` + `.stat-card` — metric cards with hover effects
- ✓ `.icon-list` — styled bullet lists with glowing dots
- ✓ `.gradient-text` — gradient text effect
- ✓ `.fade-card` — content block cards with backdrop blur
- ✓ `.path-timeline` + `.path-node` + `.path-connector` — animated education timeline
- ✓ `.slide-quote` — styled quote block
- ✓ `.cta-btn` — gradient call-to-action button
- ✓ `@keyframes pulse-dot` — pulsing animation for current path node
- ✓ Progress bar gradient, footer/slide-number styling
- ✓ Responsive adjustments

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
| unicon-daily-consumption.png | UNICON weekly electricity by campus | ✓ Generated |
| unicon-distributions.png | UNICON consumption distributions | ✓ Generated |
| unicon-missing-values.png | UNICON missing values chart | ✓ Generated |
| unicon-weather-correlation.png | Weather–electricity correlation heatmap | ✓ Generated |
| unicon-temp-scatter.png | Temperature vs consumption scatter | ✓ Generated |
| unicon-gp-training.png | GP training convergence (all 8 categories) | ✓ Generated |
| unicon-gp-posterior.png | GP posterior with 95% CI (teaching building) | ✓ Generated |
| unicon-gp-decomposition.png | 6-panel kernel decomposition | ✓ Generated |
| unicon-gp-periodicities.png | Weekly + annual learned patterns | ✓ Generated |
| unicon-gp-temp-response.png | Temperature response curve | ✓ Generated |
| unicon-gp-covid-cusum.png | COVID-19 CUSUM changepoint detection | ✓ Generated |
| unicon-gp-ecm-impact.png | Counterfactual ECM impact analysis | ✓ Generated |
| unicon-gp-anomalies.png | Anomaly detection (2.5σ threshold) | ✓ Generated |
| unicon-gp-cross-building.png | 8-category posterior comparison | ✓ Generated |
| unicon-gp-hyperparams.png | Hyperparameter comparison bars | ✓ Generated |
| unicon-gp-evaluation.png | 3-panel model evaluation | ✓ Generated |

### Documents (`assets/`)

| File | Purpose | Status |
|------|---------|--------|
| cv.pdf | Downloadable resume | Missing |
| UNICON_*.pdf | UNICON open dataset paper (electricity/gas/water consumption, multi-campus university) | ✓ Added |
| Research Assistant - Grand Challenges Living Lab .pdf | UCL job description for RA role | ✓ Added |

### Other Images (`assets/images/`)

| File | Purpose | Status |
|------|---------|--------|
| Gemini_Generated_Image_3q3ek13q3ek13q3e.png | Gemini-generated image | ✓ Added |

### Data Directory (`data/` — gitignored)

| Folder | Purpose | Status |
|--------|---------|--------|
| raw/ | Raw source datasets | ✓ Created |
| Intermidiate/ | Intermediate processed data | ✓ Created |

---

## Configuration Files

### `_quarto.yml` — Site Configuration

**Current State:**
- Navbar: Home, About, Projects (+ GitHub, LinkedIn icons)
- Render targets: index.qmd, about.qmd, projects/** (including unicon-eda)
- Theme: cosmo + custom.scss (dark only)
- Font: Inter (Google Fonts)
- Execute: `freeze: auto` (frozen outputs committed for CI deployment)

**Status:** `Complete` — includes projects nav + render targets + freeze config

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
7. ✓ Create UNICON EDA project (schema + stats + visualisations + freeze)
8. ○ Create `research-methodology.ipynb` (future)
9. ○ Create `industry-portfolio.qmd` (future)

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
