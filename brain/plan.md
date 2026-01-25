# Session Plan

> Created: 2026-01-25 20:30
> Request: "Create professional, creative index.qmd for AI engineer portfolio with dark ocean blue theme, interactive neural network visualization"
> Branch: pw_index_page
> Session ID: 20260125_INDEX_PAGE
> Scope: **index.qmd ONLY** (about.qmd handled by separate agent)

## Context Summary

**Goal:** Create a polished landing page (`index.qmd`) that:
1. Uses professional dark ocean blue theme (from `assets/references/custom.scss`)
2. Has clean, interactive neural network background animation
3. Follows structure inspired by bandirevanth.github.io (Hero → Brief Bio → Skills)
4. Works natively with Quarto (vanilla JS, no React dependencies)

**Key Constraints:**
- Quarto doesn't support React/JSX directly — must use vanilla JavaScript
- Animation should be elegant and subtle (not distracting)
- Must be responsive and performant
- Content reflects Daniel Huencho's AI/ML expertise
- **Do NOT modify about.qmd** — separate agent handles that

**Reference Files Analysis:**
- `custom.scss`: Ocean blue dark theme palette ($bg-primary: #0d1b2a, $accent: #2c5282)
- `neural-transport-network.html`: Vanilla JS canvas-based network animation (can adapt)
- `network-visualization.jsx`: React component (use as design reference only)

---

## Tasks

### Task 1: Setup Site Configuration & Theme
- **ID:** TASK-001
- **Status:** Completed
- **Description:** Update `_quarto.yml` to use custom.scss theme and copy theme file to project root
- **Atomic Units:**
  - [ ] Update `_quarto.yml` with proper site config
  - [ ] Copy `custom.scss` from `assets/references/` to project root
- **Acceptance Criteria:**
  - [ ] Site title shows "Daniel Huencho | AI Engineer"
  - [ ] Theme uses dark ocean blue palette
  - [ ] Navigation includes Home, About links
  - [ ] `quarto preview` runs without errors

---

### Task 2: Create Neural Network Animation Script
- **ID:** TASK-002
- **Status:** Completed
- **Description:** Create simplified, elegant vanilla JS neural network animation for hero background
- **Atomic Units:**
  - [ ] Create `assets/js/neural-network.js` — adapted from reference, optimized for performance
- **Acceptance Criteria:**
  - [ ] 25-30 nodes with ocean blue color palette
  - [ ] Subtle particle flow between nodes
  - [ ] Mouse interaction (gentle node attraction)
  - [ ] Smooth 60fps animation
  - [ ] `prefers-reduced-motion` support
  - [ ] Auto-resize on window change

---

### Task 3: Create Hero Section
- **ID:** TASK-003
- **Status:** Completed
- **Description:** Build hero section with animated background, name, headline, summary, and social links
- **Atomic Units:**
  - [ ] Write hero section in `index.qmd` using raw HTML blocks
  - [ ] Integrate canvas animation
  - [ ] Add social links (GitHub, LinkedIn, Email)
- **Acceptance Criteria:**
  - [ ] Name: "Daniel Huencho"
  - [ ] Headline: "AI Engineer | MSc AI for Sustainable Development @ UCL"
  - [ ] Brief 2-sentence summary
  - [ ] Styled social link buttons
  - [ ] Animation renders behind content

---

### Task 4: Create Skills/Expertise Section
- **ID:** TASK-004
- **Status:** Completed
- **Description:** Visual skills section with categorized skill tags
- **Atomic Units:**
  - [ ] Write Skills section using skill-tag CSS classes
  - [ ] Organize: AI/ML, Data Engineering, Tools & Platforms
- **Acceptance Criteria:**
  - [ ] 3-4 skill categories
  - [ ] Pill/tag styling from custom.scss
  - [ ] Key skills: Python, PyTorch, Spark, TensorFlow, GNNs, Deep Learning
  - [ ] Advanced skills visually distinguished

---

### Task 5: Final Assembly and Validation
- **ID:** TASK-005
- **Status:** Completed
- **Description:** Assemble complete index.qmd, test with quarto preview, verify responsiveness
- **Atomic Units:**
  - [ ] Complete index.qmd with YAML front matter and all sections
  - [ ] Run `quarto preview` validation
  - [ ] Test responsive behavior
- **Acceptance Criteria:**
  - [ ] Page renders without errors
  - [ ] All sections display correctly
  - [ ] Animation performs well
  - [ ] Mobile view works (animation hidden/simplified)
  - [ ] Navigation links work
  - [ ] Brain files updated via `/update-brain`

---

## Technical Approach

### Neural Network Animation Strategy

**Decision:** Adapt the vanilla JS approach from `neural-transport-network.html`, but simplified:

1. **Lighter version:** 25-30 nodes instead of 50
2. **Subtle colors:** Use ocean blue palette (#0d1b2a, #2c5282, #63b3ed)
3. **Gentle animation:** Slower particle movement, less glow
4. **Performance:** RequestAnimationFrame, proper cleanup
5. **Accessibility:** `prefers-reduced-motion` media query support

### File Structure After Completion

```
/personal_webpage
├── _quarto.yml              # Updated config
├── index.qmd                # Complete landing page (THIS SESSION)
├── about.qmd                # CV page (SEPARATE AGENT)
├── custom.scss              # Dark ocean blue theme
├── assets/
│   └── js/
│       └── neural-network.js  # Animation script
```

### Quarto Integration Pattern

```qmd
---
title: "Daniel Huencho"
format:
  html:
    include-in-header:
      - text: |
          <script src="assets/js/neural-network.js" defer></script>
---

::: {#neural-canvas-container .hero-section}
<canvas id="neural-network"></canvas>
<!-- Hero content here -->
:::
```

---

## Session Constraints

- **Max tasks:** 5
- **Scope:** index.qmd only (about.qmd handled separately)
- **Dependencies:**
  - Task 1 must complete first (sets up theme)
  - Tasks 2-4 build on each other
  - Task 5 depends on all previous tasks
- **Validation:** `quarto preview` after each task

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Animation too heavy for mobile | Add `prefers-reduced-motion` support, disable on small screens |
| Custom JS conflicts with Quarto | Use isolated scope, proper event cleanup |
| SCSS not loading | Verify `_quarto.yml` format field syntax |
| Canvas sizing issues | Use ResizeObserver for responsive canvas |

---

## References

- Quarto HTML includes: https://quarto.org/docs/output-formats/html-basics.html#includes
- Reference site structure: bandirevanth.github.io
- Theme source: `assets/references/custom.scss`
- Animation reference: `assets/references/neural-transport-network.html`
