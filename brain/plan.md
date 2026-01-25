# Session Plan

> Created: 2026-01-25 21:55
> Request: "Improve visual contrast issues (About section text, about.qmd title), add skills legend, reorganize skills by industry-standard categories"
> Branch: improve_visuals
> Session ID: 20260125_IMPROVE_VISUALS

## Context Summary

**Issues to Fix:**

1. **Text Visibility:**
   - About section on index.qmd has low contrast text (dark gray on dark background)
   - About.qmd title/hero-name may have visibility issues

2. **Skills Section:**
   - No legend explaining skill tag colors (core/advanced/intermediate)
   - Skills not organized by standard industry categories
   - Random mixing of tools, frameworks, and concepts

**Design Approach:**
- Improve contrast ratios to meet WCAG AA (4.5:1 minimum)
- Add visible legend explaining proficiency levels
- Reorganize skills using common industry groupings:
  - Languages & Frameworks
  - Machine Learning / Deep Learning
  - Data Engineering & Cloud
  - Domain Expertise

---

## Tasks

### Task 1: Fix Text Contrast Issues in SCSS
- **ID:** TASK-001
- **Status:** Complete ✓
- **Completed:** 2026-01-25 21:58
- **Description:** Update custom.scss to improve text visibility for info-card and hero sections
- **Atomic Units:**
  - Update `.info-card` to use brighter text color
  - Ensure `.hero-name` spans in about.qmd render correctly
  - Improve overall text contrast for `$text-secondary`
- **Acceptance Criteria:**
  - [ ] About section text clearly readable
  - [ ] About.qmd title/name clearly visible
  - [ ] Text contrast meets 4.5:1 ratio minimum
  - [ ] `quarto preview` shows improved readability

---

### Task 2: Create Skills Legend Component
- **ID:** TASK-002
- **Status:** Complete ✓
- **Completed:** 2026-01-25 22:00
- **Description:** Add a visual legend explaining skill proficiency levels with their corresponding colors
- **Atomic Units:**
  - Add `.skills-legend` CSS component in custom.scss
  - Define clear proficiency levels: Expert, Advanced, Intermediate
  - Match colors to existing skill-tag variants
- **Acceptance Criteria:**
  - [ ] Legend displays before skills grid
  - [ ] Shows 3 levels: Expert (core), Advanced, Intermediate
  - [ ] Uses same colors as skill tags
  - [ ] Visually distinct and easy to understand

---

### Task 3: Reorganize Skills in index.qmd
- **ID:** TASK-003
- **Status:** Complete ✓
- **Completed:** 2026-01-25 22:02
- **Description:** Restructure Technical Expertise section with industry-standard categories and add legend
- **Atomic Units:**
  - Add skills legend HTML block
  - Reorganize categories:
    1. Programming Languages
    2. ML/AI Frameworks & Tools
    3. Data Engineering & Cloud
    4. Domain Expertise
  - Ensure consistent proficiency tagging
- **Acceptance Criteria:**
  - [ ] Skills legend appears at top of section
  - [ ] Categories match industry job postings
  - [ ] Each skill has appropriate proficiency level
  - [ ] Visual hierarchy is clear

---

### Task 4: Update Skills in about.qmd
- **ID:** TASK-004
- **Status:** Complete ✓
- **Completed:** 2026-01-25 22:03
- **Description:** Apply same skills organization and legend to about.qmd Technical Skills section
- **Atomic Units:**
  - Add skills legend
  - Reorganize skill categories to match index.qmd
  - Ensure proficiency levels are consistent
- **Acceptance Criteria:**
  - [ ] Skills section matches index.qmd structure
  - [ ] Legend explains proficiency levels
  - [ ] All skills properly categorized

---

### Task 5: Final Validation and Polish
- **ID:** TASK-005
- **Status:** Complete ✓
- **Completed:** 2026-01-25 22:05
- **Description:** Run quarto preview, verify all visual improvements, check mobile responsiveness
- **Atomic Units:**
  - Test with `quarto preview`
  - Verify text contrast on both pages
  - Confirm legend displays correctly
  - Check mobile view
- **Acceptance Criteria:**
  - [ ] All text clearly readable on dark background
  - [ ] Skills legend visible and understandable
  - [ ] Skills properly organized
  - [ ] Mobile view renders correctly
  - [ ] No console errors
  - [ ] Brain files updated

---

## Testing & Validation Tools

### Tool Usage per Task

| Task | Tools Used | Purpose |
|------|------------|---------|
| After each task | `quarto render` (Bash) | Build site to check for errors |
| After each task | `mcp__ide__getDiagnostics` | Check for code/syntax errors in IDE |
| Task 5 | `quarto preview` (Bash, background) | Launch live preview server |
| Task 5 | User visual inspection | Verify contrast and layout |

### Testing Workflow

```
1. Make changes to SCSS/QMD files
   ↓
2. Run: quarto render
   ↓
3. Check: mcp__ide__getDiagnostics (verify no errors)
   ↓
4. Run: quarto preview --port 4200 (background)
   ↓
5. User opens: http://localhost:4200
   ↓
6. User verifies: text visibility, skills legend, layout
   ↓
7. Iterate or approve
```

### Preview Commands

```bash
# Render site (check for build errors)
quarto render

# Start preview server (background, for user inspection)
quarto preview --port 4200 --no-browser

# Stop preview when done
# (Ctrl+C or kill process)
```

---

## Design Decisions

### Skill Proficiency Levels

| Level | Color | Description | Use For |
|-------|-------|-------------|---------|
| Expert | Cyan/Highlight (`#90cdf4`) | Primary tools used daily | Python, PyTorch, SQL |
| Advanced | Blue (`#63b3ed`) | Strong proficiency | TensorFlow, R, Spark |
| Intermediate | Green (`#68d391`) | Working knowledge | Docker, AWS, Scala |

### Industry-Standard Skill Categories

1. **Programming Languages:** Python, R, SQL, Scala, C++
2. **ML/AI Frameworks:** PyTorch, TensorFlow, Scikit-learn, XGBoost, Keras
3. **Data Engineering & Cloud:** Spark, Databricks, AWS, Docker, ETL
4. **Domain Expertise:** Earth Observation, Financial Risk, Transportation, GenAI

### Color Contrast Improvements

| Element | Current | Updated | Contrast Ratio |
|---------|---------|---------|----------------|
| `.info-card` text | `#a0aec0` | `#e2e8f0` | 4.5:1 → 8.5:1 |
| `.text-secondary` | `#a0aec0` | Keep (links/secondary) | 4.5:1 |
| Hero summary | `#a0aec0` | `#cbd5e0` | 4.5:1 → 6.5:1 |

---

## Session Constraints

- **Max tasks:** 5
- **Dependencies:**
  - Task 1 must complete first (CSS foundation)
  - Tasks 2-4 depend on CSS being ready
  - Task 5 validates everything
- **Validation:** `quarto preview` after each task

---

## Files to Modify

| File | Changes |
|------|---------|
| `custom.scss` | Improve text contrast, add skills-legend styles |
| `index.qmd` | Add legend, reorganize skills section |
| `about.qmd` | Add legend, reorganize skills section |

