# Personal Data Science Portfolio

## Mission
Build a high-performance, academic-grade portfolio website for **Daniel Huencho**, MSc AI for Sustainable Development at UCL. Showcase advanced AI research and 7+ years of industrial experience (Head of Data Science, Finance, Transportation) for recruitment at top UK tech firms.

## Tech Stack
| Layer | Technology |
|-------|------------|
| Platform | [Quarto](https://quarto.org/) (Static Site Generator) |
| Content | `.qmd` (Quarto Markdown), `.ipynb` (Jupyter Notebooks) |
| Styling | SCSS/Sass, CSS |
| Notebooks | Python 3.10+ (pandas, torch, scikit-learn, matplotlib) |
| Build | `quarto render` / `quarto preview` |

## Quick Start
```bash
# Preview site with live reload
quarto preview

# Build static site to _site/
quarto render

# Preview specific page
quarto preview index.qmd
```

## Project Structure
```
/personal_webpage
├── _quarto.yml          # Site configuration (nav, theme, metadata)
├── index.qmd            # Landing page (hero + brief bio)
├── about.qmd            # Detailed CV/Resume
├── custom.scss          # Custom styling
├── styles.css           # Additional CSS
│
├── projects/            # Portfolio projects
│   ├── _metadata.yml    # Shared project settings
│   ├── research-methodology.ipynb
│   └── industry-portfolio.qmd
│
├── assets/              # Static files
│   ├── images/          # Profile pics, diagrams
│   └── cv.pdf           # Downloadable resume
│
├── brain/               # AI agent knowledge base
├── .claude/skills/      # Claude Code skills
└── _site/               # Generated output (gitignored)
```

---

## Brain Integration

Before ANY content work, consult the relevant brain/ files:

| File | Purpose | When to Read |
|------|---------|--------------|
| `brain/plan.md` | Active session tasks | Before development |
| `brain/general_index.md` | Project structure map | When navigating/creating files |
| `brain/codebase_index.md` | Page & asset documentation | Before modifying content |
| `brain/development_standard.md` | Quality standards | During implementation |
| `brain/history_log.md` | Past decisions | When context needed |

---

## Critical Rules

1. **Brain-First**: Never create content without reading relevant brain/ files
2. **Atomic Only**: One page/section/component per task. If bigger → `/plan` first
3. **Preview-First**: Run `quarto preview` before committing changes
4. **Sync Always**: Run `/update-brain` after every task completion
5. **Human Gate**: Deviations from plan require human approval

---

## Content Guidelines

### Page Creation
- Use `.qmd` for text-heavy pages (about, blog posts)
- Use `.ipynb` for code showcases (keeps output visible)
- Always include YAML front matter with title, date, description

### Styling
- Custom styles go in `custom.scss`
- Use Quarto's built-in theme variables when possible
- Keep CSS overrides minimal and documented

### Images
- Store in `assets/images/`
- Use relative paths: `./assets/images/filename.png`
- Optimize for web (compress, appropriate dimensions)

### Python in Notebooks
- Use `snake_case` for variables
- Include clear markdown explanations between code cells
- Hide verbose output with `#| echo: false` or `#| output: false`

---

## Commands

Skills available in `.claude/skills/`. Key commands:

| Command | Purpose |
|---------|---------|
| `/session-start` | Initialize work session |
| `/plan` | Decompose request into atomic tasks |
| `/task` | Execute single atomic unit |
| `/update-brain` | Sync brain files with project |
| `/commit` | Atomic git commit |
| `/session-end` | Finalize session for merge |
| `/status` | Project overview |
| `/backup` / `/restore` | Brain state management |

Run `/status` anytime to see project state.

---

## Validation Checklist

Before committing content:
- [ ] `quarto preview` shows no errors
- [ ] Page renders correctly in browser
- [ ] Links work (internal and external)
- [ ] Images display properly
- [ ] Mobile view looks acceptable
- [ ] Brain files updated

---

## References

- Quarto Websites: https://quarto.org/docs/websites/
- Quarto Listings: https://quarto.org/docs/websites/website-listings.html
- Quarto Revealjs Presentations: https://quarto.org/docs/reference/formats/presentations/revealjs.html
- Project Context: `project_context.md`
- Target Audience: UK tech recruiters, academic reviewers
