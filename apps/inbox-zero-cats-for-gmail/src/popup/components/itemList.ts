import { html } from 'lit-html';

import { DataKeys } from '../@types';
import { deleteForeverIcon } from '../assets/deleteForeverIcon';
import { removeItem } from '../utils/removeItem';

export const itemList = (category: DataKeys, items: string[]) =>
  items.map(
    (item) =>
      html`<li dir="auto" class="text-item">
        ${item}
        <button
          @click=${() => {
            removeItem(category, items, item);
          }}
          aria-label=${`Delete title ${item}`}
          class="destructive icon"
          style="visibility: ${items.length >= 2 ? 'visible' : 'hidden'}"
        >
          ${deleteForeverIcon}
        </button>
      </li>`,
  );
