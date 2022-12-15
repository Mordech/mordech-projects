import { html } from 'lit-html';

import { defaultCatTitles } from '../../data/index';
import { Data } from '../@types/index';
import { itemList } from '../components/index';
import { summary } from '../components/summary';
import { getAndAddValue } from '../utils/index';

const addTitle = async () => {
  const title = document.getElementById('custom-title');
  if (title instanceof HTMLInputElement && title.value !== '') {
    getAndAddValue('catTitles', title.value);
    title.value = '';
  }
};

const addTitleKeyupCallback = () => (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    addTitle();
  }
};

export const customTitleSection = (
  catTitles: Data['catTitles']
) => html`<details open>
  ${summary('Customize titles')}
  <div class="custom-category-list">
    <div class="custom-category-list content">
      <div class="input-text-row">
        <input
          dir="auto"
          type="text"
          id="custom-title"
          placeholder="Add your titles"
          name="custom-title"
          @keyup=${addTitleKeyupCallback()}
        />
        <button class="primary" @click=${addTitle}>Add</button>
      </div>
      <ul>
        ${itemList('catTitles', catTitles || defaultCatTitles)}
      </ul>
    </div>
  </div>
</details>`;
