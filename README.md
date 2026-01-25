# [Project Name]

> [One sentence describing the project's purpose and target users.]

---

## Quick Start

```bash
# Clone repository
git clone <repository-url>
cd <project-name>

# Install dependencies
poetry install

# Setup pre-commit hooks
poetry run pre-commit install

# Copy environment template
cp .env.example .env
# Edit .env with your credentials

# Run tests
poetry run pytest tests/ -v
```

---

## How to Use This System

This project uses a **Claude Code orchestration system** for AI-assisted development. The system enables structured, traceable, and parallel development with multiple agents.

### System Overview

```
CLAUDE.md                    # Entry point - project config & rules
├── .claude/skills/          # Commands (12 skills)
│   ├── session-start/       # Initialize work session
│   ├── plan/                # Decompose tasks
│   ├── task/                # Execute atomic unit
│   ├── test/                # Run tests
│   ├── update-brain/        # Sync knowledge base
│   ├── commit/              # Git commit
│   ├── backup/              # Brain snapshot
│   ├── restore/             # Rollback
│   ├── status/              # Project overview
│   ├── push/                # Push to remote
│   ├── session-end/         # Finalize session
│   └── orchestrator-merge/  # Multi-branch merge
│
└── brain/                   # Knowledge base
    ├── plan.md              # Session tasks
    ├── general_index.md     # Project structure
    ├── codebase_index.md    # Code documentation
    ├── development_standard.md  # Standards (read-only)
    └── history_log.md       # Session history
```

### Workflow: Single Agent

```bash
# 1. Start Claude Code in project directory
cd <project-directory>
claude

# 2. Initialize session
/session-start

# 3. Plan your work
/plan "Implement feature X with Y and Z"

# 4. Execute tasks (auto-continues through all tasks)
/task

# 5. End session when complete
/session-end

# 6. Push changes
/push
```

### Workflow: Parallel Agents (Git Worktrees)

```bash
# 1. Create worktrees for parallel work
git worktree add ../project-feature-a -b feature/a
git worktree add ../project-feature-b -b feature/b

# 2. Start Claude Code in each worktree (separate terminals)
cd ../project-feature-a && claude
cd ../project-feature-b && claude

# 3. Each agent runs independently:
#    /session-start → /plan → /task → /session-end

# 4. When all agents complete, merge from main directory
cd <main-project-directory>
claude
/orchestrator-merge

# 5. Cleanup happens automatically
```

### Key Commands

| Command | Purpose | Auto-Trigger |
|---------|---------|--------------|
| `/session-start` | Initialize session, create backup | No |
| `/plan "request"` | Decompose into atomic tasks | No |
| `/task` | Execute tasks sequentially | **Yes** |
| `/test [scope]` | Run tests (unit/module/all/affected) | **Yes** |
| `/update-brain` | Sync brain files | No |
| `/commit` | Atomic git commit | No |
| `/status` | Project overview | **Yes** |
| `/backup` | Manual brain snapshot | No |
| `/restore` | Rollback to backup | No |
| `/push` | Push to remote | No |
| `/session-end` | Finalize session | No |
| `/orchestrator-merge` | Merge parallel branches | No |

### Brain Files

| File | Purpose | Update Frequency |
|------|---------|------------------|
| `plan.md` | Current session tasks | Per session |
| `general_index.md` | Project structure map | On structure changes |
| `codebase_index.md` | Function/class signatures | Per task |
| `development_standard.md` | Coding standards | Rarely (human only) |
| `history_log.md` | Session history | Per session-end |

### Critical Rules

1. **Brain-First**: Always read relevant brain/ files before coding
2. **Atomic Only**: One function/class/method per task
3. **Test-First**: Write failing test → implement → refactor
4. **Sync Always**: Run `/update-brain` after every task
5. **Human Gate**: Plan approval required before execution

---

## Project Structure

```
├── src/                    # Application source code
│   ├── core/               # Business logic
│   ├── data/               # Data processing
│   └── utils/              # Shared utilities
├── tests/                  # Test suite
│   ├── unit/               # Unit tests
│   └── integration/        # Integration tests
├── data/                   # Data storage (gitignored)
│   ├── raw/                # Source data
│   ├── processed/          # Processed outputs
│   ├── models/             # ML checkpoints
│   └── optuna/             # Experiment DBs
├── notebooks/              # Jupyter notebooks
├── brain/                  # AI knowledge base
└── .claude/skills/         # Claude Code skills
```

---

## Development

### Running Tests

```bash
# All tests
poetry run pytest tests/ -v

# With coverage
poetry run pytest tests/ --cov=src --cov-report=term-missing

# Specific module
poetry run pytest tests/unit/test_models.py -v

# Only failed tests from last run
poetry run pytest --lf -v
```

### Code Quality

```bash
# Format code
poetry run black .
poetry run isort .

# Lint
poetry run ruff check . --fix

# All pre-commit checks
poetry run pre-commit run --all-files
```

### Environment Variables

Copy `.env.example` to `.env` and configure:

- **AWS/GCP/Azure**: Cloud credentials
- **Database**: Connection string
- **Geospatial**: GEE, Copernicus, Planetary Computer keys
- **ML Tracking**: W&B, MLflow (optional)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Language | Python 3.11+ |
| ML Framework | PyTorch, Optuna |
| Geospatial | Rasterio, GeoPandas, GDAL |
| Testing | pytest |
| Linting | Black, Ruff, isort |
| Package Manager | Poetry |

---

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Use the Claude Code workflow: `/session-start` → `/plan` → `/task`
3. Ensure tests pass: `poetry run pytest`
4. Push and create PR: `/push`

---

## License

[Your license here]

---

## References

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Agent Skills](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
- [Git Worktrees](https://git-scm.com/docs/git-worktree)
