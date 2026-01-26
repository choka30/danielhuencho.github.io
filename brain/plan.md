# Session Plan

> Created: 2026-01-26
> Request: "Create UNICON EDA project — process zip, explore data schemas, build summary notebook with freeze for deployment"
> Branch: pw_startEDA_UNICON

## Architecture Decision: Freeze Strategy

**Problem:** Raw data (~950MB uncompressed) is gitignored. Notebooks must run locally but the rendered site must deploy on GitHub Pages without data.

**Solution:** Use Quarto's `freeze: auto` mechanism:
1. **Remove `_freeze/` from `.gitignore`** — frozen outputs must be committed
2. Set `execute: freeze: auto` at the project level or via `_metadata.yml`
3. Local workflow: `quarto render` executes code, saves results to `_freeze/`
4. CI workflow: `quarto render` finds `_freeze/`, skips execution, produces HTML
5. Data stays local and gitignored — only computational outputs travel with the repo

**File format:** Use `.qmd` (not `.ipynb`) for the EDA — it integrates better with Quarto's freeze, allows richer markdown, and avoids notebook metadata bloat. Python code runs via Jupyter engine in code blocks.

---

## Tasks

### Task 1: Configure freeze and project scaffolding
- **Status:** ~~Pending~~ Complete ✓
- **Completed:** 2026-01-26
- **Atomic Units:**
  - [x] Remove `_freeze/` from `.gitignore` (line 181)
  - [x] Add `execute: freeze: auto` to `_quarto.yml`
  - [x] Create `projects/unicon-eda/` directory
  - [x] Add `projects/unicon-eda/index.qmd` to render targets in `_quarto.yml`
- **Acceptance Criteria:**
  - [x] `_freeze/` no longer in `.gitignore`
  - [x] `_quarto.yml` has `execute.freeze: auto`
  - [x] `projects/unicon-eda/` directory exists
  - [x] Render target registered

---

### Task 2: Build data extraction and schema discovery module
- **Status:** ~~Pending~~ Complete ✓
- **Completed:** 2026-01-26
- **Atomic Units:**
  - [x] Create `projects/unicon-eda/index.qmd` with YAML front matter
  - [x] Setup cell: imports, theme config, zip extraction logic (extract to `data/raw/unicon/`)
  - [x] Data loading cell: read all 11 CSVs with `pd.read_csv()` (efficient dtypes, parse dates)
  - [x] Schema summary cell: for each file, display columns, dtypes, shape, null counts, date ranges
- **Acceptance Criteria:**
  - [x] Zip is extracted to `data/raw/unicon/` (idempotent — skip if already extracted)
  - [x] All 11 files loaded successfully
  - [x] Schema table rendered for every file (columns, types, nulls, sample values)
  - [x] Memory-efficient loading (float32 dtypes for all large files)

---

### Task 3: Dataset overview and descriptive statistics
- **Status:** ~~Pending~~ Complete ✓
- **Completed:** 2026-01-26
- **Atomic Units:**
  - [x] Metadata analysis: campus counts, building categories, meter hierarchy
  - [x] Temporal coverage table: date range, granularity, record count per file
  - [x] Descriptive statistics: summary stats for consumption columns across all utility types
  - [x] Data quality assessment: missing values bar chart
- **Acceptance Criteria:**
  - [x] Clear overview of the dataset hierarchy (campus → NMI → building → submeter)
  - [x] Temporal coverage visualized (table)
  - [x] Summary statistics rendered as styled tables
  - [x] Data quality issues documented

---

### Task 4: Key visualizations and EDA summary
- **Status:** ~~Pending~~ Complete ✓
- **Completed:** 2026-01-26
- **Atomic Units:**
  - [x] Time series plot: weekly avg electricity consumption (all campuses, COVID-19 marker)
  - [x] Distribution plot: consumption distributions by utility type (electricity/gas/water)
  - [x] Correlation plot: weather features vs electricity consumption (heatmap)
  - [x] Scatter plot: temperature vs consumption coloured by year
  - [x] Summary section: key findings, data quality notes, next steps for probabilistic modeling
- **Acceptance Criteria:**
  - [x] All plots use dark ocean blue theme (matching site palette)
  - [x] 5 figures saved as PNG in project directory
  - [x] Summary highlights COVID-19 impact, seasonal patterns, and modeling opportunities
  - [x] `code-fold: true` hides verbose code by default

---

### Task 5: Validate render and update brain
- **Status:** ~~Pending~~ Complete ✓
- **Completed:** 2026-01-26
- **Atomic Units:**
  - [x] Run `quarto render projects/unicon-eda/index.qmd` — verified execution (21 cells OK)
  - [x] Run `quarto render` (full site) — verified freeze skips re-execution (7 pages)
  - [x] Second `quarto render` confirmed freeze works (no kernel started)
  - [x] Run `/update-brain` to sync brain files
- **Acceptance Criteria:**
  - [x] Page renders without errors
  - [x] `_freeze/projects/unicon-eda/` contains cached output (5 figures + html.json)
  - [x] Full site render completes using freeze (no data needed on second pass)
  - [x] Brain files updated

---

## Session Constraints
- Max tasks: 5
- Dependencies: Task 1 → Task 2 → Task 3 → Task 4 → Task 5 (sequential)
- Large files: weather_data.csv (384MB), building_consumption.csv (263MB) — must use efficient loading
- Python env: `/home/dhuencho/dev_py/0001_start_pytorch/.venv`
- Data location: `/home/dhuencho/dev_py/0001_start_pytorch/src/personal_webpage/data/raw/archive.zip`
  (Note: file is in parent repo's data/raw/, NOT in the worktree — need symlink or absolute path)

## Key Technical Notes

### Dataset Files (11 CSVs, ~950MB uncompressed)
| File | Size | Key Columns |
|------|------|-------------|
| `building_consumption.csv` | 263MB | campus_id, meter_id, timestamp, consumption (kWh) |
| `weather_data.csv` | 384MB | campus_id, timestamp, air_temperature, humidity, wind_speed |
| `nmi_consumption.csv` | 176MB | meter_id, timestamp, consumption, demand_kW, demand_kVA |
| `building_submeter_consumption.csv` | 119MB | building_id, timestamp, consumption, current, voltage, power |
| `water_consumption.csv` | 8MB | campus_id, meter_id, timestamp, consumption (kL) |
| `gas_consumption.csv` | 1MB | campus_id, timestamp, consumption (kJ) |
| `building_meta.csv` | 3KB | id, campus_id, built_year, category, gross_floor_area |
| `campus_meta.csv` | 107B | id, name, capacity |
| `nmi_meta.csv` | 184B | id, campus_id, peak_demand |
| `calender.csv` | 46KB | date, is_holiday, is_semester, is_exam |
| `events.csv` | 7KB | date, meter_id, event_type, event_description |

### Quarto Freeze Workflow
1. Locally: `quarto render` → executes Python → saves to `_freeze/`
2. Commit: `git add _freeze/` → push
3. CI: `quarto render` → finds `_freeze/` → skips execution → builds HTML
