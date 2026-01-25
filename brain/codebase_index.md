# Content & Codebase Index

> Last updated: 2026-01-25
> Total pages: 4
> Total assets: 0
> Content status: Placeholder/Empty

---

## Page Overview

| Page | File | Purpose | Status |
|------|------|---------|--------|
| Home | `index.qmd` | Landing page with hero + bio | Placeholder |
| About | `about.qmd` | Detailed CV/Resume | Empty |
| Dashboard | `dashboard.qmd` | Sample visualization | Review needed |
| Code Example | `pythond-code-example.qmd` | Python demo | Review needed |

---

## Current Pages

### `index.qmd` — Landing Page

**Purpose:** First impression for recruiters. Hero section with professional photo, headline, and brief bio.

**Current State:** Generic placeholder content ("Hello, world!")

**Target Content:**
- Professional headline (MSc AI @ UCL + 7 years experience)
- Brief bio paragraph
- Key skills/expertise highlights
- Links to projects and CV
- Professional photo

**Status:** `Placeholder` — needs complete rewrite

---

### `about.qmd` — CV/Resume Page

**Purpose:** Detailed professional background. Replaces traditional PDF CV with interactive web version.

**Current State:** Empty file

**Target Content:**
- Education (UCL MSc, PUC Chile MSc Statistics)
- Professional Experience timeline
  - Head of Data Science @ Metro de Santiago (2023-2025)
  - Analytics Translator @ BCI (2022-2023)
  - Senior Risk Analyst @ Banco de Chile (2021-2022)
- Technical Skills (Python, Spark, PyTorch, etc.)
- Research interests (DKL, VAEs, GNNs, Disaster Risk)
- Publications/projects links
- Downloadable CV link

**Status:** `Empty` — needs full content

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
| profile.jpg | Professional headshot | Missing |
| hero-bg.jpg | Hero section background | Optional |
| project-*.png | Project screenshots | Missing |

### Documents (`assets/`)

| File | Purpose | Status |
|------|---------|--------|
| cv.pdf | Downloadable resume | Missing |

---

## Configuration Files

### `_quarto.yml` — Site Configuration

**Current:**
```yaml
project:
  type: website

website:
  title: "today"
  navbar:
    left:
      - href: index.qmd
        text: Home
      - href: dashboard.qmd
        text: Dashboard

format:
  html:
    theme: cosmo
    css: styles.css
    toc: true
```

**Target:**
```yaml
project:
  type: website

website:
  title: "Daniel Huencho | Data Science Portfolio"
  navbar:
    left:
      - href: index.qmd
        text: Home
      - href: about.qmd
        text: About
      - text: Projects
        menu:
          - href: projects/research-methodology.ipynb
            text: Research Methods
          - href: projects/industry-portfolio.qmd
            text: Industry Experience
    right:
      - icon: github
        href: https://github.com/danielhuencho
      - icon: linkedin
        href: https://linkedin.com/in/danielhuencho

format:
  html:
    theme: cosmo
    css: custom.scss
    toc: true
```

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
