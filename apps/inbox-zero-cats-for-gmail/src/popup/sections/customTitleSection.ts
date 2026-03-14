import { html } from 'lit-html';

import { defaultCatSubtitle } from '../../data/index';
import { defaultCatTitles } from '../../data/index';
import { Data } from '../@types/index';
import { itemList } from '../components/index';
import { setTitlesSubTab } from '../index';
import { getAndAddValue, saveSubtitle } from '../utils/index';

const addTitle = async () => {
  const titleField = document.querySelector<HTMLElement & { value: string }>(
    '#custom-title',
  );
  if (titleField && titleField.value !== '') {
    getAndAddValue('catTitles', titleField.value);
    titleField.value = '';
  }
};

const addTitleKeyup = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    addTitle();
  }
};

const handleSaveSubtitle = () => {
  const field = document.querySelector<HTMLElement & { value: string }>(
    '#cat-subtitle',
  );
  if (field) {
    saveSubtitle(field.value);
  }
};

const mainSubTab = (catTitles: Data['catTitles']) => html`
  <div class="title-list">
    <ul>
      ${itemList('catTitles', catTitles || defaultCatTitles)}
    </ul>
  </div>
  <div class="input-text-row">
    <mrd-text-field
      size="tiny"
      id="custom-title"
      placeholder="Add your titles"
      @keyup=${addTitleKeyup}
    ></mrd-text-field>
    <mrd-button size="tiny" variant="fill" @click=${addTitle}>Add</mrd-button>
  </div>
`;

const subtitleSubTab = (catSubtitle?: string) => html`
  <mrd-text-field
    size="tiny"
    id="cat-subtitle"
    placeholder="Enter a subtitle"
    .value=${catSubtitle || defaultCatSubtitle}
  ></mrd-text-field>
  <mrd-button
    size="tiny"
    variant="fill"
    class="full-width"
    @click=${handleSaveSubtitle}
  >
    Save
  </mrd-button>
`;

export const customTitleSection = (
  catTitles: Data['catTitles'],
  subTab: 'main' | 'subtitle',
  catSubtitle?: string,
) => html`
  <div class="content-container">
    <div class="sub-tab-group">
      <mrd-button
        size="tiny"
        variant=${subTab === 'main' ? 'fill' : 'text'}
        class="sub-tab"
        @click=${() => setTitlesSubTab('main')}
      >
        Main
      </mrd-button>
      <mrd-button
        size="tiny"
        variant=${subTab === 'subtitle' ? 'fill' : 'text'}
        class="sub-tab"
        @click=${() => setTitlesSubTab('subtitle')}
      >
        Subtitle
      </mrd-button>
    </div>
    ${subTab === 'main' ? mainSubTab(catTitles) : subtitleSubTab(catSubtitle)}
  </div>
`;
