import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './copy-button.scss?inline';

@customElement('copy-button')
export class CopyButton extends LitElement {
  static styles = [unsafeCSS(styles)];

  render() {
    return html`<button @click=${this.copyToClipboard}>
      <slot></slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 96 960 960"
        width="20"
        fill="currentColor"
      >
        <path
          d="M216 960q-29.7 0-50.85-21.15Q144 917.7 144 888V336h72v552h456v72H216Zm144-144q-29.7 0-50.85-21.15Q288 773.7 288 744V264q0-29.7 21.15-50.85Q330.3 192 360 192h384q29.7 0 50.85 21.15Q816 234.3 816 264v480q0 29.7-21.15 50.85Q773.7 816 744 816H360Zm0-72h384V264H360v480Zm0 0V264v480Z"
        />
      </svg>
    </button>`;
  }

  copyToClipboard() {
    if (navigator.clipboard) {
      const text = this.innerText || '';
      navigator.clipboard.writeText(text);
      return;
    }

    const text = this.innerText || '';
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'copy-button': CopyButton;
  }
}
