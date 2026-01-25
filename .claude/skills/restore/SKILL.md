---
name: restore
description: Rollback brain/ files to a previous backup state. Use when session went wrong or need to recover from bad state. Optionally includes git reset.
disable-model-invocation: true
---

# Restore

Rollback brain/ files to a previous backup state.

## ⚠️ Warning

This operation **overwrites current brain/ files**. Use with caution.

## Execution Protocol

### Step 1: List Available Backups

```bash
echo "Available Backups (newest first):"
echo "─────────────────────────────────────────────────────────"
for dir in $(ls -t .brain-backups/); do
    if [ -f ".brain-backups/${dir}/_backup_info.md" ]; then
        created=$(grep "Created:" ".brain-backups/${dir}/_backup_info.md" | cut -d' ' -f3-)
        branch=$(grep "Branch:" ".brain-backups/${dir}/_backup_info.md" | cut -d' ' -f3-)
        echo "  ${dir}  |  ${branch}  |  ${created}"
    else
        echo "  ${dir}  |  (no metadata)"
    fi
done
echo "─────────────────────────────────────────────────────────"
```

### Step 2: Human Selects Backup

Present list and ask:
```
Which backup to restore? Enter timestamp (e.g., 20250121_143052)
Or type 'abort' to cancel.
```

### Step 3: Confirm Restoration

```
⚠️  RESTORE CONFIRMATION

You are about to restore brain/ from:
  Backup: .brain-backups/20250121_143052/
  Branch at backup: feature/auth
  Commit at backup: abc1234

Current brain/ files will be OVERWRITTEN.

Include git reset to matching commit? (yes/no/abort)
```

### Step 4: Execute Restore

**Brain-only restore:**
```bash
BACKUP_DIR=".brain-backups/[selected_timestamp]"

# Backup current state first (safety net)
SAFETY_BACKUP=".brain-backups/pre_restore_$(date +%Y%m%d_%H%M%S)"
mkdir -p "${SAFETY_BACKUP}"
cp -r brain/* "${SAFETY_BACKUP}/"

# Restore from selected backup
rm -rf brain/*
cp -r "${BACKUP_DIR}"/* brain/
rm -f brain/_backup_info.md  # Remove metadata file from brain/
```

**With git reset (if requested):**
```bash
# Get commit from backup metadata
COMMIT=$(grep "Commit:" "${BACKUP_DIR}/_backup_info.md" | cut -d' ' -f3)

# Reset git to that commit (soft keeps changes staged)
git reset --soft ${COMMIT}
```

### Step 5: Verify Restoration

```bash
echo "Restored files:"
ls -la brain/

echo "Current git status:"
git status --short
```

## Output Format

### Success
```
═══════════════════════════════════════════════════════
  ✓ RESTORE COMPLETE
═══════════════════════════════════════════════════════

Restored from: .brain-backups/20250121_143052/
Safety backup: .brain-backups/pre_restore_20250121_150000/

Brain files restored:
  ✓ plan.md
  ✓ general_index.md
  ✓ codebase_index.md
  ✓ development_standard.md
  ✓ history_log.md

Git reset: [yes → commit abc1234 | no → unchanged]

You can now start fresh with /session-start
```

### Abort
```
Restore cancelled. No changes made.
```

## Recovery Options

| Scenario | Action |
|----------|--------|
| Restore went wrong | Use safety backup in `.brain-backups/pre_restore_*` |
| Want to undo restore | Find `pre_restore_` backup and restore again |
| Git reset went wrong | `git reflog` to find previous HEAD |

## Safety Features

1. **Pre-restore backup** — Always creates safety backup before overwriting
2. **Human confirmation** — Requires explicit approval
3. **Git reset optional** — Can restore brain only without touching git
4. **Abort option** — Can cancel at any step

## Notes

- Only restores brain/ files, not source code
- Git reset is `--soft` (keeps changes staged)
- Use `git reset --hard` manually if you want full code rollback
- Safety backups use `pre_restore_` prefix for easy identification
