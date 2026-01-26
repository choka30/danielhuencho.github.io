# Session Plan

> No active session.

## Completed Sessions

<details>
<summary>Session 2026-01-27 — pw_cw_sustainability — Add listing thumbnail to AI sustainability essay</summary>

> Created: 2026-01-27
> Request: "Add a thumbnail image to the AI sustainability essay project so it displays in the projects listing grid"
> Branch: pw_cw_sustainability

- [x] Task 1: Add image field to AI sustainability essay YAML front matter
- [x] Task 2: Update brain files

</details>

<details>
<summary>Session 2026-01-26 — pw_cw_sustainability — COMP0173 AI Sustainability Essay</summary>

> Created: 2026-01-26 22:50
> Request: "Create a new project page for the COMP0173 coursework essay — 'Analysing the Broader Impact of AI' — replicating the PDF content exactly with a portfolio introduction"
> Branch: pw_cw_sustainability

### Task 1: Create project directory and essay page with YAML front matter
- **Status:** Complete
- **Atomic Units:**
  - [ ] Create `projects/ai-sustainability-essay/` directory
  - [ ] Create `projects/ai-sustainability-essay/index.qmd` with proper YAML front matter (title, date, description, author, categories, image placeholder)
  - [ ] Add portfolio context section: course info (COMP0173), coursework brief, and what the essay demonstrates
- **Acceptance Criteria:**
  - [ ] YAML front matter includes: title, date (2025-11-05), description, author, categories
  - [ ] Categories: `[AI, Sustainability, SDGs, Coastal Management, Essay, UCL]`
  - [ ] Portfolio context explains the coursework purpose and skills demonstrated
  - [ ] File exists at correct path

---

### Task 2: Replicate essay body text — Description, SDGs, Social Sustainability sections
- **Status:** Complete
- **Atomic Units:**
  - [ ] Add "Description of dataset and baseline" section (CoastSat overview, MLP pipeline, tidal correction, RMSE comparison)
  - [ ] Add "Connection to SDGs" section (SDG 13 Climate Action, SDG 11 Sustainable Cities, risks to SDGs)
  - [ ] Add "Impact on social sustainability" section (stakeholders, democratic decision-making, risks of simplification)
  - [ ] Add "Error sources" subsection (open-source evaluation, benchmark paper, georeferencing/tidal/slope errors)
- **Acceptance Criteria:**
  - [ ] Text matches PDF exactly (including citation numbers [1]-[30])
  - [ ] Bold section headers match PDF format
  - [ ] All paragraph content preserved verbatim

---

### Task 3: Replicate essay body text — Environmental, Economic, Other Sustainability sections
- **Status:** Complete
- **Atomic Units:**
  - [ ] Add "Impact on environmental sustainability" section (resource intensity, GEE electricity, LEO satellite pollution)
  - [ ] Add climate risk protection subsection (zone regulations, disaster prevention, infrastructure)
  - [ ] Add "Impact on economic sustainability" section (short-term costs, long-term benefits, open-source impact)
  - [ ] Add "Other sustainability factors" section (desalination, ecosystem complexity, power dynamics/climate gentrification)
- **Acceptance Criteria:**
  - [ ] Text matches PDF exactly
  - [ ] All subsections and questions from the coursework reproduced

---

### Task 4: Replicate SDG intersections, speculative solutions, and references
- **Status:** Complete
- **Atomic Units:**
  - [ ] Add "Intersection between SDGs" section (13→6 indivisible, 11→8 enabling, 13→10 constraining)
  - [ ] Add "Speculative solutions" section (labelled datasets, diffusion models, PINNs, Bayesian models, regulation)
  - [ ] Add "Ideal conditions" paragraph
  - [ ] Add "References" section with all 30 references formatted correctly
- **Acceptance Criteria:**
  - [ ] SDG interaction notation matches PDF (+3, +1, -1)
  - [ ] All 30 references [1]–[30] included with correct formatting (authors, titles, journals, DOIs)
  - [ ] Speculative solutions section complete

---

### Task 5: Register in _quarto.yml and validate render
- **Status:** Complete
- **Atomic Units:**
  - [ ] Add `projects/ai-sustainability-essay/index.qmd` to `_quarto.yml` render targets
  - [ ] Run `quarto render projects/ai-sustainability-essay/index.qmd` — verify page renders
  - [ ] Run `quarto render` (full site) — verify no regressions
  - [ ] Verify page appears in projects listing grid
- **Acceptance Criteria:**
  - [ ] Page renders without errors
  - [ ] Page appears in projects listing with correct title, date, categories
  - [ ] Full site renders cleanly
  - [ ] Text is readable on dark theme

---

### Task 6: Update brain files
- **Status:** Complete
- **Atomic Units:**
  - [ ] Run `/update-brain` to sync all brain files
  - [ ] Verify `brain/codebase_index.md` includes new project entry
  - [ ] Verify `brain/general_index.md` updated
- **Acceptance Criteria:**
  - [ ] All brain files reflect new project
  - [ ] Ready for commit

---

## Session Constraints
- Max tasks: 6
- Dependencies: Task 1 → Task 2 → Task 3 → Task 4 → Task 5 → Task 6 (sequential)
- File format: `.qmd` (text-heavy essay, no code execution needed)
- Content: Exact reproduction of PDF text + portfolio context introduction
- Theme: Dark ocean blue (inherited from site)
- No images needed (text-only essay)
- References: 30 academic citations to reproduce

## Content Strategy

The page will have two parts:
1. **Portfolio introduction** (new content): Brief context explaining the course (COMP0173 at UCL), the coursework brief, and what skills this essay demonstrates (critical analysis of AI impact, SDG framework application, literature review, policy thinking)
2. **Essay reproduction** (exact copy): The full essay text reproduced verbatim from the PDF, preserving all section headers, paragraph structure, and citation numbers

</details>

<details>
<summary>Session 2026-01-26 — pw_EDA_model — Compositional GP Modelling Pipeline</summary>

> Created: 2026-01-26 19:30
> Request: "Develop a compositional Gaussian Process modelling pipeline for UNICON energy data — building-level electricity consumption forecasting, kernel decomposition, anomaly detection, and cross-building generalisation"
> Branch: pw_EDA_model
> Previous session: EDA complete (5/5 tasks done) — this session extends the notebook with probabilistic modelling

- [x] Task 1: Install GPyTorch and prepare dependencies
- [x] Task 2: Add Probabilistic Modelling Framework section with mathematical foundation
- [x] Task 3: Data preparation for GP modelling (8 buildings — one per category)
- [x] Task 4: Build and train ExactGP models for all 8 building categories
- [x] Task 5: Kernel decomposition analysis
- [x] Task 6: Weather response and intervention impact analysis
- [x] Task 7: Anomaly detection and cross-building category comparison
- [x] Task 8: Model evaluation, metrics across all categories, and conclusion
- [x] Task 9: Validate render, update freeze and brain

</details>

## Architecture Decision: Compositional GP for Energy Modelling

**Problem:** The UCL role requires "a predictive model of energy usage patterns using compositional kernel methods (e.g. Gaussian Processes) that decomposes usage patterns into interpretable components for monitoring, prediction, and anomaly detection."

**Solution:** Build a GP regression pipeline using GPyTorch with an additive compositional kernel:

$$k_{\text{total}}(\mathbf{x}, \mathbf{x}') = k_{\text{trend}} + k_{\text{annual}} + k_{\text{weekly}} + k_{\text{weather}} + k_{\text{calendar}} + k_{\text{event}} + k_{\text{noise}}$$

Each component maps to a physical mechanism:

| Component | Kernel | Input Dims | Physical Mechanism |
|-----------|--------|-----------|-------------------|
| Long-term trend | `ScaleKernel(RBFKernel)` | day_of_year | Gradual baseline shifts (degradation, efficiency) |
| Annual seasonality | `ScaleKernel(PeriodicKernel)` | day_of_year | Climate-driven HVAC cycles (P=365.25 days) |
| Weekly periodicity | `ScaleKernel(PeriodicKernel)` | day_of_week | Occupancy pattern (weekday/weekend, P=7 days) |
| Weather response | `ScaleKernel(RBFKernel(ARD))` | temp, humidity, wind | Nonlinear temperature-consumption relationship |
| Calendar effects | `ScaleKernel(RBFKernel(ARD))` | is_semester, is_holiday, is_exam | Academic calendar modulation |
| ECM/COVID events | `ScaleKernel(LinearKernel)` | post_hvac, post_covid, post_led | Step-change interventions |
| Noise | Gaussian likelihood | — | Measurement noise + unexplained variance |

**Key methodological references:**
- Rasmussen & Williams (2006) — GP fundamentals
- Duvenaud et al. (2013) — Compositional Kernel Search (CKS)
- Lloyd et al. (2014) — Automatic Statistician
- Hensman et al. (2013) — Scalable SVGP

**Implementation:** GPyTorch (PyTorch backend, GPU-accelerated, already in env). ExactGP for single-building (n≈700 train days), SVGP for multi-building extension.

**Scope:** 7 buildings — one representative per category (Teaching, Library, Admin, Residential, Mixed-Use, Sports, Other). Primary showcase: Building 62 (Teaching, Bundoora) with 3 documented events. All 7 models share the same kernel architecture but learn independent hyperparameters, enabling direct comparison of how the GP captures different building physics.

**File format:** Append to existing `projects/unicon-eda/index.qmd` after the `## Summary` section.

---

## Tasks

### Task 1: Install GPyTorch and prepare dependencies
- **Status:** Complete
- **Atomic Units:**
  - [ ] Install `gpytorch` and `linear_operator` via uv into the project venv
  - [ ] Verify import works (`import gpytorch; import torch; torch.cuda.is_available()`)
  - [ ] Add `gpytorch` and `linear_operator` to `requirements.txt`
- **Acceptance Criteria:**
  - [ ] `gpytorch` imports without error
  - [ ] GPU (CUDA) is available for acceleration
  - [ ] `requirements.txt` updated

---

### Task 2: Add Probabilistic Modelling Framework section with mathematical foundation
- **Status:** Complete
- **Atomic Units:**
  - [ ] Add `## Probabilistic Modelling Framework` section after existing `## Summary`
  - [ ] Markdown cell: GP motivation, prior/likelihood/posterior equations (LaTeX)
  - [ ] Markdown cell: Compositional kernel design table with mathematical notation for each component
  - [ ] Code cell: GPyTorch import verification + GPU check (hidden output)
- **Acceptance Criteria:**
  - [ ] LaTeX equations render correctly in Quarto (GP prior, predictive distribution, marginal likelihood)
  - [ ] Each kernel component has mathematical formula + physical justification
  - [ ] References to Rasmussen & Williams, Duvenaud et al., Lloyd et al.

---

### Task 3: Data preparation for GP modelling (8 buildings — one per category)
- **Status:** Complete
- **Atomic Units:**
  - [ ] Code cell: Select 1 representative building per category (7 total) — best data coverage, Bundoora campus preferred
  - [ ] Display building selection table: building_id, category, campus, floor_area, capacity, date range, completeness
  - [ ] Code cell: Aggregate each building's consumption to daily (sum kWh, filter incomplete days ≥90 readings)
  - [ ] Code cell: Aggregate weather to daily (Bundoora campus: mean temp, min/max, humidity, wind)
  - [ ] Code cell: Merge consumption + weather + calendar + events + temporal features (per building)
  - [ ] Code cell: Temporal train/test split (2018-2019 train / 2020-2022 test)
  - [ ] Code cell: Feature standardisation (StandardScaler, fit on train only)
  - [ ] Code cell: Convert to PyTorch tensors, create dict of {building_id: (train_x, train_y, test_x, test_y)}
  - [ ] Display summary table: per-building train/test shapes, date ranges, event counts
- **Building selection criteria:**
  - Best data completeness (≥90% over 2018-2021)
  - Bundoora campus preferred (richest metering + weather data)
  - One from each: Teaching, Library, Administrative, Residential, Mixed-Use, Sports, Other
  - Priority to buildings with ECM events (Buildings 34, 50, 58 if they match needed categories)
- **Acceptance Criteria:**
  - [ ] 7 buildings selected, one per category
  - [ ] Train set: ~700 days per building (pre-2020), Test set: ~860 days (2020+, includes COVID)
  - [ ] 15 features: 6 weather + 4 calendar + 2 temporal + 3 event indicators
  - [ ] No data leakage (scaler fitted on train only, temporal split respected)
  - [ ] All NaN rows removed

---

### Task 4: Build and train ExactGP models for all 8 building categories
- **Status:** Complete
- **Atomic Units:**
  - [ ] Define `EnergyGP(ExactGP)` class with 6 additive kernel components
  - [ ] Configure kernel hyperparameter initialisations (fix periodic periods to 365.25 and 7)
  - [ ] Create reusable `train_gp()` function: 300 iterations, Adam optimizer (lr=0.1), ExactMarginalLogLikelihood
  - [ ] Train 7 GP models (one per building category), store models + predictions in dict
  - [ ] Loss curve plot (training convergence for primary building)
  - [ ] Generate predictions on train + test sets with `fast_pred_var()` for all 7 buildings
  - [ ] **Fig 1**: Observed vs GP posterior mean with 95% CI for primary Teaching building (full time range, COVID/LED markers)
- **Acceptance Criteria:**
  - [ ] All 7 models converge (loss stabilises)
  - [ ] Total training time < 2 minutes (7 × ~15s each)
  - [ ] Posterior mean tracks observed consumption in training period for each building
  - [ ] Uncertainty widens appropriately during COVID regime shift
  - [ ] Fig saved as `unicon-gp-posterior.png`

---

### Task 5: Kernel decomposition analysis
- **Status:** Complete
- **Atomic Units:**
  - [ ] Extract individual component contributions: $f_c(\mathbf{x}_*) = K_c(\mathbf{x}_*, X) \cdot K(X,X)^{-1} \cdot \mathbf{y}$
  - [ ] **Fig 2**: 6-panel additive decomposition (trend, annual, weekly, weather, calendar, events)
  - [ ] **Fig 3**: Learned periodicity patterns (weekly bar chart + annual line plot by month)
- **Acceptance Criteria:**
  - [ ] Components sum approximately to the GP posterior mean
  - [ ] Weekly component shows clear weekday/weekend contrast
  - [ ] Annual component shows expected seasonal pattern (Australian climate)
  - [ ] Events component shows step changes at HVAC/COVID/LED dates
  - [ ] Figs saved as `unicon-gp-decomposition.png`, `unicon-gp-periodicities.png`

---

### Task 6: Weather response and intervention impact analysis
- **Status:** Complete
- **Atomic Units:**
  - [ ] **Fig 4**: Learned temperature response curve (synthetic sweep, GP prediction ± CI)
  - [ ] Counterfactual estimation: predict consumption with event indicators set to 0
  - [ ] **Fig 5**: COVID-19 changepoint detection (standardised residuals + CUSUM plot)
  - [ ] **Fig 6**: ECM impact quantification (actual vs counterfactual, kWh savings estimate)
- **Acceptance Criteria:**
  - [ ] Temperature response shows expected nonlinear (U-shaped or hockey-stick) relationship
  - [ ] CUSUM plot clearly identifies COVID-19 structural break at March 2020
  - [ ] Counterfactual shows measurable gap between "with interventions" and "without"
  - [ ] Savings estimate reported in kWh with uncertainty bounds
  - [ ] Figs saved as `unicon-gp-temp-response.png`, `unicon-gp-covid-cusum.png`, `unicon-gp-ecm-impact.png`

---

### Task 7: Anomaly detection and cross-building category comparison
- **Status:** Complete
- **Atomic Units:**
  - [ ] Define anomaly score: $z(\mathbf{x}) = |y_{\text{obs}} - \bar{f}| / \sigma_*$
  - [ ] **Fig 7**: Anomaly detection plot for primary building (normal vs anomalous days, threshold at 2.5σ)
  - [ ] **Fig 8**: Cross-building category comparison — 7-panel grid (one per category), each showing GP posterior + CI
  - [ ] **Fig 9**: Learned hyperparameter comparison across 7 categories:
    - Weekly kernel amplitude (bar chart — which categories have strongest weekday/weekend contrast?)
    - Annual kernel amplitude (which categories are most seasonal?)
    - Weather kernel lengthscale (which categories are most weather-sensitive?)
  - [ ] Hyperparameter interpretation table: 7 rows × key hyperparameters, with physical meaning
- **Acceptance Criteria:**
  - [ ] Anomaly detector flags COVID period and any meter errors
  - [ ] Admin buildings show strongest weekly periodicity (sharp 8am-6pm weekday profile)
  - [ ] Residential buildings show weakest or inverse weekly periodicity
  - [ ] Labs/Other buildings show flattest seasonal profiles (24/7 operations)
  - [ ] Hyperparameter differences align with building physics hypotheses (H1, H5, H6)
  - [ ] Figs saved as `unicon-gp-anomalies.png`, `unicon-gp-cross-building.png`, `unicon-gp-hyperparams.png`

---

### Task 8: Model evaluation, metrics across all categories, and conclusion
- **Status:** Complete
- **Atomic Units:**
  - [ ] Compute metrics per building: RMSE, MAE, MAPE, NLPD on test set (7 rows)
  - [ ] **Fig 10**: 3-panel evaluation for primary building (actual vs predicted scatter, residual histogram, calibration plot)
  - [ ] Metrics comparison table: 7 categories × (RMSE, MAE, MAPE, coverage@90%) — which categories are hardest to predict?
  - [ ] Markdown: Discussion — connect results to hypotheses H1-H8, what the GP decomposition reveals
  - [ ] Markdown: Limitations and future work (hierarchical multi-output GP, deep kernel learning, normalizing flows, sub-daily resolution)
  - [ ] Update YAML front matter categories to include GP, Probabilistic ML, PyTorch
- **Acceptance Criteria:**
  - [ ] Pre-COVID test RMSE competitive with UNICON paper's XGBoost baseline (RMSE=1.08 normalised)
  - [ ] Calibration plot shows reasonable coverage (within 10% of nominal at 90% CI)
  - [ ] Metrics table reveals which building types the GP handles best/worst
  - [ ] Hypotheses H1-H8 are addressed with evidence from the 7-category comparison
  - [ ] All figures saved as PNGs
  - [ ] Categories updated in front matter

---

### Task 9: Validate render, update freeze and brain
- **Status:** Complete
- **Atomic Units:**
  - [ ] Run `quarto render projects/unicon-eda/index.qmd` — verify all new cells execute
  - [ ] Run `quarto render` (full site) — verify freeze captures GP outputs
  - [ ] Run `/update-brain` to sync brain files
  - [ ] Verify all 10 new figures appear in `_freeze/` and project directory
- **Acceptance Criteria:**
  - [ ] Page renders without errors
  - [ ] `_freeze/projects/unicon-eda/` contains updated cached outputs
  - [ ] Full site render completes using freeze
  - [ ] Brain files updated
  - [ ] Total notebook: ~48 cells (21 existing + 27 new)

---

## Session Constraints
- Max tasks: 9 (extended plan as requested — user authorised going over 8)
- Dependencies: Task 1 → Task 2 → Task 3 → Task 4 → Task 5 → Task 6 → Task 7 → Task 8 → Task 9 (sequential)
- Python env: `/home/dhuencho/dev_py/0001_start_pytorch/.venv`
- GPU: NVIDIA RTX 4070 Laptop GPU (8.6 GB VRAM) — ExactGP fits easily
- Data: 7 buildings × ~1,500 daily obs each → 7 × ExactGP O(n³) ≈ 2 minutes total training
- File: Append to existing `projects/unicon-eda/index.qmd` (do NOT modify existing EDA sections)
- Theme: Dark ocean blue (facecolor #1b2838, axes #0d1b2a, text #cbd5e1) — inherited from setup cell

## Hypotheses Under Test

| ID | Hypothesis | Test Method | Expected Finding |
|----|-----------|-------------|-----------------|
| H1 | Teaching buildings show stronger weekday/weekend periodicity than Residential | Compare learned weekly kernel amplitude across building types | Teaching weekday/weekend ratio ≈ 1.5-2.0x; Residential ≈ 1.0x |
| H2 | Temperature-consumption relationship is U-shaped | Examine GP weather response curve | Hockey-stick or V-shape, balance point ~15-18°C |
| H3 | COVID-19 caused structural break varying by building type | CUSUM on GP residuals, compare 3 buildings | Teaching: 50-70% drop; Library: 30-50%; Labs: <20% |
| H4 | ECM events produce measurable step-changes | Counterfactual GP prediction vs actual | LED: 4-12% building-level reduction; HVAC: 10-20% |
| H5 | Seasonal amplitude varies by building category | Compare annual kernel amplitude | Labs flattest, admin moderate, residential inverse |
| H6 | Weather sensitivity differs between building categories | Compare weather kernel lengthscales | Sports/greenhouses most sensitive; teaching moderate |
| H7 | Bundoora has different dynamics from regional campuses | (Future — hierarchical GP extension) | Different weather sensitivity, infrastructure effects |
| H8 | Academic calendar significantly modulates consumption | Calendar kernel contribution magnitude | 15-30% higher during semester vs break |

## Mathematical Foundation

### GP Regression

**Prior:** $f(\mathbf{x}) \sim \mathcal{GP}(m(\mathbf{x}), k(\mathbf{x}, \mathbf{x}'))$

**Predictive distribution:**
$$\bar{f}_* = m(\mathbf{x}_*) + \mathbf{k}_*^\top (K_{XX} + \sigma_n^2 I)^{-1}(\mathbf{y} - \mathbf{m})$$
$$\text{Var}(f_*) = k(\mathbf{x}_*, \mathbf{x}_*) - \mathbf{k}_*^\top (K_{XX} + \sigma_n^2 I)^{-1} \mathbf{k}_*$$

**Log-marginal likelihood (training objective):**
$$\log p(\mathbf{y} | X, \theta) = -\frac{1}{2}\mathbf{y}^\top (K + \sigma_n^2 I)^{-1}\mathbf{y} - \frac{1}{2}\log|K + \sigma_n^2 I| - \frac{n}{2}\log 2\pi$$

### Kernel Components

1. **Trend:** $k_{\text{trend}}(t,t') = \sigma_{\text{tr}}^2 \exp\left(-\frac{(t-t')^2}{2\ell_{\text{tr}}^2}\right)$ — long lengthscale RBF
2. **Annual:** $k_{\text{annual}}(t,t') = \sigma_a^2 \exp\left(-\frac{2\sin^2(\pi(t-t')/365.25)}{\ell_a^2}\right)$ — periodic, P=365.25
3. **Weekly:** $k_{\text{weekly}}(t,t') = \sigma_w^2 \exp\left(-\frac{2\sin^2(\pi(t-t')/7)}{\ell_w^2}\right)$ — periodic, P=7
4. **Weather:** $k_{\text{weather}}(\mathbf{w},\mathbf{w}') = \sigma_{\text{wth}}^2 \exp\left(-\frac{1}{2}(\mathbf{w}-\mathbf{w}')^\top \Lambda^{-1}(\mathbf{w}-\mathbf{w}')\right)$ — ARD RBF
5. **Calendar:** RBF-ARD over (is_semester, is_holiday, is_exam, is_weekend)
6. **Events:** $k_{\text{event}}(\mathbf{e}, \mathbf{e}') = \sigma_e^2 \mathbf{e}^\top \mathbf{e}'$ — linear kernel on binary step indicators

### Anomaly Detection

$$z(\mathbf{x}_*) = \frac{|y_{\text{obs}} - \bar{f}_*|}{\sqrt{\text{Var}(f_*) + \sigma_n^2}}$$

Flag as anomaly if $z > 2.5$ (expected false positive rate ≈ 1.2%).

### Kernel Decomposition

For additive kernel $k = \sum_c k_c$, each component's posterior mean:
$$\bar{f}_c(\mathbf{x}_*) = K_c(\mathbf{x}_*, X) \cdot (K(X,X) + \sigma_n^2 I)^{-1} \cdot \mathbf{y}$$

## Key Technical Notes

### Feature Dimensions (15 total)
| Index | Feature | Group |
|-------|---------|-------|
| 0 | temp_mean | Weather |
| 1 | temp_min | Weather |
| 2 | temp_max | Weather |
| 3 | temp_range | Weather |
| 4 | humidity_mean | Weather |
| 5 | wind_speed_mean | Weather |
| 6 | is_holiday | Calendar |
| 7 | is_semester | Calendar |
| 8 | is_exam | Calendar |
| 9 | is_weekend | Calendar |
| 10 | day_of_week | Temporal |
| 11 | day_of_year | Temporal |
| 12 | post_hvac_tuning | Event |
| 13 | post_covid_shutdown | Event |
| 14 | post_led_installation | Event |

### Computational Budget
| Step | Estimated Time |
|------|---------------|
| GPyTorch install | ~30s |
| Data prep (all cells) | ~10s |
| Single-building GP training (300 iter) | ~15s |
| Predictions + decomposition | ~5s |
| 10 figures generation | ~15s |
| Cross-building (2 additional GPs) | ~30s |
| Full Quarto render | ~2 min total |

### New Files Created
| File | Purpose |
|------|---------|
| `unicon-gp-posterior.png` | Fig 1: GP prediction with CI |
| `unicon-gp-decomposition.png` | Fig 2: Additive kernel decomposition |
| `unicon-gp-periodicities.png` | Fig 3: Weekly + annual patterns |
| `unicon-gp-temp-response.png` | Fig 4: Temperature response curve |
| `unicon-gp-covid-cusum.png` | Fig 5: COVID changepoint detection |
| `unicon-gp-ecm-impact.png` | Fig 6: ECM intervention quantification |
| `unicon-gp-anomalies.png` | Fig 7: Anomaly detection |
| `unicon-gp-cross-building.png` | Fig 8: 7-category GP posterior comparison |
| `unicon-gp-hyperparams.png` | Fig 9: Hyperparameter comparison across categories |
| `unicon-gp-evaluation.png` | Fig 10: Forecast performance metrics |
| (Tables — rendered inline) | Hyperparameter interpretation + metrics per category |
