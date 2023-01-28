import { LitElement, svg as html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('save-icon')
export class SaveIcon extends LitElement {
  render() {
    return html`
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="currentColor"
      >
        <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
      </svg>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'save-icon': SaveIcon;
  }
}
