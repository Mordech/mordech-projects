import { html } from 'lit-html';
import browser from 'webextension-polyfill';

import { Data } from '../@types';
import { toggleThemeIcon } from '../assets/toggleThemeIcon';
import { renderContent } from '../index';

export const toggleThemeButton = (theme: Data['theme']) => {
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
