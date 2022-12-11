import { html } from 'lit-html';

import { deleteForeverIcon } from '../assets/deleteForeverIcon.js';
import { removeItem } from '../utils/removeItem.js';

/**
 * @param {import('../@types/index.js').DataKeys} category
 * @param {string[]} items
 */
export const imageList = (category, items) => {
  const filteredItems = items.filter((image) => !image.endsWith('mrd-random'));
  return filteredItems.map((item, index) => {
    const imageNumber = filteredItems.length - index - 1;
    const isRandom = item.endsWith('mrd-spotlight');

    return html`<li class="image ${isRandom ? 'random' : 'not-random'}">
      <img
        src=${item}
        title=${isRandom
          ? 'Random image of a cat'
          : `Image no. ${imageNumber}. User uploaded`}
        alt=${isRandom
          ? 'Random cat image'
          : `Image no. ${imageNumber}. User uploaded`}
      />
      ${filteredItems.length >= 2
        ? html`<button
            @click=${() => {
              removeItem(category, items, item);
            }}
            class="destructive icon"
            aria-label=${isRandom
              ? 'Delete all random cat images'
              : `Delete user uploaded image number ${imageNumber}.`}
          >
            ${deleteForeverIcon}
          </button>`
        : ''}
    </li>`;
  });
};
