# Project Structure Index

> Last updated: 2026-01-26
> Project type: Quarto Website (Portfolio)
> Author: Daniel Huencho

---

## Directory Tree

### Current State
```
/personal_webpage
│
├── _quarto.yml              # [CONFIG] Main site configuration
├── index.qmd                # [CONTENT] Landing page (placeholder)
├── about.qmd                # [CONTENT] CV page (empty)
├── dashboard.qmd            # [CONTENT] Sample dashboard (to review)
├── pythond-code-example.qmd # [CONTENT] Code example (to review)
├── styles.css               # [CONFIG] Custom CSS (empty)
│
├── brain/                   # [META] AI agent knowledge base
│   ├── plan.md              # Active session tasks
│   ├── general_index.md     # (this file) Project structure
│   ├── content_index.md     # Page & asset documentation
│   ├── content_standard.md  # Quality standards
│   └── history_log.md       # Session history
│
├── .claude/                 # [META] Claude Code configuration
│   ├── skills/              # Custom skills (12 total)
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
| Site config | `_quarto.yml` | Exists (needs update) |
| Landing page | `index.qmd` | Exists (placeholder) |
| CV/About | `about.qmd` | Exists (empty) |
| Custom styles | `custom.scss` | Exists (ocean blue theme) |
| Projects folder | `projects/` | Missing (create) |
| Assets folder | `assets/` | Exists (images added) |
| Brain files | `brain/` | Exists (updated) |
| Claude skills | `.claude/skills/` | Exists (needs update) |

---

## Migration Checklist

To reach target state:

### Files to Create
- [x] `custom.scss` - Custom styling (ocean blue dark theme)
- [ ] `projects/` directory
- [ ] `projects/_metadata.yml` - Shared project settings
- [ ] `projects/research-methodology.ipynb` - Research showcase
- [ ] `projects/industry-portfolio.qmd` - Industry experience
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

---

## Notes

- This is a Quarto website project, not a Python/ML codebase
- Use `quarto preview` for live development
- Output goes to `_site/` (gitignored)
- Brain architecture supports worktree workflows
- Update this file when creating new folders or major reorganization
- Use `/update-brain` to refresh after structural changes
