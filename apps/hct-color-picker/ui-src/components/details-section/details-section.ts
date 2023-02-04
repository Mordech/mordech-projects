import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../expand-chevron';

import detailsSectionStyles from './details-section.scss?inline';

@customElement('details-section')
export class DetailsSection extends LitElement {
  @property({ type: String }) title = '';

  static styles = [unsafeCSS(detailsSectionStyles)];

  render() {
    return html`
      <details class="controller-container">
        <summary>
          <span>${this.title}</span>
          <expand-chevron> </expand-chevron>
        </summary>
        <slot></slot>
      </details>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'details-section': DetailsSection;
  }
}
