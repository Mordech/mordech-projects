import { html } from 'lit-html';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';

import '@mordech/web-components';

import { CatTitle, DataKeys } from '../@types';
import deleteForeverSvg from '../assets/deleteForeverIcon.svg';
import { removeItem } from '../utils/removeItem';

export const itemList = (category: DataKeys, items: CatTitle[]) =>
  items.map(
    (item) =>
      html`<li dir="auto" class="title-row">
        <span class="title-text" title=${item.text}>${item.text}</span>
        ${items.length >= 2
          ? html`<mrd-button
              size="tiny"
              color="error"
              variant="tonal"
              class="delete-btn"
              @click=${() => {
                removeItem(category, items, item);
              }}
              aria-label=${`Delete title ${item.text}`}
            >
              ${unsafeSVG(deleteForeverSvg)}
            </mrd-button>`
          : ''}
      </li>`,
  );
