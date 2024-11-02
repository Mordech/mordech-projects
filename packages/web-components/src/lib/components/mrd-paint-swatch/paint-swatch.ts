import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import focusableBase from '../../styles/focusable.styles.scss?lit';

import styles from './paint-swatch.styles.scss?lit';
import type { Color } from './types';

@customElement('mrd-paint-swatch')
export class MrdPainSwatchElement extends LitElement {
  @property({ type: Boolean }) active = false;
  @property({ type: String }) name = 'color swatch';
  @property({ type: String }) color: Color = 'rgba(0, 0, 0, 1)';

  static override styles = [focusableBase, styles];

  override render() {
    return html` <button
      title=${this.name}
      class="swatch"
      @click=${() => (this.active = !this.active)}
      data-active=${this.active}
      style="color: ${this.color}"
    ></button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mrd-paint-swatch': MrdPainSwatchElement;
  }
}
