import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import checkMarkIcon from '../../icons/check-mark-icon.svg?lit';
import clipboardIcon from '../../icons/clipboard-icon.svg?lit';

import styles from './copy-button.scss?lit';

@customElement('copy-button')
export class CopyButton extends LitElement {
  @property({ type: Boolean }) copied = false;

  static styles = [styles];

  render() {
    return html`<button title=${this.copied ? 'Copied!' : 'Copy hex'}>
      <slot></slot>
      ${this.copied ? checkMarkIcon : clipboardIcon}
    </button>`;
  }

  copyToClipboard() {
    if (navigator.clipboard) {
      const text = this.innerText || '';
      navigator.clipboard.writeText(text);
      this.setAsCopied();
      return;
    }

    const text = this.innerText || '';

    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    this.setAsCopied();
    return;
  }

  private setAsCopied() {
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 1000);
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener('click', this.copyToClipboard);

    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        this.copyToClipboard();
      }
    });

    this.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        this.copyToClipboard();
      }
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'copy-button': CopyButton;
  }
}
