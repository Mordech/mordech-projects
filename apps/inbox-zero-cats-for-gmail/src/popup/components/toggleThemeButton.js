import { html } from 'lit-html';
import browser from 'webextension-polyfill';

import { toggleThemeIcon } from '../assets/toggleThemeIcon.js';
import { renderContent } from '../index.js';

/**
 * @param {import('../@types/index.js').Data['theme']} theme
 */
export const toggleThemeButton = (theme) => {
  /**
   * @type {string}
   */
  const dataTheme =
    document.body.attributes.getNamedItem('data-theme')?.value || 'light';
  const currentTheme = theme || dataTheme;
  return html`<button
    class="icon toggle-theme"
    aria-label="Toggle to ${currentTheme === 'dark' ? 'light' : 'dark'} mode"
    @click=${() => {
      browser.storage.local
        .set({
          theme: currentTheme === 'dark' ? 'light' : 'dark',
        })
        .then(() => {
          renderContent();
        });
    }}
  >
    ${toggleThemeIcon}
  </button>`;
};
