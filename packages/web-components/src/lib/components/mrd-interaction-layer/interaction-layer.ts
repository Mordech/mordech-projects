import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './interaction-layer.styles.scss?lit';

@customElement('mrd-interaction-layer')
export class MrdInteractionLayerElement extends LitElement {
  static override styles = [styles];
  @property({ type: Boolean }) disabled?: boolean;

  override render() {
    return this.disabled
      ? nothing
      : html`<div class="interaction-layer" aria-hidden="true"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mrd-interaction-layer': MrdInteractionLayerElement;
  }
}
