# Settings Panel — Content Packs & Data Backup

**Date:** 2026-03-20
**App:** `inbox-zero-cats-for-gmail`
**Branch:** `feat/options-ui-rewrite-v2`

## Overview

Expand the existing Settings tab (currently just a "Reset to default" button + attribution) with two new sections: **Content Packs** and **Data & Backup**.

## Layout

The Settings tab remains a single view with sections stacked vertically:

1. Content Pack selector
2. Data & Backup controls
3. About / attribution (existing, unchanged)

No new top-level tabs are added. No sub-tabs within Settings.

---

## Section 1: Content Packs

### Purpose

Let users switch between built-in image pools (packs). Each pack is a curated array of Unsplash URLs shipped inside the extension — no backend, no extra permissions, no storage cost.

### Packs (initial set)

| Key | Label | Emoji |
|-----|-------|-------|
| `cats` | Cats | 🐱 |
| `dogs` | Dogs | 🐶 |
| `nature` | Nature | 🌿 |
| `art` | Art | 🎨 |

### UI

Pill/chip group — one active at a time. Active pack is highlighted. Tapping a pill immediately updates `activePack` in storage (no save button needed).

```
🐱 Cats   🐶 Dogs   🌿 Nature   🎨 Art
```

Helper text below: _"Sets the default image pool. Your uploads are always included."_

### Data model

- New storage key: `activePack` (`'cats' | 'dogs' | 'nature' | 'art'`, default `'cats'`)
- Each pack's URL array lives in `src/data/` alongside `defaultCatImages.ts`:
  - `defaultCatImages.ts` (existing — the Cats pack)
  - `defaultDogImages.ts`
  - `defaultNatureImages.ts`
  - `defaultArtImages.ts`
- A `getPack(key)` helper returns the correct array.

### Behaviour

- Switching packs **does not modify `catImageUrls`**. It only changes what `resetImages()` restores.
- `resetImages()` reads `activePack` from storage and restores to the matching default array.
- Custom uploaded images (already in `catImageUrls` but not in the defaults) are always preserved on reset — same as today.
- `activePack` is read in `renderContent()` with a fallback of `'cats'` when the key is absent — no storage write on first run. This is different from `catImageUrls`/`catTitles`, which do trigger a reset write when missing.

---

## Section 2: Data & Backup

### Purpose

Two sub-goals:
1. Move settings between browsers/devices via export/import.
2. Granular reset — reset only images or only titles instead of everything at once.

### UI

```
[ ⬆ Export ]  [ ⬇ Import ]
[ Reset images ]  [ Reset titles ]
```

Export and Import are neutral-styled buttons. Reset buttons are error/destructive-styled (red, text variant), each showing the existing confirmation toast before executing.

### Export

- Triggers a browser download of a `.json` file named `inbox-zero-cats-backup.json`.
- Payload:
  ```json
  {
    "version": 1,
    "catImageUrls": [...],
    "catTitles": [...],
    "catSubtitle": "...",
    "activePack": "cats"
  }
  ```

### Import

- Opens a file picker (`accept=".json"`).
- Reads and parses the file.
- Shows confirmation toast (action-specific message) before writing to storage.
- **Validation:** `catImageUrls` and `catTitles` are required — if either is missing or not an array, silently bail with no writes. `catSubtitle` and `activePack` are optional; apply their respective defaults (`defaultCatSubtitle` and `'cats'`) when absent. This allows importing files exported before packs existed.
- Ignores unknown keys. No partial writes — only write to storage after all validation passes.
- If `JSON.parse` throws, silently bail — same as any other validation failure.
- Calls `renderContent()` after successful import.

### Reset images / Reset titles

- Replace the existing single "Reset to default" button.
- **Reset images**: calls `resetImages()` → restores `catImageUrls` to the active pack's defaults.
- **Reset titles**: calls `resetTitles()` → restores `catTitles` **and** `catSubtitle` to defaults (see Changes table — `resetTitles.ts` must be updated to also reset `catSubtitle`).
- Both show the confirmation toast with an action-specific message before executing (see `confirmToast` changes below).
- After each reset, `renderContent()` is called by the caller — **not** internally by the util functions. `resetImages()` and `resetTitles()` are pure storage-setters: they write to storage and return, with no `renderContent()` call inside them. All callers are responsible for re-rendering.

---

## Changes to Existing Code

| File | Change |
|------|--------|
| `src/data/defaultCatImages.ts` | Unchanged |
| `src/data/defaultDogImages.ts` | New — array of Unsplash dog image URLs |
| `src/data/defaultNatureImages.ts` | New — array of Unsplash nature/landscape image URLs |
| `src/data/defaultArtImages.ts` | New — array of Unsplash art image URLs |
| `src/popup/utils/resetImages.ts` | Read `activePack` from storage; call `getPack(activePack)` (import from `../../data`) to get the default array; restore `catImageUrls`. **Remove** any internal `renderContent()` call — this util is a pure storage-setter. |
| `src/popup/utils/resetTitles.ts` | Also reset `catSubtitle` to `defaultCatSubtitle` (import `defaultCatSubtitle` from `../../data`). **Remove** any internal `renderContent()` call — pure storage-setter. |
| `src/popup/components/confirmToast.ts` | Accept optional `message` (default: `"Reset all settings? This cannot be undone."`), `confirmLabel` (default: `"Reset"`), and `confirmColor` (default: `"error"`) parameters. For the Import action use `confirmLabel: "Import"` and `confirmColor: "primary"` (not destructive red). |
| `src/popup/sections/settingsSection.ts` | Full rewrite — add Content Packs section and Data & Backup section. New signature: `settingsSection(activePack: PackKey)` (import `PackKey` from `../../data`). Calls `renderContent()` after each action. |
| `src/popup/index.ts` | Read `activePack` from storage (fallback `'cats'`); pass into `settingsSection(activePack)`. Update the bootstrap early-return paths: replace `await resetTitles(); return` and `await resetImages(); return` with `await resetTitles(); renderContent(); return` and `await resetImages(); renderContent(); return`. This is safe from infinite recursion because by the time `renderContent()` is called again, the storage keys (`catTitles` / `catImageUrls`) have been written, so the early-return guards are not triggered on the second entry. |
| `src/data/index.ts` | Re-export new pack arrays; export `type PackKey = 'cats' \| 'dogs' \| 'nature' \| 'art'`; add `getPack(key: PackKey): string[]` helper. |
| `browser.storage.local` schema | New key: `activePack: 'cats' \| 'dogs' \| 'nature' \| 'art'` |

---

## Out of Scope

- Theme / appearance controls
- Motivation / gamification (streaks, milestones)
- Online/remote pack fetching
- Merging imported data with existing data (import is a full replace)
