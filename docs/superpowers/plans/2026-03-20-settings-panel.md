# Settings Panel — Content Packs & Data Backup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the Settings tab of the `inbox-zero-cats-for-gmail` extension with a Content Pack selector (switch between built-in image pools) and Data & Backup controls (export/import settings as JSON, reset images or titles independently).

**Architecture:** Pack data lives in `src/data/` as plain URL arrays; a `getPack()` helper maps a `PackKey` to the right array. `resetImages()` and `resetTitles()` become pure storage-setters. All re-rendering is the caller's responsibility. The Settings section is a full rewrite accepting `activePack` as a parameter.

**Tech Stack:** TypeScript, Lit HTML (lit-html), `webextension-polyfill`, `@mordech/web-components` (mrd-button). No test suite exists for this app — verification is TypeScript compilation + manual browser testing.

---

## File Map

| File | Status | Responsibility |
|------|--------|----------------|
| `src/data/defaultDogImages.ts` | **Create** | Dog pack URL array |
| `src/data/defaultNatureImages.ts` | **Create** | Nature pack URL array |
| `src/data/defaultArtImages.ts` | **Create** | Art pack URL array |
| `src/data/index.ts` | **Modify** | Export `PackKey` type, `getPack()` helper, new pack arrays |
| `src/popup/utils/resetImages.ts` | **Modify** | Read `activePack`; call `getPack()`; remove internal `renderContent()` |
| `src/popup/utils/resetTitles.ts` | **Modify** | Also reset `catSubtitle`; remove internal `renderContent()` |
| `src/popup/components/confirmToast.ts` | **Modify** | Add `message`, `confirmLabel`, `confirmColor` optional params |
| `src/popup/sections/settingsSection.ts` | **Rewrite** | Content Packs + Data & Backup + About sections |
| `src/popup/index.ts` | **Modify** | Read `activePack`; fix bootstrap paths; pass pack to `settingsSection` |

---

## Task 1: Add pack data files and data layer

**Files:**
- Create: `apps/inbox-zero-cats-for-gmail/src/data/defaultDogImages.ts`
- Create: `apps/inbox-zero-cats-for-gmail/src/data/defaultNatureImages.ts`
- Create: `apps/inbox-zero-cats-for-gmail/src/data/defaultArtImages.ts`
- Modify: `apps/inbox-zero-cats-for-gmail/src/data/index.ts`

- [ ] **Step 1: Create `defaultDogImages.ts`**

  Source ~20 dog photos from Unsplash following the exact same URL format as `defaultCatImages.ts`:
  `https://images.unsplash.com/photo-<ID>?fit=crop&w=320&h=320&q=100&mrd-random`
  Mark the first entry with `&mrd-spotlight` instead of `&mrd-random`.

  ```ts
  export const defaultDogImages = [
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?fit=crop&w=320&h=320&q=100&mrd-spotlight',
    'https://images.unsplash.com/photo-1534361960057-19f4434a9516?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1611003228941-98852ba62227?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1568572933382-74d440642117?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1560807707-8cc77767d783?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1560807707-8cc77767d783?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?fit=crop&w=320&h=320&q=100&mrd-random',
  ];
  ```

  > Note: verify images load correctly by opening a few URLs in a browser tab. Swap any broken IDs with fresh Unsplash dog photos.

- [ ] **Step 2: Create `defaultNatureImages.ts`**

  ```ts
  export const defaultNatureImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?fit=crop&w=320&h=320&q=100&mrd-spotlight',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1501854140801-50d01698950b?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1511497584788-876760111969?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1439853949212-36089c01f81e?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?fit=crop&w=320&h=320&q=100&mrd-random',
  ];
  ```

- [ ] **Step 3: Create `defaultArtImages.ts`**

  ```ts
  export const defaultArtImages = [
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?fit=crop&w=320&h=320&q=100&mrd-spotlight',
    'https://images.unsplash.com/photo-1541961017774-22349e4a1262?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1580136579312-94651dfd596d?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1561214115-f2f134cc4912?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1549490349-8643362247b5?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1518998053901-5348d3961a04?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1544967082-d9d25d867d66?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1561059488-916d4944f928?fit=crop&w=320&h=320&q=100&mrd-random',
    'https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?fit=crop&w=320&h=320&q=100&mrd-random',
  ];
  ```

- [ ] **Step 4: Update `src/data/index.ts`**

  Replace the entire file:

  ```ts
  export { defaultCatImages } from './defaultCatImages';
  export { defaultCatSubtitle } from './defaultCatSubtitle';
  export { defaultCatTitles } from './defaultCatTitles';
  export { defaultDogImages } from './defaultDogImages';
  export { defaultNatureImages } from './defaultNatureImages';
  export { defaultArtImages } from './defaultArtImages';

  export type PackKey = 'cats' | 'dogs' | 'nature' | 'art';

  import { defaultCatImages } from './defaultCatImages';
  import { defaultDogImages } from './defaultDogImages';
  import { defaultNatureImages } from './defaultNatureImages';
  import { defaultArtImages } from './defaultArtImages';

  export const getPack = (key: PackKey): string[] => {
    switch (key) {
      case 'dogs':
        return defaultDogImages;
      case 'nature':
        return defaultNatureImages;
      case 'art':
        return defaultArtImages;
      case 'cats':
      default:
        return defaultCatImages;
    }
  };
  ```

- [ ] **Step 5: Verify TypeScript compiles**

  ```bash
  yarn workspace inbox-zero-cats-for-gmail build 2>&1 | head -40
  ```

  Expected: no TypeScript errors related to the data files.

- [ ] **Step 6: Commit**

  ```bash
  git add apps/inbox-zero-cats-for-gmail/src/data/
  git commit -m "feat(inbox-zero-cats): add dog, nature, and art content packs with getPack helper"
  ```

---

## Task 2: Refactor `resetImages` and `resetTitles` to pure storage-setters

**Files:**
- Modify: `apps/inbox-zero-cats-for-gmail/src/popup/utils/resetImages.ts`
- Modify: `apps/inbox-zero-cats-for-gmail/src/popup/utils/resetTitles.ts`
- Modify: `apps/inbox-zero-cats-for-gmail/src/popup/index.ts`

- [ ] **Step 1: Rewrite `resetImages.ts`**

  ```ts
  import browser from 'webextension-polyfill';

  import { getPack, PackKey } from '../../data';

  export const resetImages = async (): Promise<void> => {
    const { activePack } = await browser.storage.local
      .get('activePack')
      .catch(() => ({ activePack: undefined }));

    const pack = getPack((activePack as PackKey) ?? 'cats');

    await browser.storage.local
      .set({ catImageUrls: pack })
      .catch((error) => { error; });
  };
  ```

  Note: no `renderContent()` call — the caller is responsible for re-rendering.

- [ ] **Step 2: Rewrite `resetTitles.ts`**

  ```ts
  import browser from 'webextension-polyfill';

  import { defaultCatSubtitle, defaultCatTitles } from '../../data';

  export const resetTitles = async (): Promise<void> => {
    await browser.storage.local
      .set({ catTitles: defaultCatTitles, catSubtitle: defaultCatSubtitle })
      .catch((error) => { error; });
  };
  ```

  Note: now resets both `catTitles` and `catSubtitle`. No `renderContent()` call.

- [ ] **Step 3: Fix bootstrap paths in `src/popup/index.ts`**

  The two early-return guards relied on the utils calling `renderContent()` internally. Now that they don't, the bootstrap paths must call `renderContent()` themselves.

  Find these two blocks in `renderContent()`:

  ```ts
  // BEFORE (around lines 45-57)
  if (!catTitles) {
    await resetTitles();
    return;
  }
  // ...
  if (!catImageUrls) {
    await resetImages();
    return;
  }
  ```

  Change to:

  ```ts
  // AFTER
  if (!catTitles) {
    await resetTitles();
    renderContent();
    return;
  }
  // ...
  if (!catImageUrls) {
    await resetImages();
    renderContent();
    return;
  }
  ```

  This is safe: by the time `renderContent()` is called again, the storage key has been written, so the guard is not re-triggered.

- [ ] **Step 4: Verify TypeScript compiles**

  ```bash
  yarn workspace inbox-zero-cats-for-gmail build 2>&1 | head -40
  ```

  Expected: no errors.

- [ ] **Step 5: Manual smoke test**

  Load the extension in Chrome (or Firefox). Open the popup. Verify the popup still renders correctly — photos tab shows images, titles tab works, settings tab shows the reset button.

- [ ] **Step 6: Commit**

  ```bash
  git add apps/inbox-zero-cats-for-gmail/src/popup/utils/resetImages.ts \
           apps/inbox-zero-cats-for-gmail/src/popup/utils/resetTitles.ts \
           apps/inbox-zero-cats-for-gmail/src/popup/index.ts
  git commit -m "refactor(inbox-zero-cats): make resetImages and resetTitles pure storage-setters"
  ```

---

## Task 3: Update `confirmToast` to accept action-specific message, label, and color

**Files:**
- Modify: `apps/inbox-zero-cats-for-gmail/src/popup/components/confirmToast.ts`

- [ ] **Step 1: Rewrite `confirmToast.ts`**

  ```ts
  import { html, render } from 'lit-html';

  interface ConfirmToastOptions {
    message?: string;
    confirmLabel?: string;
    confirmColor?: string;
  }

  export const showConfirmToast = (
    onConfirm: () => void,
    {
      message = 'Reset all settings? This cannot be undone.',
      confirmLabel = 'Reset',
      confirmColor = 'error',
    }: ConfirmToastOptions = {},
  ) => {
    const existing = document.querySelector('.toast-container');
    if (existing) return;

    const container = document.createElement('div');
    container.className = 'toast-container';
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

- [ ] **Step 2: Verify existing callers still compile**

  The existing caller in `settingsSection.ts` calls `showConfirmToast(callback)` with no second argument — this still works because the options object defaults to `{}`.

  ```bash
  yarn workspace inbox-zero-cats-for-gmail build 2>&1 | head -40
  ```

  Expected: no errors.

- [ ] **Step 3: Commit**

  ```bash
  git add apps/inbox-zero-cats-for-gmail/src/popup/components/confirmToast.ts
  git commit -m "feat(inbox-zero-cats): make confirmToast message, label, and color configurable"
  ```

---

## Task 4: Rewrite `settingsSection` with Content Packs + Data & Backup

**Files:**
- Modify: `apps/inbox-zero-cats-for-gmail/src/popup/sections/settingsSection.ts`

- [ ] **Step 1: Rewrite `settingsSection.ts`**

  ```ts
  import { html } from 'lit-html';
  import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
  import browser from 'webextension-polyfill';

  import { defaultCatSubtitle, defaultCatTitles, PackKey } from '../../data';
  import logo from '../assets/logo.svg';
  import { showConfirmToast } from '../components/confirmToast';
  import { renderContent } from '../index';
  import { resetImages, resetTitles } from '../utils/index';

  const PACKS: { key: PackKey; label: string; emoji: string }[] = [
    { key: 'cats', label: 'Cats', emoji: '🐱' },
    { key: 'dogs', label: 'Dogs', emoji: '🐶' },
    { key: 'nature', label: 'Nature', emoji: '🌿' },
    { key: 'art', label: 'Art', emoji: '🎨' },
  ];

  const selectPack = async (key: PackKey) => {
    await browser.storage.local.set({ activePack: key });
    renderContent();
  };

  const handleExport = async () => {
    const data = await browser.storage.local.get([
      'catImageUrls',
      'catTitles',
      'catSubtitle',
      'activePack',
    ]);

    const payload = JSON.stringify(
      {
        version: 1,
        catImageUrls: data.catImageUrls ?? [],
        catTitles: data.catTitles ?? [],
        catSubtitle: data.catSubtitle ?? defaultCatSubtitle,
        activePack: data.activePack ?? 'cats',
      },
      null,
      2,
    );

    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inbox-zero-cats-backup.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        let parsed: unknown;
        try {
          parsed = JSON.parse(reader.result as string);
        } catch {
          return; // silently bail on invalid JSON
        }

        if (
          typeof parsed !== 'object' ||
          parsed === null ||
          !Array.isArray((parsed as Record<string, unknown>).catImageUrls) ||
          !Array.isArray((parsed as Record<string, unknown>).catTitles)
        ) {
          return; // silently bail on missing required fields
        }

        const data = parsed as Record<string, unknown>;

        showConfirmToast(
          async () => {
            await browser.storage.local.set({
              catImageUrls: data.catImageUrls,
              catTitles: data.catTitles,
              catSubtitle:
                typeof data.catSubtitle === 'string'
                  ? data.catSubtitle
                  : defaultCatSubtitle,
              activePack:
                ['cats', 'dogs', 'nature', 'art'].includes(
                  data.activePack as string,
                )
                  ? data.activePack
                  : 'cats',
            });
            renderContent();
          },
          {
            message: 'Import will replace all your current settings.',
            confirmLabel: 'Import',
            confirmColor: 'primary',
          },
        );
      };

      reader.readAsText(file);
    };

    input.click();
  };

  export const settingsSection = (activePack: PackKey) => html`
    <div class="content-container">
      <!-- Content Packs -->
      <div class="settings-section">
        <p class="settings-label">Content Pack</p>
        <div class="pack-group">
          ${PACKS.map(
            ({ key, label, emoji }) => html`
              <mrd-button
                size="tiny"
                variant=${activePack === key ? 'fill' : 'outline'}
                @click=${() => selectPack(key)}
              >
                ${emoji} ${label}
              </mrd-button>
            `,
          )}
        </div>
        <p class="settings-hint">
          Sets the default image pool. Your uploads are always included.
        </p>
      </div>

      <!-- Data & Backup -->
      <div class="settings-section">
        <p class="settings-label">Data &amp; Backup</p>
        <div class="button-row">
          <mrd-button
            size="tiny"
            variant="outline"
            class="full-width"
            @click=${handleExport}
          >
            Export
          </mrd-button>
          <mrd-button
            size="tiny"
            variant="outline"
            class="full-width"
            @click=${handleImport}
          >
            Import
          </mrd-button>
        </div>
        <div class="button-row">
          <mrd-button
            size="tiny"
            color="error"
            variant="text"
            class="full-width"
            @click=${() =>
              showConfirmToast(
                async () => {
                  await resetImages();
                  renderContent();
                },
                { message: 'Reset images to defaults? This cannot be undone.' },
              )}
          >
            Reset images
          </mrd-button>
          <mrd-button
            size="tiny"
            color="error"
            variant="text"
            class="full-width"
            @click=${() =>
              showConfirmToast(
                async () => {
                  await resetTitles();
                  renderContent();
                },
                { message: 'Reset titles to defaults? This cannot be undone.' },
              )}
          >
            Reset titles
          </mrd-button>
        </div>
      </div>

      <!-- About -->
      <div class="lockup">
        ${unsafeSVG(logo)}
        <div class="lockup-content">
          <p>
            Made with 😻 by
            <a
              href="https://elad.mizrahi.cc"
              target="_blank"
              aria-label="Go to Elad Mizrahi's portfolio"
              >Elad Mizrahi</a
            >
          </p>
        </div>
      </div>
    </div>
  `;
  ```

- [ ] **Step 2: Add CSS for new settings layout to `src/popup/index.css`**

  Add these rules to the existing stylesheet (do not remove existing rules):

  ```css
  .settings-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .settings-label {
    margin: 0;
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    opacity: 0.5;
  }

  .settings-hint {
    margin: 0;
    font-size: 0.6875rem;
    opacity: 0.5;
  }

  .pack-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
  }

  .button-row {
    display: flex;
    gap: 0.375rem;
  }
  ```

- [ ] **Step 3: Verify TypeScript compiles**

  ```bash
  yarn workspace inbox-zero-cats-for-gmail build 2>&1 | head -40
  ```

  Expected: no errors.

- [ ] **Step 4: Commit**

  ```bash
  git add apps/inbox-zero-cats-for-gmail/src/popup/sections/settingsSection.ts \
           apps/inbox-zero-cats-for-gmail/src/popup/index.css
  git commit -m "feat(inbox-zero-cats): add content packs and data backup to settings panel"
  ```

---

## Task 5: Wire `activePack` into `renderContent` and `settingsSection`

**Files:**
- Modify: `apps/inbox-zero-cats-for-gmail/src/popup/index.ts`

- [ ] **Step 1: Update `renderContent` in `src/popup/index.ts`**

  Add `activePack` to the storage reads and pass it to `settingsSection`. Full updated file:

  ```ts
  import { html, render } from 'lit-html';
  import browser from 'webextension-polyfill';

  import '@mordech/web-components';

  import { PackKey } from '../data';
  import { topBar } from './components';
  import {
    customImageSection,
    customTitleSection,
    settingsSection,
  } from './sections';
  import { resetImages, resetTitles } from './utils';

  let activeTab: 'photos' | 'titles' | 'settings' = 'photos';
  let titlesSubTab: 'main' | 'subtitle' = 'main';
  let maxBodyHeight = 0;

  const setActiveTab = (tab: 'photos' | 'titles' | 'settings') => {
    activeTab = tab;
    renderContent();
  };

  export const setTitlesSubTab = (sub: 'main' | 'subtitle') => {
    titlesSubTab = sub;
    renderContent();
  };

  export const renderContent = async () => {
    const appElem = document.querySelector<HTMLElement>('#app');
    if (!appElem) return;

    const { theme } = await browser.storage.local
      .get('theme')
      .then((theme) => theme)
      .catch((error) => error);

    if (theme) {
      document.body.setAttribute('data-theme', theme);
    }

    const { catTitles } = await browser.storage.local
      .get('catTitles')
      .catch((error) => error);

    if (!catTitles) {
      await resetTitles();
      renderContent();
      return;
    }

    const { catImageUrls } = await browser.storage.local
      .get('catImageUrls')
      .catch((error) => error);

    if (!catImageUrls) {
      await resetImages();
      renderContent();
      return;
    }

    const { catSubtitle } = await browser.storage.local
      .get('catSubtitle')
      .catch(() => ({ catSubtitle: undefined }));

    const { activePack } = await browser.storage.local
      .get('activePack')
      .catch(() => ({ activePack: undefined }));

    const resolvedPack: PackKey =
      (['cats', 'dogs', 'nature', 'art'] as PackKey[]).includes(
        activePack as PackKey,
      )
        ? (activePack as PackKey)
        : 'cats';

    const content =
      activeTab === 'photos'
        ? customImageSection(catImageUrls)
        : activeTab === 'titles'
          ? customTitleSection(catTitles, titlesSubTab, catSubtitle)
          : settingsSection(resolvedPack);

    render(html`${topBar(activeTab, setActiveTab, theme)}${content}`, appElem);

    requestAnimationFrame(() => {
      const currentHeight = document.body.scrollHeight;
      if (currentHeight > maxBodyHeight) {
        maxBodyHeight = currentHeight;
      }
      document.body.style.minHeight = `${maxBodyHeight}px`;
    });
  };

  renderContent();
  ```

- [ ] **Step 2: Verify TypeScript compiles cleanly**

  ```bash
  yarn workspace inbox-zero-cats-for-gmail build 2>&1 | head -40
  ```

  Expected: build succeeds with no TypeScript errors.

- [ ] **Step 3: Full manual test**

  Load the unpacked extension in Chrome:
  1. Open popup → navigate to Settings tab
  2. Verify Content Packs section shows 4 pills (Cats active by default)
  3. Click **Dogs** → pill highlights, no error in console
  4. Go to Photos tab → image grid still shows (unchanged because pack switching doesn't modify `catImageUrls`)
  5. Go back to Settings → verify Dogs is still highlighted (persisted to storage)
  6. Click **Reset images** → confirm toast appears with "Reset images to defaults?" message → confirm → images restore to dog defaults
  7. Click **Export** → `inbox-zero-cats-backup.json` downloads; open it and verify the JSON has all 4 keys
  8. Click **Import** → select the exported file → confirm toast appears with "Import" button (not red) → confirm → popup re-renders
  9. Click **Reset titles** → toast appears with correct message → confirm → titles restore to defaults (including subtitle)
  10. Close and reopen popup → active pack is remembered

- [ ] **Step 4: Commit**

  ```bash
  git add apps/inbox-zero-cats-for-gmail/src/popup/index.ts
  git commit -m "feat(inbox-zero-cats): wire activePack into renderContent and settings panel"
  ```

---

## Done

All tasks complete. The Settings tab now has:
- **Content Packs** — pill selector for Cats / Dogs / Nature / Art
- **Data & Backup** — Export JSON, Import JSON (with validation), Reset images, Reset titles (granular, each with a tailored confirmation toast)
- **About** — existing attribution, unchanged
