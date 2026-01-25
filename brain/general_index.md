# Project Structure Index

> Last updated: 2026-01-25
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
| Custom styles | `custom.scss` | Missing (create) |
| Projects folder | `projects/` | Missing (create) |
| Assets folder | `assets/` | Missing (create) |
| Brain files | `brain/` | Exists (updated) |
| Claude skills | `.claude/skills/` | Exists (needs update) |

---

## Migration Checklist

To reach target state:

### Files to Create
- [ ] `custom.scss` - Custom styling
- [ ] `projects/` directory
- [ ] `projects/_metadata.yml` - Shared project settings
- [ ] `projects/research-methodology.ipynb` - Research showcase
- [ ] `projects/industry-portfolio.qmd` - Industry experience
- [ ] `assets/` directory
- [ ] `assets/images/` directory
- [ ] `assets/cv.pdf` - Downloadable CV

### Files to Update
- [ ] `_quarto.yml` - Proper title, navigation, theme
- [ ] `index.qmd` - Daniel's hero section and bio
- [ ] `about.qmd` - Detailed CV content

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

---

## Notes

- This is a Quarto website project, not a Python/ML codebase
- Use `quarto preview` for live development
- Output goes to `_site/` (gitignored)
- Brain architecture supports worktree workflows
- Update this file when creating new folders or major reorganization
- Use `/update-brain` to refresh after structural changes
