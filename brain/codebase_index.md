# Content & Codebase Index

> Last updated: 2026-01-25 22:05
> Total pages: 4
> Total assets: 1 (profile photo)
> Content status: index.qmd & about.qmd complete with improved visuals

---

## Page Overview

| Page | File | Purpose | Status |
|------|------|---------|--------|
| Home | `index.qmd` | Landing page with hero + bio | Complete |
| About | `about.qmd` | Detailed CV/Resume | Complete |
| Dashboard | `dashboard.qmd` | Sample visualization | Review needed |
| Code Example | `pythond-code-example.qmd` | Python demo | Review needed |

---

## Current Pages

### `index.qmd` — Landing Page

**Purpose:** First impression for recruiters. Hero section with professional photo, headline, and brief bio.

**Current State:**
- ✓ YAML front matter (title: Daniel Huencho)
- ✓ Hero section with neural network animation
- ✓ Professional headline (MSc AI @ UCL)
- ✓ Bio paragraph in info-card
- ✓ Skills section with legend (Expert/Advanced/Intermediate)
- ✓ Industry-standard skill categories
- ✓ Professional photo
- ✓ Timeline highlights section
- ✓ Improved text contrast (WCAG AA)
- ✓ Title block hidden (no text over hero)
- ✓ Dark-only theme (no light mode toggle)

**Status:** `Complete` — fully functional landing page with polished visuals

---

### `about.qmd` — CV/Resume Page

**Purpose:** Detailed professional background. Replaces traditional PDF CV with interactive web version.

**Current State:**
- ✓ YAML front matter (title, pagetitle, page-layout)
- ✓ Hero section with photo, name, headline
- ✓ Summary paragraph
- ✓ Education section (UCL, PUC MSc, PUC Engineering)
- ✓ Professional Experience timeline (4 positions)
- ✓ Technical Skills section with legend (Expert/Advanced/Intermediate)
- ✓ Industry-standard skill categories
- ✓ Statistical Methods section
- ✓ Languages section
- ✓ Conferences & Events section
- ✓ Downloadable CV link
- ✓ Improved text contrast (WCAG AA)
- ✓ Dark-only theme applied

**Status:** `Complete` — fully styled and organized with polished visuals

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
| my_photo_professional.jpeg | Professional headshot | ✓ Added |
| hero-bg.jpg | Hero section background | Optional |
| project-*.png | Project screenshots | Missing |

### Documents (`assets/`)

| File | Purpose | Status |
|------|---------|--------|
| cv.pdf | Downloadable resume | Missing |

---

## Configuration Files

### `_quarto.yml` — Site Configuration

**Current State:**
```yaml
project:
  type: website
  render:
    - "*.qmd"   # Required for git worktree detection

website:
  title: "Daniel Huencho | Data Science Portfolio"
  navbar:
    background: dark
    left:
      - href: index.qmd
        text: Home
      - href: about.qmd
        text: About
    right:
      - icon: github
        href: https://github.com/choka30
      - icon: linkedin
        href: https://www.linkedin.com/in/daniel-huencho-mardini-9568489a/

format:
  html:
    theme:
      dark: [cosmo, custom.scss]
    toc: false
    page-layout: full
```

**Status:** `Complete` — properly configured for worktree

**Note:** The `render: ["*.qmd"]` directive is required because Quarto doesn't auto-detect .qmd files in git worktree directories.

---

## Content Roadmap

### Phase 1: Foundation
1. Update `_quarto.yml` with proper config
2. Create `custom.scss` for styling
3. Rewrite `index.qmd` with real content
4. Create `about.qmd` with CV content

### Phase 2: Projects
5. Create `projects/` directory structure
6. Create `research-methodology.ipynb`
7. Create `industry-portfolio.qmd`

### Phase 3: Polish
8. Add professional photo
9. Create downloadable CV
10. Review and decide on dashboard.qmd
11. Mobile optimization
12. SEO metadata

---

## Notes

- Content is the main deliverable, not code
- Each page should tell a story for recruiters
- Notebooks should have polished output (hide messy code)
- Update this file via `/update-brain` after creating/modifying pages
