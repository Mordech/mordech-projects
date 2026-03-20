import { html } from 'lit-html';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import browser from 'webextension-polyfill';

import { defaultCatSubtitle, getPack, PackKey } from '../../data';
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
  const { catImageUrls } = await browser.storage.local
    .get('catImageUrls')
    .catch(() => ({ catImageUrls: [] }));

  const uploads = ((catImageUrls as string[]) ?? []).filter((url) =>
    url.startsWith('data:'),
  );

  await browser.storage.local.set({
    activePack: key,
    catImageUrls: [...getPack(key), ...uploads],
  });
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
  setTimeout(() => URL.revokeObjectURL(url), 100);
};

const handleImport = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  document.body.appendChild(input);

  // Override the CSS rule that hides file inputs
  input.style.position = 'fixed';
  input.style.top = '-100px';
  input.style.width = '1px';
  input.style.height = '1px';
  input.style.opacity = '0';

  input.onchange = () => {
    document.body.removeChild(input);
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
            activePack: (['cats', 'dogs', 'nature', 'art'] as PackKey[]).includes(
              data.activePack as PackKey,
            )
              ? (data.activePack as PackKey)
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
      <p class="settings-hint">Your uploads are always included.</p>
    </div>

    <!-- Data & Backup -->
    <div class="settings-section">
      <p class="settings-label">Data &amp; Backup</p>
      <div class="button-row">
        <mrd-button
          size="tiny"
          variant="tonal"
          class="full-width"
          @click=${handleExport}
        >
          Export
        </mrd-button>
        <mrd-button
          size="tiny"
          variant="tonal"
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
