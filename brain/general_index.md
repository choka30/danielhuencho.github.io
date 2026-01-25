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
├── _quarto.yml              # [CONFIG] Site config (dark theme, nav)
├── index.qmd                # [CONTENT] Landing page ✓ COMPLETE
├── about.qmd                # [CONTENT] CV page (separate agent)
├── custom.scss              # [CONFIG] Dark ocean blue theme ✓
├── dashboard.qmd            # [CONTENT] Sample dashboard (review)
├── pythond-code-example.qmd # [CONTENT] Code example (review)
├── styles.css               # [CONFIG] Legacy CSS (unused)
│
├── assets/                  # [ASSETS] Static files
│   ├── images/              # Profile photos
│   │   ├── my_photo_professional.jpeg
│   │   └── my_photo_friendly.jpeg
│   ├── js/                  # JavaScript
│   │   └── neural-network.js  # Canvas animation ✓
│   └── references/          # Design references
│
├── brain/                   # [META] AI agent knowledge base
│   ├── plan.md              # Session tasks (all complete)
│   ├── general_index.md     # (this file)
│   ├── codebase_index.md    # Page documentation
│   ├── development_standard.md
│   └── history_log.md
│
├── .claude/                 # [META] Claude Code configuration
│   ├── skills/              # Custom skills
│   └── settings.local.json
│
├── _site/                   # [OUTPUT] Generated site
│
├── project_context.md       # Project requirements
├── CLAUDE.md                # AI orchestration hub
└── README.md                # Documentation
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
| Site config | `_quarto.yml` | Complete |
| Landing page | `index.qmd` | **Complete** |
| CV/About | `about.qmd` | In Progress (separate agent) |
| Custom styles | `custom.scss` | **Complete** |
| Neural network animation | `assets/js/neural-network.js` | **Complete** |
| Profile images | `assets/images/` | Exists |
| Projects folder | `projects/` | Missing (create) |
| Brain files | `brain/` | Exists (updated) |
| Claude skills | `.claude/skills/` | Exists |

---

## Migration Checklist

To reach target state:

### Files Created (This Session)
- [x] `custom.scss` - Dark ocean blue theme
- [x] `assets/js/neural-network.js` - Canvas animation
- [x] `_quarto.yml` - Updated config
- [x] `index.qmd` - Complete landing page

### Files to Create (Future)
- [ ] `projects/` directory
- [ ] `projects/_metadata.yml` - Shared project settings
- [ ] `projects/research-methodology.ipynb` - Research showcase
- [ ] `projects/industry-portfolio.qmd` - Industry experience
- [ ] `assets/cv.pdf` - Downloadable CV

### Files In Progress (Separate Agent)
- [ ] `about.qmd` - Detailed CV content

### Files to Review/Remove
- [ ] `dashboard.qmd` - Keep or integrate?
- [ ] `pythond-code-example.qmd` - Keep or integrate?
- [ ] `styles.css` - Can be removed (replaced by custom.scss)

---

## Recent Changes

| Date | Change | Location |
|------|--------|----------|
| 2026-01-25 | Complete index.qmd with neural network animation | `index.qmd`, `assets/js/` |
| 2026-01-25 | Created dark ocean blue theme | `custom.scss` |
| 2026-01-25 | Updated site configuration | `_quarto.yml` |
| 2026-01-25 | Brain restructure for Quarto portfolio | `brain/`, `CLAUDE.md` |

---

## Notes

- This is a Quarto website project, not a Python/ML codebase
- Use `quarto preview` for live development
- Output goes to `_site/` (gitignored)
- Brain architecture supports worktree workflows
- Update this file when creating new folders or major reorganization
- Use `/update-brain` to refresh after structural changes
