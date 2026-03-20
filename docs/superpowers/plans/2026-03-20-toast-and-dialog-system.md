# Toast & Dialog System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename `confirmToast` to `confirmDialog`, add a `showToast` status notification system with a top-edge progress bar timer, and wire error/success feedback into the settings section.

**Architecture:** Three focused component files — `confirmDialog.ts` (renamed, container class updated), `toast.ts` (new status toast), and `index.ts` (barrel). CSS changes are additive except for the `.toast-container` → `.dialog-container` rename for the dialog. Call sites in `settingsSection.ts` are updated last, after both components are in place.

**Tech Stack:** TypeScript, `lit-html`, `@mordech/web-components` (`mrd-button`), `@mordech/tokens` CSS variables, CSS animations.

---

## File Map

| Action | File | Responsibility |
| --- | --- | --- |
| Rename + edit | `src/popup/components/confirmDialog.ts` | Confirm dialog (was `confirmToast.ts`) — container class changed to `.dialog-container` |
| Create | `src/popup/components/toast.ts` | Status toast (`showToast`) with optional auto-dismiss timer |
| Modify | `src/popup/components/index.ts` | Barrel — export both `showConfirmDialog` and `showToast` |
| Modify | `src/popup/index.css` | Rename `.toast-container` rules to `.dialog-container`; add `.toast-container` copy for status toast; add timer CSS |
| Modify | `src/popup/sections/settingsSection.ts` | Update imports and add toast call sites |

---

## Task 1: Rename `confirmToast` → `confirmDialog` and update container class

**Files:**

- Create: `apps/inbox-zero-cats-for-gmail/src/popup/components/confirmDialog.ts`
- Delete: `apps/inbox-zero-cats-for-gmail/src/popup/components/confirmToast.ts`

- [ ] **Step 1: Copy `confirmToast.ts` to `confirmDialog.ts`**

  ```bash
  cp apps/inbox-zero-cats-for-gmail/src/popup/components/confirmToast.ts \
     apps/inbox-zero-cats-for-gmail/src/popup/components/confirmDialog.ts
  ```

- [ ] **Step 2: Edit `confirmDialog.ts` — rename function and container class**

  Change every occurrence of `showConfirmToast` → `showConfirmDialog` and `.toast-container` → `.dialog-container`:

  ```ts
  // confirmDialog.ts
  import { html, render } from 'lit-html';

  type SemanticColors = 'primary' | 'secondary' | 'success' | 'error';

  interface ConfirmDialogOptions {
    message?: string;
    confirmLabel?: string;
    confirmColor?: SemanticColors;
  }

  export const showConfirmDialog = (
    onConfirm: () => void,
    {
      message = 'Reset all settings? This cannot be undone.',
      confirmLabel = 'Reset',
      confirmColor = 'error',
    }: ConfirmDialogOptions = {},
  ) => {
    const existing = document.querySelector('.dialog-container');
    if (existing) return;

    const container = document.createElement('div');
    container.className = 'dialog-container';
    document.body.appendChild(container);

    const dismiss = () => {
      container.classList.add('toast-exit');
      container.addEventListener('animationend', () => container.remove(), {
        once: true,
      });
    };

    render(
      html`
        <div class="toast">
          <span>${message}</span>
          <div class="toast-actions">
            <mrd-button size="tiny" variant="text" @click=${dismiss}
              >Cancel</mrd-button
            >
            <mrd-button
              size="tiny"
              color=${confirmColor}
              variant="fill"
              @click=${() => {
                dismiss();
                onConfirm();
              }}
              >${confirmLabel}</mrd-button
            >
          </div>
        </div>
      `,
      container,
    );
  };
  ```

- [ ] **Step 3: Delete the old file**

  ```bash
  rm apps/inbox-zero-cats-for-gmail/src/popup/components/confirmToast.ts
  ```

- [ ] **Step 4: Commit**

  ```bash
  git add apps/inbox-zero-cats-for-gmail/src/popup/components/confirmDialog.ts \
          apps/inbox-zero-cats-for-gmail/src/popup/components/confirmToast.ts
  git commit -m "refactor(inbox-zero-cats): rename confirmToast to confirmDialog"
  ```

---

## Task 2: Update CSS — rename dialog container class, add toast container and timer styles

**Files:**

- Modify: `apps/inbox-zero-cats-for-gmail/src/popup/index.css` (lines 304–330)

- [ ] **Step 1: Replace `.toast-container` with `.dialog-container` and add new `.toast-container` copy**

  Find the existing block (lines 304–313):

  ```css
  .toast-container {
    position: fixed;
    inset-inline: 0;
    bottom: 0;
    animation: toast-in 200ms ease-out forwards;
  }

  .toast-container.toast-exit {
    animation: toast-out 200ms ease-in forwards;
  }
  ```

  Replace with:

  ```css
  .dialog-container,
  .toast-container {
    position: fixed;
    inset-inline: 0;
    bottom: 0;
    animation: toast-in 200ms ease-out forwards;
  }

  .dialog-container.toast-exit,
  .toast-container.toast-exit {
    animation: toast-out 200ms ease-in forwards;
  }
  ```

- [ ] **Step 2: Add `position: relative` to `.toast` and append timer CSS after `.toast-actions`**

  Add `position: relative;` to the existing `.toast` rule:

  ```css
  .toast {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--mrd-space-200);
    padding: var(--mrd-space-200);
    background: var(--mrd-color-background-base);
    font-size: var(--mrd-font-size-0);
    box-shadow: var(--mrd-elevation-1);
    position: relative;
  }
  ```

  Append after `.toast-actions { ... }`:

  ```css
  @keyframes timer-drain {
    from { width: 100%; }
    to   { width: 0%; }
  }

  .toast-timer {
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    border-radius: 0;
    animation: timer-drain var(--toast-duration, 3000ms) linear forwards;
  }

  .toast-timer.toast-timer-success { background: var(--mrd-color-success-base); }
  .toast-timer.toast-timer-error   { background: var(--mrd-color-error-base); }
  .toast-timer.toast-timer-info    { background: var(--mrd-color-primary-base); }
  ```

- [ ] **Step 3: Verify the popup still renders correctly**

  The dev server is already running (`yarn workspace inbox-zero-cats-for-gmail start`). Load the extension in the browser and open the popup. Confirm the existing confirm dialog still animates in/out from the bottom.

- [ ] **Step 4: Commit**

  ```bash
  git add apps/inbox-zero-cats-for-gmail/src/popup/index.css
  git commit -m "style(inbox-zero-cats): add dialog-container class and toast timer CSS"
  ```

---

## Task 3: Create `toast.ts` — `showToast` status notification

**Files:**

- Create: `apps/inbox-zero-cats-for-gmail/src/popup/components/toast.ts`

- [ ] **Step 1: Create `toast.ts`**

  ```ts
  import { html, render } from 'lit-html';

  type ToastType = 'success' | 'error' | 'info';

  const TYPE_DURATION: Record<ToastType, number | null> = {
    success: 3000,
    info: 3000,
    error: null, // no auto-dismiss
  };

  interface ToastOptions {
    message: string;
    type: ToastType;
    duration?: number;
  }

  export const showToast = ({
    message,
    type,
    duration,
  }: ToastOptions): void => {
    // Replace any existing status toast immediately
    const existing = document.querySelector('.toast-container');
    if (existing) existing.remove();

    const resolvedDuration =
      duration !== undefined ? duration : TYPE_DURATION[type];
    const shouldAutoDismiss = resolvedDuration !== null && resolvedDuration > 0;

    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);

    let timerId: ReturnType<typeof setTimeout> | undefined;

    const dismiss = () => {
      clearTimeout(timerId);
      container.classList.add('toast-exit');
      container.addEventListener('animationend', () => container.remove(), {
        once: true,
      });
    };

    if (shouldAutoDismiss) {
      container.style.setProperty('--toast-duration', `${resolvedDuration}ms`);
      timerId = setTimeout(dismiss, resolvedDuration);
    }

    render(
      html`
        <div class="toast">
          ${shouldAutoDismiss
            ? html`<div
                class="toast-timer toast-timer-${type}"
              ></div>`
            : null}
          <span>${message}</span>
          <mrd-button size="tiny" variant="text" @click=${dismiss}
            >✕</mrd-button
          >
        </div>
      `,
      container,
    );
  };
  ```

- [ ] **Step 2: Manually verify in the browser**

  Open the popup browser console and call:

  ```js
  // paste directly into browser console while popup is open
  import('./components/toast.js').then(m => {
    m.showToast({ message: 'Backup saved', type: 'success' });
  });
  ```

  Expected: toast slides up from bottom, green bar drains over 3 s, toast slides out.

  Then test error:

  ```js
  m.showToast({ message: 'Invalid backup file', type: 'error' });
  ```

  Expected: toast appears, no timer bar, persists until ✕ is clicked.

- [ ] **Step 3: Commit**

  ```bash
  git add apps/inbox-zero-cats-for-gmail/src/popup/components/toast.ts
  git commit -m "feat(inbox-zero-cats): add showToast status notification component"
  ```

---

## Task 4: Update barrel `index.ts` and update `settingsSection.ts` call sites

**Files:**

- Modify: `apps/inbox-zero-cats-for-gmail/src/popup/components/index.ts`
- Modify: `apps/inbox-zero-cats-for-gmail/src/popup/sections/settingsSection.ts`

- [ ] **Step 1: Update `components/index.ts` to export both new components**

  Replace the file content with:

  ```ts
  export * from './confirmDialog';
  export * from './imageList';
  export * from './itemList';
  export * from './toast';
  export * from './topBar';
  ```

- [ ] **Step 2: Update `settingsSection.ts` — fix the import line**

  Change:

  ```ts
  import { showConfirmToast } from '../components/confirmToast';
  ```

  To:

  ```ts
  import { showConfirmDialog, showToast } from '../components';
  ```

- [ ] **Step 3: Update `settingsSection.ts` — `handleExport`**

  In `handleExport`, after `a.click()` and `setTimeout(() => URL.revokeObjectURL(url), 100)`, add:

  ```ts
  showToast({ message: 'Backup saved', type: 'success' });
  ```

- [ ] **Step 4: Update `settingsSection.ts` — `handleImport` silent bail paths**

  Replace both silent `return;` statements (invalid JSON and missing required fields) with:

  ```ts
  showToast({ message: 'Invalid backup file', type: 'error' });
  return;
  ```

- [ ] **Step 5: Update `settingsSection.ts` — add success toast after import is applied**

  Inside the `showConfirmDialog` callback (after `renderContent()`), add:

  ```ts
  showToast({ message: 'Settings imported', type: 'success' });
  ```

- [ ] **Step 6: Update `settingsSection.ts` — rename all remaining `showConfirmToast` calls**

  There are three total `showConfirmToast` calls in the file. Steps 4–5 already handled the one inside `handleImport`. The two remaining inline calls are in the template — rename both to `showConfirmDialog` and add success toasts:

  For reset images — the callback becomes:

  ```ts
  async () => {
    await resetImages();
    renderContent();
    showToast({ message: 'Images reset to defaults', type: 'success' });
  }
  ```

  For reset titles:

  ```ts
  async () => {
    await resetTitles();
    renderContent();
    showToast({ message: 'Titles reset to defaults', type: 'success' });
  }
  ```

  Both calls are renamed: `showConfirmToast(` → `showConfirmDialog(`.

- [ ] **Step 7: Build and check for TypeScript errors**

  ```bash
  yarn workspace inbox-zero-cats-for-gmail bundle 2>&1 | grep -E "error|Error"
  ```

  Expected: no TypeScript errors.

- [ ] **Step 8: Manually verify all six toast call sites in the browser**

  Load the extension, open Settings tab, and test each action:

  | Action | Expected toast |
  | --- | --- |
  | Click Export | Green "Backup saved" toast, auto-dismisses |
  | Import a valid `.json` file, confirm | Green "Settings imported" toast |
  | Import an invalid file | Red "Invalid backup file" toast, persists |
  | Reset images, confirm | Green "Images reset to defaults" toast |
  | Reset titles, confirm | Green "Titles reset to defaults" toast |

- [ ] **Step 9: Commit**

  ```bash
  git add apps/inbox-zero-cats-for-gmail/src/popup/components/index.ts \
          apps/inbox-zero-cats-for-gmail/src/popup/sections/settingsSection.ts
  git commit -m "feat(inbox-zero-cats): wire showToast and showConfirmDialog into settings section"
  ```

---

## Task 5: Lint and final check

- [ ] **Step 1: Run lint**

  ```bash
  yarn lerna run lint --scope=inbox-zero-cats-for-gmail
  yarn lerna run lint:css --scope=inbox-zero-cats-for-gmail
  ```

  Expected: no errors.

- [ ] **Step 2: Run extension lint**

  ```bash
  yarn workspace inbox-zero-cats-for-gmail lint:extension
  ```

  Expected: no errors.

- [ ] **Step 3: Commit any lint fixes if needed, then push**

  ```bash
  git push
  ```
