# Project Structure Index

> Last updated: 2026-01-27
> Project type: Quarto Website (Portfolio)
> Author: Daniel Huencho

---

## Directory Tree

### Current State
```
/personal_webpage
│
├── _quarto.yml              # [CONFIG] Main site configuration
├── index.qmd                # [CONTENT] Landing page (complete)
├── about.qmd                # [CONTENT] CV page (complete)
├── custom.scss              # [CONFIG] Custom SCSS (ocean blue theme)
├── dashboard.qmd            # [CONTENT] Sample dashboard (to review)
├── pythond-code-example.qmd # [CONTENT] Code example (to review)
├── styles.css               # [CONFIG] Custom CSS (empty)
│
├── projects/                # [CONTENT] Portfolio projects listing
│   ├── index.qmd            # Projects listing page (grid + search + tags)
│   ├── iris-eda/            # Demo: Iris dataset EDA
│   │   └── index.qmd        # matplotlib/seaborn/scikit-learn visualizations
│   ├── unicon-eda/          # UNICON dataset EDA (electricity/gas/water)
│   │   ├── index.qmd        # Schema discovery, temporal analysis, weather correlations
│   │   └── *.png            # Generated figures (5 plots)
│   ├── revealjs-demo/       # Demo: Revealjs presentation
│   │   ├── index.qmd        # Project description page
│   │   └── presentation.qmd # Revealjs slides (3 slides)
│   └── ai-sustainability-essay/  # COMP0173 coursework essay
│       └── index.qmd        # AI impact analysis on SDGs (CoastSat)
│
├── _freeze/                 # [OUTPUT] Frozen computation outputs (committed to git)
│   └── projects/            # Cached execution results for CI deployment
│
├── data/                    # [DATA] Project datasets (gitignored)
│   ├── raw/                 # Raw source data
│   └── Intermidiate/        # Intermediate processed data
│
├── assets/                  # [ASSETS] Static files
│   ├── images/              # Profile pics, favicon
│   ├── js/                  # Neural network animation
│   └── UNICON_*.pdf         # UNICON dataset paper (reference)
│
├── brain/                   # [META] AI agent knowledge base
│   ├── plan.md              # Active session tasks
│   ├── general_index.md     # (this file) Project structure
│   ├── codebase_index.md    # Page & asset documentation
│   ├── development_standard.md # Quality standards
│   └── history_log.md       # Session history
│
├── .claude/                 # [META] Claude Code configuration
│   ├── skills/              # Custom skills
│   └── settings.local.json  # Local settings
│
├── _site/                   # [OUTPUT] Generated site (gitignored)
├── *_files/                 # [OUTPUT] Quarto intermediates (gitignored)
├── .quarto/                 # [OUTPUT] Quarto cache (gitignored)
│
├── project_context.md       # Project requirements document
├── CLAUDE.md                # AI orchestration hub
├── README.md                # Project documentation
├── .gitignore               # Git ignore patterns
└── .env.example             # Environment template
```

### Target State (from project_context.md)
```
/personal_webpage
│
├── _quarto.yml              # [CONFIG] Navigation, theme, metadata
├── index.qmd                # [CONTENT] Hero section + brief bio
├── about.qmd                # [CONTENT] Detailed CV/Resume
├── custom.scss              # [CONFIG] Custom styling (colors, fonts)
│
├── projects/                # [CONTENT] Portfolio directory
│   ├── _metadata.yml        # Freeze configuration
│   ├── research-methodology.ipynb  # UCL Research (DKL/VAEs/GNNs)
│   └── industry-portfolio.qmd      # Metro de Santiago & Finance
│
├── assets/                  # [ASSETS] Static files
│   ├── images/              # Profile pics, diagrams
│   └── cv.pdf               # Downloadable resume
│
├── brain/                   # [META] Knowledge base
└── .claude/                 # [META] Skills
```

---

## Folder Type Legend

| Tag | Meaning | Typical Contents |
|-----|---------|------------------|
| `[CONFIG]` | Configuration | `_quarto.yml`, SCSS, CSS |
| `[CONTENT]` | Portfolio content | `.qmd` pages, `.ipynb` notebooks |
| `[ASSETS]` | Static resources | Images, PDFs, downloads |
| `[META]` | Project metadata | brain/, .claude/ |
| `[OUTPUT]` | Generated files | _site/, *_files/ (gitignored) |

---

## Key Paths Reference

| Purpose | Path | Status |
|---------|------|--------|
| Site config | `_quarto.yml` | Complete (nav, theme, render targets) |
| Landing page | `index.qmd` | Complete |
| CV/About | `about.qmd` | Complete |
| Custom styles | `custom.scss` | Complete (ocean blue theme + listing cards + dark tables/forms) |
| Projects listing | `projects/index.qmd` | Complete (grid + search + tags) |
| Iris EDA demo | `projects/iris-eda/index.qmd` | Complete |
| Revealjs demo | `projects/revealjs-demo/` | Complete (page + presentation) |
| UNICON EDA+GP | `projects/unicon-eda/index.qmd` | Complete (EDA + GP modelling, 39 cells, 16 figures) |
| AI Sustainability Essay | `projects/ai-sustainability-essay/index.qmd` | Complete (COMP0173 coursework, CoastSat + SDGs) |
| Freeze outputs | `_freeze/` | Committed (for CI deployment without data) |
| Assets folder | `assets/` | Exists (images, js, UNICON PDF) |
| Data folder | `data/` | Exists (gitignored — raw, intermediate) |
| Brain files | `brain/` | Exists (updated) |
| Claude skills | `.claude/skills/` | Exists |

---

## Migration Checklist

To reach target state:

### Files to Create
- [x] `custom.scss` - Custom styling (ocean blue dark theme)
- [x] `projects/` directory
- [x] `projects/index.qmd` - Projects listing page
- [x] `projects/iris-eda/index.qmd` - Iris EDA demo project
- [x] `projects/revealjs-demo/index.qmd` - Revealjs demo project page
- [x] `projects/revealjs-demo/presentation.qmd` - Revealjs presentation
- [ ] `projects/research-methodology.ipynb` - Research showcase (future)
- [ ] `projects/industry-portfolio.qmd` - Industry experience (future)
- [x] `assets/` directory
- [x] `assets/images/` directory
- [x] `assets/images/my_photo_professional.jpeg` - Profile photo
- [ ] `assets/cv.pdf` - Downloadable CV

### Files to Update
- [x] `_quarto.yml` - Proper title, navigation, theme, render targets
- [x] `index.qmd` - Added YAML front matter (content still placeholder)
- [x] `about.qmd` - Detailed CV content added

### Files to Review/Remove
- [ ] `dashboard.qmd` - Keep or integrate?
- [ ] `pythond-code-example.qmd` - Keep or integrate?
- [ ] `styles.css` - Merge into `custom.scss`?

---

## Recent Changes

| Date | Change | Location |
|------|--------|----------|
| 2026-01-25 | Brain restructure for Quarto portfolio | `brain/`, `CLAUDE.md` |
| 2026-01-25 | Renamed brain files for content focus | `brain/` |
| 2026-01-25 | Added render targets to fix worktree detection | `_quarto.yml` |
| 2026-01-25 | Added YAML front matter to index.qmd | `index.qmd` |
| 2026-01-25 | Created custom.scss with ocean blue theme | `custom.scss` |
| 2026-01-25 | Created assets/images/ with profile photo | `assets/images/` |
| 2026-01-25 | Completed about.qmd CV page | `about.qmd` |
| 2026-01-25 | Improved text contrast (WCAG AA compliant) | `custom.scss` |
| 2026-01-25 | Added skills legend (Expert/Advanced/Intermediate) | `custom.scss`, `index.qmd`, `about.qmd` |
| 2026-01-25 | Reorganized skills with industry-standard categories | `index.qmd`, `about.qmd` |
| 2026-01-25 | Hidden Quarto title blocks (text over hero image) | `custom.scss` |
| 2026-01-25 | Fixed theme to dark-only (removed light mode) | `_quarto.yml`, `custom.scss` |
| 2026-01-26 | Simplified skills to 2 levels (Advanced/Intermediate), removed Expert tier | `custom.scss`, `index.qmd`, `about.qmd` |
| 2026-01-26 | Removed Scala and Cloudera from skills | `index.qmd`, `about.qmd` |
| 2026-01-26 | Moved Databricks to Intermediate, replaced XGBoost with Ensemble Models | `index.qmd`, `about.qmd` |
| 2026-01-26 | Swapped index.qmd hero photo to friendly version | `index.qmd` |
| 2026-01-26 | Added projects/ directory with listing page (search + tags) | `projects/index.qmd` |
| 2026-01-26 | Created Iris EDA demo project (matplotlib/seaborn/sklearn) | `projects/iris-eda/index.qmd` |
| 2026-01-26 | Created Revealjs demo project (page + 3-slide presentation) | `projects/revealjs-demo/` |
| 2026-01-26 | Added Projects to navbar and render targets | `_quarto.yml` |
| 2026-01-26 | Added listing card styles (dark theme) | `custom.scss` |
| 2026-01-26 | Added Revealjs + Listings references | `CLAUDE.md` |
| 2026-01-26 | Scoped title-block hiding to Home/About only (body-classes) | `custom.scss`, `index.qmd`, `about.qmd` |
| 2026-01-26 | Added dark theme for listing search/filter/sort/pagination | `custom.scss` |
| 2026-01-26 | Added dark theme for tables, cell output, code blocks, TOC | `custom.scss` |
| 2026-01-26 | Removed pandas Styler inline styles (CSS handles dark theme) | `projects/iris-eda/index.qmd` |
| 2026-01-26 | Full site validated — quarto render all 6 pages OK | `_site/` |
| 2026-01-26 | Fixed Iris EDA plots — removed `matplotlib.use('Agg')` + `plt.show()`, plots now render via Jupyter inline backend | `projects/iris-eda/index.qmd` |
| 2026-01-26 | Fixed listing sort/filter controls — grouped together, dark icon containers, correct CSS nesting under `.quarto-listing` | `custom.scss` |
| 2026-01-26 | Added data/ directory (gitignored) + UNICON dataset PDF to assets | `data/`, `assets/`, `.gitignore` |
| 2026-01-26 | Enabled `execute: freeze: auto` in `_quarto.yml` for CI deployment | `_quarto.yml` |
| 2026-01-26 | Removed `_freeze/` from `.gitignore` — frozen outputs now committed | `.gitignore` |
| 2026-01-26 | Created UNICON EDA project (schema discovery, stats, 5 visualisations) | `projects/unicon-eda/index.qmd` |
| 2026-01-26 | Full site validated — quarto render all 7 pages OK, freeze working | `_site/`, `_freeze/` |
| 2026-01-26 | Added GP modelling pipeline to UNICON EDA (8 building categories, 18 new cells, 11 new figures) | `projects/unicon-eda/index.qmd` |
| 2026-01-26 | Added gpytorch + linear_operator to requirements | `requirements.txt` |
| 2026-01-26 | Freeze updated with GP outputs (16 figures + html.json) | `_freeze/projects/unicon-eda/` |
| 2026-01-26 | Created AI Sustainability Essay project (COMP0173 coursework, CoastSat + SDGs, 30 references) | `projects/ai-sustainability-essay/index.qmd` |
| 2026-01-26 | Added ai-sustainability-essay to render targets | `_quarto.yml` |
| 2026-01-26 | Full site validated — quarto render all 8 pages OK | `_site/` |
| 2026-01-27 | Added listing thumbnail image to AI Sustainability Essay | `projects/ai-sustainability-essay/index.qmd` |

---

## Notes

- This is a Quarto website project, not a Python/ML codebase
- Use `quarto preview` for live development
- Output goes to `_site/` (gitignored)
- Brain architecture supports worktree workflows
- Update this file when creating new folders or major reorganization
- Use `/update-brain` to refresh after structural changes
