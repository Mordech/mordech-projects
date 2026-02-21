import { argbFromHex } from '@material/material-color-utilities';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import '@mordech/web-components/mrd-button';
import '../copy-button';

import type { UiPaintStyle } from '../../../types';
import detachIcon from '../../icons/detach-icon.svg?lit';
import saveIcon from '../../icons/save-icon.svg?lit';
import { postMessage } from '../../utils/postMessage';

import './color-preview.scss';

@customElement('color-preview')
export class ColorPreview extends LitElement {
  @property({ type: String }) hex = '#000000';
  @property({ type: Object }) selectedColor?: UiPaintStyle;

  get selectedColorType() {
    return this.selectedColor && this.selectedColor?.modeId
      ? 'variable'
      : 'style';
  }

  render() {
    const addStyleButtonClasses = {
      'save-detach-button': true,
      'add-mode': !this.selectedColor,
    };

    return html`
      <div class="color-container">
        <div class="color-input-container">
          <input
            aria-label="Selected Color"
            type="color"
            id="mrd_color-selected_color"
            name="Selected Color"
            class=${'color-input'}
            .value=${this.hex}
          />

          <mrd-button
            variant="inverted"
            aria-label=${this.selectedColor
              ? 'Detach ${this.selectedColorType}'
              : 'Add to styles'}
            class=${classMap(addStyleButtonClasses)}
            @click=${this.selectedColor
              ? this.detachStyle
              : this.createPaintStyle}
          >
            ${this.selectedColor
              ? html`${detachIcon} Detach ${this.selectedColorType}`
              : html`${saveIcon} Save style`}
          </mrd-button>
        </div>

        <div class="info-container">
          ${this.selectedColor
            ? html`
                <span
                  title=${`Editing: ${this.selectedColor.name}`}
                  class="selected-style-span"
                >
                  <strong> Editing ${this.selectedColorType}: </strong>
                  ${this.selectedColor.name}
                </span>
              `
            : html` <strong> Custom color </strong> `}

          <copy-button data-event="Copy hex" data-prop-value=${this.hex}>
            ${this.hex.toUpperCase()}
          </copy-button>
        </div>
      </div>
    `;
  }

  createPaintStyle() {
    postMessage({
      type: 'create-paint-style',
      data: {
        argb: argbFromHex(this.hex),
      },
    });
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('hex')) {
      this.querySelector('.detaching')?.classList.remove('detaching');
    }
  }

  detachStyle(event: Event) {
    this.dispatchEvent(new Event('detach-style', { bubbles: true }));

    if (event.target instanceof HTMLElement) {
      const { classList } = event.target;

      classList.add('detaching');

      setTimeout(() => {
        classList.remove('detaching');
      }, 2_000);
    }
  }

  protected createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'color-preview': ColorPreview;
  }
}
