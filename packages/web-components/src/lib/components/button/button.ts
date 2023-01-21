import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { focusableBase } from '../../styles/focusable.styles';

import { buttonBase } from './button.styles';

@customElement('mrd-button')
export class Button extends LitElement {
  static override styles = [focusableBase, buttonBase];

  override render() {
    return html`
      <button part="button" class="btn">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mrd-button': Button;
  }
}
