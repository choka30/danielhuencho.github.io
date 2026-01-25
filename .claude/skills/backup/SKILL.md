---
name: backup
description: Create manual snapshot of brain/ folder before risky operations. Use before major refactoring, experiments, or when unsure about changes.
disable-model-invocation: true
---

# Backup

Create manual snapshot of brain/ files for recovery.

## When to Use

- Before major refactoring
- Before experimental changes
- When unsure about a direction
- Before `/orchestrator-merge`
- Anytime you want a restore point

## Execution Protocol

### Step 1: Create Timestamped Backup
```bash
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR=".brain-backups/${TIMESTAMP}"
mkdir -p "${BACKUP_DIR}"
```

### Step 2: Copy Brain Files
```bash
cp -r brain/* "${BACKUP_DIR}/"
```

### Step 3: Add Metadata
```bash
cat > "${BACKUP_DIR}/_backup_info.md" << EOF
# Backup Info

- **Created:** $(date -Iseconds)
- **Branch:** $(git branch --show-current)
- **Commit:** $(git rev-parse --short HEAD)
- **Reason:** [User-provided or "Manual backup"]

## Files Included
$(ls -la brain/)
EOF
```

### Step 4: Verify
```bash
ls -la "${BACKUP_DIR}/"
```

## Output Format

```
═══════════════════════════════════════════════════════
  💾 BACKUP CREATED
═══════════════════════════════════════════════════════

Location: .brain-backups/20250121_143052/
Branch:   feature/auth
Commit:   abc1234

Files backed up:
  - plan.md
  - general_index.md
  - codebase_index.md
  - development_standard.md
  - history_log.md

To restore: /restore
```

## List Existing Backups

```bash
ls -lt .brain-backups/ | head -10
```

Output:
```
Available Backups (newest first):
─────────────────────────────────────────────────────────
1. 20250121_143052  (2 hours ago)   feature/auth
2. 20250121_100000  (6 hours ago)   feature/auth
3. 20250120_163000  (yesterday)     main
─────────────────────────────────────────────────────────
```

## Backup Retention

Backups are stored in `.brain-backups/` (gitignored).

**Recommended cleanup:**
- Keep last 10 backups
- Delete backups older than 7 days

```bash
# List backups older than 7 days
find .brain-backups/ -maxdepth 1 -type d -mtime +7

# Remove old backups (careful!)
find .brain-backups/ -maxdepth 1 -type d -mtime +7 -exec rm -rf {} \;
```

## Directory Structure

```
.brain-backups/
├── 20250121_143052/
│   ├── _backup_info.md
│   ├── plan.md
│   ├── general_index.md
│   ├── codebase_index.md
│   ├── development_standard.md
│   └── history_log.md
├── 20250121_100000/
│   └── ...
└── 20250120_163000/
    └── ...
```

## Notes

- Backups are LOCAL only (gitignored)
- Each backup is independent (full copy)
- Use `/restore` to recover from a backup
- Session start automatically creates a backup
