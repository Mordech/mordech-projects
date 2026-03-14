import { html } from 'lit-html';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import browser from 'webextension-polyfill';

import brandFamilySvg from '../assets/brandFamilyIcon.svg';
import photoLibrarySvg from '../assets/photoLibraryIcon.svg';
import { renderContent } from '../index';

export const topBar = (
  activeTab: 'photos' | 'titles',
  // eslint-disable-next-line no-unused-vars
  onTabChange: (tab: 'photos' | 'titles') => void,
  theme?: string,
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
    </div>
    <mrd-toggle-theme
      size="tiny"
      .theme=${theme}
      .saveToStorage=${false}
      @toggle-theme=${(event: CustomEvent) => {
        browser.storage.local.set({ theme: event.detail.theme });
        renderContent();
      }}
    ></mrd-toggle-theme>
  </div>
`;
