# Session Plan

> Created: 2026-01-26 12:58
> Request: "Simplify skills to 2 levels (Advanced/Intermediate), move Databricks to Intermediate, remove Cloudera & Scala, replace XGBoost with Ensemble Models, change index.qmd hero photo to friendly version, keep professional photo on about.qmd"
> Branch: pw_fixSkills_others
> Session ID: 20260126_FIX_SKILLS_OTHERS

## Context Summary

**Changes Requested:**

1. **Skills Levels:** Reduce from 3 (Expert/Advanced/Intermediate) to 2 (Advanced/Intermediate)
2. **Skill Changes:**
   - Move Databricks → Intermediate
   - Remove Cloudera entirely
   - Remove Scala entirely
   - Replace "XGBoost" with "Ensemble Models" (covers Random Forest, XGBoost, GBM, etc.)
3. **Photo Swap:** index.qmd hero photo → `my_photo_friendly.jpeg`; about.qmd keeps `my_photo_professional.jpeg`

**Design Approach:**
- Remove the "Expert" tier from skills legend, CSS, and all skill tags
- Reclassify former "Expert" skills as "Advanced"
- Apply skill content changes (Databricks, Cloudera, Scala, XGBoost→Ensemble Models) to both index.qmd and about.qmd
- Update `custom.scss` to remove expert-related CSS classes
- Swap photo src in index.qmd only

---

## Tasks

### Task 1: Update SCSS — Remove Expert Tier
- **ID:** TASK-001
- **Status:** Complete ✓
- **Completed:** 2026-01-26 12:59
- **Description:** Remove `.skill-tag-expert`, `.legend-dot-expert`, and `.skill-tag-core` from custom.scss. Keep only Advanced and Intermediate styles.
- **Atomic Units:**
  - Remove `.skill-tag-expert` class (and `.skill-tag-core` alias)
  - Remove `.legend-dot-expert` class
  - No new CSS needed — existing Advanced and Intermediate styles remain
- **Acceptance Criteria:**
  - [ ] Only `.skill-tag-advanced` and `.skill-tag-intermediate` remain
  - [ ] Only `.legend-dot-advanced` and `.legend-dot-intermediate` remain
  - [ ] No references to "expert" in CSS

---

### Task 2: Update index.qmd — Skills + Photo
- **ID:** TASK-002
- **Status:** Complete ✓
- **Completed:** 2026-01-26 13:00
- **Description:** Swap hero photo to friendly version, update skills legend to 2 levels, reclassify skills, apply content changes
- **Atomic Units:**
  - Change hero photo: `my_photo_professional.jpeg` → `my_photo_friendly.jpeg`
  - Update skills legend HTML: Remove Expert row, keep Advanced + Intermediate
  - Reclassify all `.skill-tag-expert` → `.skill-tag-advanced`
  - Remove `[Scala]` and `[Cloudera]` tags
  - Change `[Databricks]` from advanced → intermediate
  - Replace `[XGBoost]` with `[Ensemble Models]`
- **Skill Reclassification (index.qmd):**
  - **Programming Languages:** Python→Advanced, SQL→Advanced, R→Advanced, ~~Scala~~, C++→Intermediate
  - **ML/DL:** PyTorch→Advanced, Deep Learning→Advanced, Scikit-learn→Advanced, TensorFlow→Advanced, GNNs→Advanced, Ensemble Models→Advanced, Bayesian Modeling→Advanced, Computer Vision→Intermediate, NLP→Intermediate, Generative AI→Intermediate
  - **Data Engineering:** Apache Spark→Advanced, ETL Pipelines→Advanced, Databricks→Intermediate, AWS→Intermediate, Docker→Intermediate, PostgreSQL→Intermediate, ~~Cloudera~~
  - **Domain Expertise:** Transportation Analytics→Advanced, Financial Risk Modeling→Advanced, Earth Observation→Advanced, Geospatial Analysis→Advanced, Energy Optimization→Intermediate, Disaster Risk Assessment→Intermediate
- **Acceptance Criteria:**
  - [ ] Hero photo is `my_photo_friendly.jpeg`
  - [ ] No `.skill-tag-expert` references
  - [ ] Legend shows only Advanced and Intermediate
  - [ ] Scala and Cloudera removed
  - [ ] Databricks is intermediate
  - [ ] XGBoost replaced with Ensemble Models

---

### Task 3: Update about.qmd — Skills (same changes)
- **ID:** TASK-003
- **Status:** Complete ✓
- **Completed:** 2026-01-26 13:00
- **Description:** Apply identical skills changes to about.qmd. Photo remains `my_photo_professional.jpeg` (no change).
- **Atomic Units:**
  - Update skills legend HTML: Remove Expert row
  - Reclassify all `.skill-tag-expert` → `.skill-tag-advanced`
  - Remove `[Scala]` tag
  - Remove `[Cloudera]` tag
  - Change `[Databricks]` from advanced → intermediate
  - Replace `[XGBoost]` with `[Ensemble Models]`
- **Skill Reclassification (about.qmd):**
  - Same mapping as Task 2
  - about.qmd also has Statistical Methods category — keep those as-is (all were advanced/intermediate already)
- **Acceptance Criteria:**
  - [ ] Photo unchanged (`my_photo_professional.jpeg`)
  - [ ] No `.skill-tag-expert` references
  - [ ] Legend shows only Advanced and Intermediate
  - [ ] Scala and Cloudera removed
  - [ ] Databricks is intermediate
  - [ ] XGBoost replaced with Ensemble Models

---

### Task 4: Validation
- **ID:** TASK-004
- **Status:** Complete ✓
- **Completed:** 2026-01-26 13:01
- **Description:** Build site, verify no errors, check rendering
- **Atomic Units:**
  - Run `quarto render`
  - Verify no build errors
  - Check that index.qmd and about.qmd render correctly
- **Acceptance Criteria:**
  - [ ] `quarto render` succeeds without errors
  - [ ] No "expert" references remain in any content file
  - [ ] Photo correctly displays on index.qmd (friendly) and about.qmd (professional)
  - [ ] Skills legend shows 2 levels on both pages

---

## Session Constraints
- **Max tasks:** 4
- **Dependencies:**
  - Task 1 (CSS) should be done first as foundation
  - Tasks 2 & 3 can run in parallel after Task 1
  - Task 4 validates everything
- **Files to Modify:**
  - `custom.scss` (Task 1)
  - `index.qmd` (Task 2)
  - `about.qmd` (Task 3)
