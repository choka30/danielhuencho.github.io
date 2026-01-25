# Development & Content Standards

> Version: 1.0
> Last updated: 2026-01-25
> Project type: Quarto Portfolio Website

---

## Quarto Page Standards

### YAML Front Matter

Every `.qmd` file must include front matter:

```yaml
---
title: "Page Title"
description: "Brief description for SEO and previews"
date: 2026-01-25
author: Daniel Huencho
---
```

**Optional fields:**
```yaml
---
image: ./assets/images/preview.png  # Social media preview
categories: [research, python]       # For filtering
toc: true                            # Table of contents
code-fold: true                      # Collapsible code blocks
---
```

### Page Structure

```markdown
---
title: "Page Title"
---

## Introduction
[Brief overview - 2-3 sentences]

## Main Content
[Organized sections with clear headers]

## Conclusion/Summary
[Key takeaways or call to action]
```

---

## Notebook Standards (`.ipynb`)

### Cell Organization

```
1. Title cell (markdown) — Page title + brief intro
2. Setup cell (code) — Imports, hidden with #| echo: false
3. Content cells — Alternating markdown explanations + code
4. Output cells — Visualizations, results
5. Conclusion cell (markdown) — Summary
```

### Code Cell Options

```python
#| echo: false        # Hide code, show output
#| output: false      # Show code, hide output
#| code-fold: true    # Collapsible code block
#| fig-cap: "Caption" # Figure caption
#| label: fig-name    # Cross-reference label
```

### Best Practices

- **Explain before showing:** Markdown cell before each code cell
- **Clean outputs:** Remove debugging prints before publishing
- **Meaningful variables:** Use descriptive names (`damage_by_region`, not `df2`)
- **Visual appeal:** Style plots consistently (colors, fonts, sizes)
- **Use snake_case** for Python variables

---

## SCSS/CSS Standards

### File Organization

```scss
// custom.scss

// ===== Variables =====
$primary-color: #2c3e50;
$accent-color: #3498db;
$font-heading: 'Roboto', sans-serif;
$font-body: 'Open Sans', sans-serif;

// ===== Base Styles =====
body {
  font-family: $font-body;
}

// ===== Components =====
.hero-section {
  // Hero specific styles
}

// ===== Utilities =====
.text-accent {
  color: $accent-color;
}
```

### Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Classes | kebab-case | `.hero-section` |
| Variables | $kebab-case | `$primary-color` |
| IDs | Avoid when possible | Use classes instead |

---

## Image Standards

### Optimization

| Use Case | Max Width | Format | Quality |
|----------|-----------|--------|---------|
| Profile photo | 400px | JPG/WebP | 80% |
| Hero background | 1920px | JPG/WebP | 70% |
| Project screenshots | 800px | PNG/WebP | 90% |
| Diagrams | 600px | SVG/PNG | Lossless |

### Naming Convention

```
<type>-<description>.<ext>

Examples:
- profile-headshot.jpg
- hero-background.jpg
- project-metro-dashboard.png
- diagram-dkl-architecture.svg
```

### Alt Text

Always include descriptive alt text:
```markdown
![Daniel Huencho, Data Scientist](./assets/images/profile-headshot.jpg)
```

---

## Git Standards

### Branch Naming

```
<type>/<short-description>

Types: content, style, config, fix, docs

Examples:
- content/about-page
- style/hero-section
- config/navigation-update
- fix/broken-links
```

### Commit Messages (Conventional Commits)

```
<type>(<scope>): <description>

[optional body]

Refs: brain/plan.md#task-N
```

**Commit Types:**

| Type | Use Case | Example |
|------|----------|---------|
| `content` | New/updated page content | `content(about): add professional experience section` |
| `style` | CSS/SCSS changes | `style(hero): improve mobile responsiveness` |
| `config` | _quarto.yml, metadata | `config(nav): add projects dropdown menu` |
| `asset` | Images, PDFs | `asset(images): add profile photo` |
| `fix` | Bug fixes | `fix(links): correct broken project links` |
| `docs` | Documentation | `docs(readme): update build instructions` |
| `feat` | New feature/page | `feat(projects): add research methodology notebook` |

---

## Definition of Done

A content task is complete when:

- [ ] Content written and proofread
- [ ] YAML front matter complete (title, description, date)
- [ ] `quarto preview` shows no errors
- [ ] Page renders correctly in browser
- [ ] Links work (internal and external)
- [ ] Images display and have alt text
- [ ] Mobile view looks acceptable
- [ ] Code outputs are clean (if notebook)
- [ ] Brain files updated via `/update-brain`
- [ ] Commit made with proper message

---

## Quality Checklist

### Content Quality
- [ ] Professional tone (suitable for recruiters)
- [ ] No spelling/grammar errors
- [ ] Accomplishments have metrics where possible
- [ ] Technical content is accurate
- [ ] Consistent formatting throughout

### Visual Quality
- [ ] Consistent color scheme
- [ ] Readable typography
- [ ] Proper spacing/whitespace
- [ ] Images are crisp (not pixelated)
- [ ] Responsive on mobile devices

### Technical Quality
- [ ] Fast page load (<3 seconds)
- [ ] No console errors
- [ ] Valid HTML output
- [ ] Proper meta tags for SEO

---

## Quick Commands Reference

```bash
# Development
quarto preview                 # Live preview
quarto preview index.qmd       # Preview specific page

# Build
quarto render                  # Build full site
quarto render about.qmd        # Render specific page

# Check
quarto check                   # Validate installation

# Clean (if needed)
rm -rf _site/ .quarto/ *_files/
```

---

## Content Voice & Tone

### Target Audience
- UK tech recruiters
- Hiring managers at top firms
- Academic reviewers

### Tone Guidelines
- **Professional** but approachable
- **Confident** without arrogance
- **Specific** with concrete examples
- **Concise** — respect reader's time

### Writing Examples

**Instead of:**
> "I have extensive experience in data science."

**Write:**
> "Led a team of 5 data scientists at Metro de Santiago, delivering 15% energy cost reduction through ML-optimized operations."

---

## Accessibility Standards

- Minimum contrast ratio: 4.5:1 for text
- All images have alt text
- Headings follow hierarchy (h1 → h2 → h3)
- Links are descriptive (not "click here")
- Color is not the only indicator of meaning
