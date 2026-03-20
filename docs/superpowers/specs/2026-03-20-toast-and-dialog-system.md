# Toast & Dialog System — Design Spec

**Date:** 2026-03-20
**App:** `apps/inbox-zero-cats-for-gmail`

---

## Overview

Introduce a two-component notification system:

1. **`confirmDialog`** — rename of the existing `confirmToast`; a blocking prompt requiring user action (confirm/cancel). Semantically a dialog, not a toast.
2. **`showToast`** — new status toast for success, error, and info feedback. Auto-dismisses (with a visible timer) or persists until manually dismissed, depending on type and options.

---

## 1. Confirm Dialog

### Rename

| Before | After |
|---|---|
| `popup/components/confirmToast.ts` | `popup/components/confirmDialog.ts` |
| `showConfirmToast(onConfirm, options?)` | `showConfirmDialog(onConfirm, options?)` |
| `.toast-container` (dialog's DOM class) | `.dialog-container` |

API and behaviour are unchanged. The container class is changed to `.dialog-container` so the dialog and the status toast have distinct DOM selectors and can coexist.

**CSS:** The existing `.toast-container` and `.toast-container.toast-exit` rules in `index.css` are renamed to `.dialog-container` and `.dialog-container.toast-exit`. New `.toast-container` / `.toast-container.toast-exit` rules (identical) are added to serve the status toast.

**Imports:** All call sites in `settingsSection.ts` import via the barrel (`../components`), not directly from the file. Section 4 lists the barrel exports; call sites should use those.

---

## 2. Status Toast

### File

`popup/components/toast.ts`

### API

```ts
interface ToastOptions {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number; // ms; if omitted, uses type default
}

showToast(options: ToastOptions): void
```

### Duration defaults

| Type | Default behaviour |
|---|---|
| `success` | Auto-dismiss after 3000 ms |
| `info` | Auto-dismiss after 3000 ms |
| `error` | No auto-dismiss (persists until ✕ clicked) |

Pass an explicit `duration` to override any default. Pass `duration: 0` to make a `success` or `info` toast persistent. Passing `duration: 0` to an `error` toast has no effect — `error` is already persistent by default.

### Visual design

- Slides up from the bottom of the popup (same animation as the confirm dialog).
- A **thin progress bar on the top edge** drains left-to-right over the `duration` when auto-dismissing. Hidden when the toast is persistent.
- Progress bar color uses `@mordech/tokens` CSS variables:
  - `success` → `var(--mrd-color-success-base)`
  - `error` → `var(--mrd-color-error-base)`
  - `info` → `var(--mrd-color-primary-base)`
- A **✕ dismiss button** (`mrd-button` from `@mordech/web-components`, `size="tiny"`, `variant="text"`) is always present on the right.
- Background, text, shadow, and padding match the existing `.toast` styles already in `index.css`.

### CSS additions to `index.css`

New keyframe and classes alongside the existing toast styles:

```css
@keyframes timer-drain {
  from { width: 100%; }
  to   { width: 0%; }
}

/* Add position: relative so the absolute timer bar is clipped to the toast */
.toast {
  position: relative;
}

.toast-timer {
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  border-radius: 0;
  animation: timer-drain var(--toast-duration, 3000ms) linear forwards;
}

/* Modifier naming follows existing convention in this file (no BEM double-dash) */
.toast-timer.toast-timer-success { background: var(--mrd-color-success-base); }
.toast-timer.toast-timer-error   { background: var(--mrd-color-error-base); }
.toast-timer.toast-timer-info    { background: var(--mrd-color-primary-base); }
```

The `--toast-duration` custom property is set inline by `showToast` so the CSS animation matches the JS timer exactly.

### Behaviour

- Only one toast visible at a time. If `showToast` is called while a toast is already showing, the existing toast is immediately replaced.
- The toast does **not** block interaction (unlike the confirm dialog).
- Clicking ✕ dismisses with the existing `toast-exit` animation.
- **Coexistence with `confirmDialog`:** The confirm dialog uses `.dialog-container`; the status toast uses `.toast-container`. The two systems do not share a selector and can coexist. If `showToast` is called from inside a confirm callback (e.g. after import is applied), the dialog will already be dismissing — the toast appears immediately after without collision.
- **Timer bar for persistent toasts:** When a toast has no `duration` (or `duration: 0`), the `.toast-timer` element is **not rendered** in the template — it is conditionally omitted, not hidden via CSS. This avoids zero-duration animation edge cases.

---

## 3. Call sites — `settingsSection.ts`

All three existing `showConfirmToast` calls become `showConfirmDialog` calls (same arguments, new name). In addition, the following `showToast` calls are added:

| Action | Call |
|---|---|
| Export button clicked | `showToast({ message: 'Backup saved', type: 'success' })` |
| Import: invalid JSON | `showToast({ message: 'Invalid backup file', type: 'error' })` |
| Import: missing required fields | `showToast({ message: 'Invalid backup file', type: 'error' })` |
| Import confirmed & applied | `showToast({ message: 'Settings imported', type: 'success' })` |
| Reset images confirmed | `showToast({ message: 'Images reset to defaults', type: 'success' })` |
| Reset titles confirmed | `showToast({ message: 'Titles reset to defaults', type: 'success' })` |

---

## 4. Exports

`popup/components/index.ts` exports:
- `showConfirmDialog` (from `confirmDialog.ts`)
- `showToast` (from `toast.ts`)

---

## 5. Dependencies

- **`@mordech/tokens`** — CSS variables for semantic colors (`--mrd-color-success-base`, `--mrd-color-error-base`, `--mrd-color-primary-base`). Already imported via the popup's CSS.
- **`@mordech/web-components`** — `mrd-button` for the ✕ dismiss button. Already used in the popup.
- **`lit-html`** — for rendering toast markup. Already a dependency.

---

## Out of scope

- Toast queue / stacking multiple toasts
- Toast position configuration
- Icon/illustration inside the toast
- `handleExport` storage read failure — `browser.storage.local.get` is unlikely to fail in practice; silent throw acceptable for now
- `selectPack` storage read failure — same rationale; swallowed catch with empty fallback is acceptable
