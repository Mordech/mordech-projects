import type { Theme } from '@mordech/tokens';
import { html } from 'lit-html';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import browser from 'webextension-polyfill';

import '@mordech/web-components';

import brandFamilySvg from '../assets/brandFamilyIcon.svg';
import photoLibrarySvg from '../assets/photoLibraryIcon.svg';
import settingsSvg from '../assets/settingsIcon.svg';
import { renderContent } from '../index';

export const topBar = (
  activeTab: 'photos' | 'titles' | 'settings',
  // eslint-disable-next-line no-unused-vars
  onTabChange: (tab: 'photos' | 'titles' | 'settings') => void,
  theme?: Theme,
) => html`
  <div class="top-bar">
    <div class="tab-group">
      <mrd-button
        size="tiny"
        variant=${activeTab === 'photos' ? 'fill' : 'text'}
        @click=${() => onTabChange('photos')}
      >
        ${unsafeSVG(photoLibrarySvg)} Photos
      </mrd-button>
      <mrd-button
        size="tiny"
        variant=${activeTab === 'titles' ? 'fill' : 'text'}
        @click=${() => onTabChange('titles')}
      >
        ${unsafeSVG(brandFamilySvg)} Titles
      </mrd-button>
      <mrd-button
        size="tiny"
        variant=${activeTab === 'settings' ? 'fill' : 'text'}
        @click=${() => onTabChange('settings')}
      >
        ${unsafeSVG(settingsSvg)} Settings
      </mrd-button>
    </div>
    <mrd-toggle-theme
      size="tiny"
      .theme=${theme ?? 'light'}
      .saveToStorage=${false}
      @toggle-theme=${(event: CustomEvent) => {
        browser.storage.local.set({ theme: event.detail.theme });
        renderContent();
      }}
    ></mrd-toggle-theme>
  </div>
`;
