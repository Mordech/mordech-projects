import { html } from 'lit-html';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';

import '@mordech/web-components';

import { DataKeys } from '../@types';
import deleteForeverSvg from '../assets/deleteForeverIcon.svg';
import { removeItem } from '../utils/removeItem';

export const imageList = (category: DataKeys, items: string[]) => {
  const filteredItems = items.filter((image) => !image.endsWith('mrd-random'));
  return filteredItems.map((item, index) => {
    const imageNumber = filteredItems.length - index - 1;
    const isRandom = item.endsWith('mrd-spotlight');

    return html`<li class="image ${isRandom ? 'random' : 'not-random'}">
      <img
        src=${item}
        title=${isRandom
          ? 'Random image will change on each load'
          : `Image no. ${imageNumber}. User uploaded`}
        alt=${isRandom
          ? 'Random image'
          : `Image no. ${imageNumber}. User uploaded`}
      />
      ${isRandom
        ? html`<mrd-chip color="secondary" class="random-chip">
            Random
          </mrd-chip>`
        : ''}
      ${filteredItems.length >= 2
        ? html`<mrd-button
            size="tiny"
            color="error"
            variant="tonal"
            @click=${() => {
              removeItem(category, items, item);
            }}
            aria-label=${isRandom
              ? 'Delete all random cat images'
              : `Delete user uploaded image number ${imageNumber}.`}
          >
            ${unsafeSVG(deleteForeverSvg)}
          </mrd-button>`
        : ''}
    </li>`;
  });
};
