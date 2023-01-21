import type { Theme } from '@mordech/tokens';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../button';

import { focusableBase } from '../../styles/focusable.styles';

import { toggleThemeBase, toggleThemeIcon } from './toggle-theme.styles';

@customElement('mrd-toggle-theme')
export class ToggleTheme extends LitElement {
  @property({ type: String }) theme: Theme = 'light';
  @property({ type: Boolean }) saveToStorage = true;
  @property({ type: String }) storageKey = 'theme';

  static override styles = [focusableBase, toggleThemeBase, toggleThemeIcon];

  override render() {
    return html`
      <mrd-button
        exportparts="button"
        aria-label="Toggle to ${this.theme === 'light'
          ? 'dark'
          : 'light'} theme"
        class="btn"
        @click=${this.toggleTheme}
      >
        <svg
          class=${this.theme}
          part="icon"
          alt="toggle theme icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="mrd-element"
            id="mrd-sun"
            d="M12 23.3L8.64995 20H3.99995V15.35L0.699951 12L3.99995 8.65001V4.00001H8.64995L12 0.700012L15.35 4.00001H20V8.65001L23.2999 12L20 15.35V20H15.35L12 23.3ZM12 19C15.8659 19 19 15.866 19 12V12C19 8.13402 15.8659 5.00001 12 5.00001V5.00001C8.13396 5.00001 4.99995 8.13402 4.99995 12V12C4.99995 15.866 8.13396 19 12 19V19Z"
            fill="currentColor"
          />
          <mask id="circleClip">
            <circle
              cx="12"
              cy="12"
              r="5"
              fill="white"
              mask="url(#circleClip)"
            />
            <circle id="mrd-mask" cx="8" cy="11" r="4" fill="black" />
          </mask>
          <circle
            class="mrd-element"
            cx="12"
            cy="12"
            r="5"
            mask="url(#circleClip)"
            fill="currentColor"
          />
        </svg>
      </mrd-button>
    `;
  }

  override connectedCallback() {
    super.connectedCallback();

    this.addEventListener('toggle-theme', this.store);

    this.initTheme();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('toggle-theme', this.store);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', this.theme);
    this.dispatchEvent(
      new CustomEvent('toggle-theme', {
        detail: { theme: this.theme },
        bubbles: true,
        composed: true,
      })
    );
    return this.theme;
  }

  initTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      this.theme = storedTheme as Theme;
      document.body.setAttribute('data-theme', storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      if (!document.body.getAttribute('data-theme')) return;
      this.theme = 'dark';
    }
    return this.theme;
  }

  store() {
    if (!this.saveToStorage) return;
    localStorage.setItem('theme', this.theme);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mrd-toggle-theme': ToggleTheme;
  }
}
