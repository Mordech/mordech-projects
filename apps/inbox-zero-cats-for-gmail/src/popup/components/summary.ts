import { html } from 'lit-html';

import { expandMoreIcon } from '../assets/expandMoreIcon';

export const summary = (title: string) =>
  html`<summary aria-label=${title}>
    <h2>${title}</h2>
    ${expandMoreIcon}
  </summary>`;
