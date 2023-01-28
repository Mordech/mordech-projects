import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { focusableBase } from '../../styles/focusable.styles';

import { paintSwatchBase } from './paint-swatch.styles';
import type { Color } from './types';

@customElement('mrd-paint-swatch')
export class MrdPainSwatchElement extends LitElement {
  @property({ type: Boolean }) active = false;
  @property({ type: String }) name = 'color swatch';
  @property({ type: String }) color: Color = 'rgba(0, 0, 0, 1)';

  static override styles = [focusableBase, paintSwatchBase];

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
