import browser from 'webextension-polyfill';

import { defaultCatSubtitle } from '../data';
import { getCatImage } from '../utils/setCatImage';
import { getCatTitle } from '../utils/setCatTitle';

const html = String.raw;

export const MOUNTED_INDICATION = 'ibxzc-mounted';

export const createCatEmptyState = async (emptyState: Element) => {
  if (emptyState.textContent?.includes(MOUNTED_INDICATION)) return;

  const catImage = await getCatImage();
  const catTitle = await getCatTitle();
  const subtitle = await browser.storage.local
    .get('catSubtitle')
    .then(({ catSubtitle }) => catSubtitle || defaultCatSubtitle)
    .catch(() => defaultCatSubtitle);

  emptyState.innerHTML = html`
    <div class="cat-container">
      <span
        aria-hidden="true"
        style="visibility: hidden; position: absolute; top: -99999px; left: -99999px;"
      >
        ${MOUNTED_INDICATION}
      </span>
      <h1 id="cat-title" class="cat-title TB" dir="auto">${catTitle}</h1>
      <div id="cat-image-container" class="cat-image-container" role="img">
        <img class="cat-backdrop" id="cat-backdrop" src=${catImage} />
        <img class="cat-image" id="cat-image" src=${catImage} loading="eager" />
      </div>
      <span class="cat-text l6">${subtitle}</span>
    </div>
  `;
};
