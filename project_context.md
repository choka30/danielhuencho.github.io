# Project Context: Personal Data Science Portfolio (Quarto)

## 1. Project Overview
**Goal:** Build a high-performance, academic-grade portfolio website for **Daniel Huencho**, an MSc AI for Sustainable Development student at UCL.
**Purpose:** To showcase advanced AI research and extensive industrial experience (Head of Data Science, Finance, Transportation) for recruitment at top UK tech firms.
**Platform:** Quarto (Static Site Generator) + Python.

## 2. Tech Stack & Environment
* **Core Engine:** [Quarto](https://quarto.org/) (latest version).
* **Language:** Python 3.10+ (for notebook execution).
* **IDE:** VS Code / Cursor.
* **Key Libraries:** `pandas`, `torch`, `scikit-learn`, `pyspark` (CV skill), `geopandas`, `matplotlib`.
* **Styling:** SCSS/Sass (via Quarto themes).
* **References:** https://quarto.org/docs/websites/

## 3. User & Content Context (The "Persona")
* **Author:** Daniel Huencho (Student ID: 25168452).
* **Current Role:** MSc AI for Sustainable Development @ UCL (University College London).
* **Professional Background (7+ Years Experience):**
    * **Head of Data Science @ Metro de Santiago (2023-2025):** Led a team of 5, designed GenAI agents for operations, and built end-to-end Big Data pipelines for energy efficiency (SCADA).
    * **Analytics Translator @ BCI (2022-2023):** Bridged business/tech gap, utilized Databricks/Spark for customer journey optimization.
    * **Senior Risk Management Analyst @ Banco de Chile (2021-2022):** Managed risk models and migrated infrastructure to Cloudera.
    * **Academic:** MSc Statistics (PUC Chile, Rank 2nd). 2020 Thesis on Multinomial Logit Models for route choice behavior.
* **Current Research Focus:**
    * **General Topic:** AI for Disaster Risk Management & Earth Observation.
    * **Methods:** Deep Kernel Learning (DKL), Variational Autoencoders (VAEs), Graph Neural Networks (GNNs), Bayesian Modeling.

## 4. Operational Rules for AI Agent
* **Build Command:** Always use `quarto preview` to check changes in real-time.
* **File Handling:**
    * Do NOT convert `.ipynb` to HTML manually. Let Quarto handle the rendering.
    * Create content in `.qmd` (Quarto Markdown) or `.ipynb` (Jupyter Notebooks).
* **Coding Standards:**
    * Use **snake_case** for Python variables.
    * Keep CSS overrides in `custom.scss`.
    * Use relative paths for images (`./images/filename.png`).

## 5. Project Structure (Target Architecture)
```text
/personal_webpage
│
├── _quarto.yml            # Main configuration (Navigation, Theme, Metadata)
├── index.qmd              # Landing Page (Hero section + brief bio)
├── about.qmd              # Detailed CV/Resume (Imported from CV PDF context)
├── custom.scss            # Custom styling (colors, fonts)
│
├── projects/              # Portfolio Projects Directory
│   ├── _metadata.yml      # Freeze configuration for execution
│   ├── research-methodology.ipynb # MAIN PROJECT: Current UCL Research (Methods: DKL/VAEs/GNNs)
│   └── industry-portfolio.qmd     # Secondary Project: Metro de Santiago & Finance experience
│
└── assets/                # Static files
    ├── images/            # Profile pics, diagram outputs
    └── cv.pdf             # Downloadable Resume