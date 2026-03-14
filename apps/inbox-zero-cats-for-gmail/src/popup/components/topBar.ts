import { html } from 'lit-html';
import browser from 'webextension-polyfill';

import { brandFamilyIcon } from '../assets/brandFamilyIcon';
import { photoLibraryIcon } from '../assets/photoLibraryIcon';
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
        ${photoLibraryIcon} Photos
      </mrd-button>
      <mrd-button
        size="tiny"
        variant=${activeTab === 'titles' ? 'fill' : 'text'}
        @click=${() => onTabChange('titles')}
      >
        ${brandFamilyIcon} Titles
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
