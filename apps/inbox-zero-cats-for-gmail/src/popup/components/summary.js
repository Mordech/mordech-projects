import { expandMoreIcon } from '../assets/expandMoreIcon.js';
import { html } from 'lit-html';

/**
 * Summary element for <details>
 * @param {string} title
 */
export const summary = (title) =>
  html`<summary aria-label=${title}>
    <h2>${title}</h2>
    ${expandMoreIcon}
  </summary>`;
