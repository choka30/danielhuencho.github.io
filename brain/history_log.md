# Development History Log

> Project started: 2026-01-25
> Last entry: 2026-01-26
> Total sessions: 3

---

## How to Use This File

This file maintains a chronological record of all development sessions. Each session entry is appended by `/session-end` and preserved during `/orchestrator-merge`.

**Structure:**
- Active sessions at top (newest first)
- Archived sessions in collapsible sections at bottom

---

## Recent Sessions

<!-- New sessions are prepended here by /session-end -->

### Session: 20260126_GP_MODELLING

**Summary**
- **Date:** 2026-01-26
- **Branch:** `pw_EDA_model`
- **Scope:** Add compositional Gaussian Process modelling pipeline to UNICON EDA notebook

**Tasks Completed**

| # | Task | Status |
|---|------|--------|
| 1 | Install GPyTorch + linear_operator | Complete |
| 2 | Mathematical framework (LaTeX equations, kernel design table) | Complete |
| 3 | Data prep: 8 buildings (one per category), daily aggregation, 15 features | Complete |
| 4 | Train ExactGP models for all 8 building categories | Complete |
| 5 | Kernel decomposition: 6-panel additive components + periodicities | Complete |
| 6 | Weather response + COVID-19 CUSUM + ECM counterfactual impact | Complete |
| 7 | Anomaly detection (2.5σ) + 8-category cross-building comparison | Complete |
| 8 | Model evaluation: RMSE/MAE/MAPE/coverage, calibration diagram, hypothesis discussion | Complete |
| 9 | Validate render, freeze outputs, update brain | Complete |

**Key Decisions**

1. **Decision:** 8 independent ExactGPs (one per building category) rather than hierarchical multi-output GP
   - **Rationale:** Enables direct hyperparameter comparison across categories while keeping implementation tractable
2. **Decision:** Daily aggregation (15-min → daily) for ExactGP tractability
   - **Rationale:** Reduces n from ~140K to ~1,500 per building, making O(n³) feasible at ~15s per model
3. **Decision:** Pre-COVID training / COVID-era testing split
   - **Rationale:** Tests out-of-distribution generalisation under structural break
4. **Decision:** Used `torch.linalg.solve` instead of GPyTorch `inv_matmul`
   - **Rationale:** `SumLinearOperator.inv_matmul` not available in GPyTorch 1.15.1; dense solve works for n=1500
5. **Decision:** Actual dataset has 8 categories (not 7): teaching, library, office, residence, mixed use, sport, other, leased
   - **Rationale:** Corrected from initial plan after discovering actual data categories

**Files Changed**

- Modified: `projects/unicon-eda/index.qmd` (~500 lines added — GP modelling sections after EDA)
- Modified: `requirements.txt` (+3 deps: torch, gpytorch, linear_operator)
- Modified: `brain/plan.md` (all 9 tasks marked complete)
- Modified: `brain/codebase_index.md` (UNICON entry updated with GP details)
- Modified: `brain/general_index.md` (recent changes table updated)
- Generated: 11 new PNG figures in `projects/unicon-eda/`
- Updated: `_freeze/projects/unicon-eda/` (16 figures + html.json)

**Notes**

- GPU (CUDA) used for training: NVIDIA RTX 4070 Laptop
- GPyTorch 1.15.1 + PyTorch 2.5.1+cu121
- Two bugs fixed during render: (1) category names were Title Case but data uses lowercase; (2) `inv_matmul` API unavailable on SumLinearOperator
- Freeze mechanism confirmed working — CI can deploy without data

---

### Session: 20260126_FIX_LISTING_CONTROLS

**Summary**
- **Date:** 2026-01-26
- **Branch:** `pw_add_projectQMD`
- **Scope:** Fix listing sort/filter controls styling on Projects page

**Tasks Completed**

| # | Task | Commits |
|---|------|---------|
| 1 | Fix listing controls styling in custom.scss | `0969697` |
| 2 | Validate with quarto preview | `0969697` |

**Key Decisions**

1. **Decision:** Move CSS selectors from `.listing-actions` to directly under `.quarto-listing`
   - **Rationale:** Quarto's rendered HTML uses `.listing-actions-group` as a direct child of `.quarto-listing` — the `.listing-actions` wrapper doesn't exist in the DOM

**Files Changed**

- Modified: `custom.scss` (restructured listing control selectors, added `.listing-actions-group` flexbox, `.input-group-text` dark styling)
- Modified: `brain/plan.md`, `brain/codebase_index.md`, `brain/general_index.md`

**Notes**

- The untracked screenshot `assets/Captura de pantalla 2026-01-26 154625.png` was left out of the commit (reference image only)
- Key lesson: always inspect rendered HTML to verify CSS selector targets match actual DOM structure

---

### Session: 20260125_INDEX_PAGE

**Summary**
- **Date:** 2026-01-25
- **Branch:** `pw_index_page`
- **Scope:** Landing page creation (index.qmd only)

**Tasks Completed**

| # | Task | Commits |
|---|------|---------|
| 1 | Setup Site Configuration & Theme | `27c8629` |
| 2 | Create Neural Network Animation Script | `27c8629` |
| 3 | Create Hero Section | `27c8629` |
| 4 | Create Skills/Expertise Section | `27c8629` |
| 5 | Final Assembly and Validation | `27c8629` |

**Key Decisions**

1. **Decision:** Use vanilla JS for neural network animation
   - **Rationale:** Quarto doesn't support React/JSX natively; vanilla JS ensures compatibility
2. **Decision:** Dark ocean blue theme (#0d1b2a primary, #2c5282 accent)
   - **Rationale:** Professional, modern aesthetic suitable for AI/tech portfolio
3. **Decision:** 30 nodes with subtle animation
   - **Rationale:** Balance between visual interest and performance

**Files Changed**

- Created: `index.qmd` (professional landing page)
- Created: `custom.scss` (dark ocean blue theme)
- Created: `assets/js/neural-network.js` (canvas animation)
- Modified: `_quarto.yml` (site configuration)

**Notes**

- Animation includes `prefers-reduced-motion` support for accessibility
- Mobile view hides animation for performance
- about.qmd handled by separate agent (not modified in this session)

---

---

## Session Entry Template

When `/session-end` runs, it appends an entry like this:

```markdown
### Session: [YYYYMMDD_HHMMSS]

**Summary**
- **Date:** [YYYY-MM-DD]
- **Duration:** [X hours]
- **Branch:** `content/feature-name`

**Tasks Completed**

| # | Task | Commits |
|---|------|---------|
| 1 | Add Education section to about.qmd | `abc1234` |
| 2 | Add Professional Experience section | `def5678` |

**Key Decisions**

1. **Decision:** [What was decided]
   - **Rationale:** [Why]

**Files Changed**

- Modified: about.qmd (+45 lines)
- Created: assets/images/profile.jpg

**Notes**

[Any observations or follow-up items]
```

---

## Archived Sessions

<details>
<summary>Pre-Portfolio Project (ML Project History)</summary>

### Archived: Session 20260121_162438

This session was from the previous ML project (Deep Kernel Building Damage Assessment) before the project was restructured as a Quarto portfolio.

**Summary**
- **Date:** 2026-01-21
- **Branch:** `dissproject_review_and_update_brain`
- **Work:** Brain files review and documentation

**Outcome:** Brain files documented for ML project. Subsequently restructured for Quarto portfolio on 2026-01-25.

</details>

---

## Statistics

### Overall Progress

| Metric | Value |
|--------|-------|
| Total sessions | 3 |
| Total tasks completed | 16 |
| Total commits | 2 |

### Sessions by Type

| Branch Type | Count |
|-------------|-------|
| content/ | 1 |
| style/ | 1 |
| config/ | 0 |
| fix/ | 0 |

---

## Notes

- **Archive frequency:** Every 10 sessions
- **Merge behavior:** Concatenate chronologically from all worktrees
- **Never delete:** This file is append-only
- **Project restructured:** 2026-01-25 (ML → Quarto Portfolio)
