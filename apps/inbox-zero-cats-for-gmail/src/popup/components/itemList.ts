import { html } from 'lit-html';

import { DataKeys } from '../@types';
import { deleteForeverIcon } from '../assets/deleteForeverIcon';
import { removeItem } from '../utils/removeItem';

export const itemList = (category: DataKeys, items: string[]) =>
  items.map(
    (item) =>
      html`<li dir="auto" class="title-row">
        <span class="title-text">${item}</span>
        ${items.length >= 2
          ? html`<mrd-button
              size="tiny"
              color="error"
              variant="tonal"
              class="delete-btn"
              @click=${() => {
                removeItem(category, items, item);
              }}
              aria-label=${`Delete title ${item}`}
            >
              ${deleteForeverIcon}
            </mrd-button>`
          : ''}
      </li>`,
  );
