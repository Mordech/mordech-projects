import { argbFromHex } from '@material/material-color-utilities';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@mordech/web-components/mrd-button';
import '../copy-button';

import type { UiPaintStyle } from '../../../types';
import saveIcon from '../../icons/save-icon.svg?lit';
import { postMessage } from '../../utils/postMessage';

import './color-preview.scss';

@customElement('color-preview')
export class ColorPreview extends LitElement {
  @property({ type: String }) hex = '#000000';
  @property({ type: Object }) selectedColor?: UiPaintStyle;

  render() {
    return html`
      <div class="color-container">
        <div class="color-input-container">
          <input
            type="color"
            id="mrd_color-selected_color"
            name="Selected Color"
            class=${'color-input'}
            .value=${this.hex}
          />

          ${!this.selectedColor
            ? html`
                <mrd-button
                  aria-label="Add to styles"
                  data-event="Create paint style"
                  data-prop-value=${this.hex}
                  class="add-style-button"
                  @click=${this.createPaintStyle}
                  style="--mrd-button-title: 'Add to styles'"
                >
                  ${saveIcon}
                </mrd-button>
              `
            : nothing}
        </div>

        <div class="info-container">
          ${this.selectedColor
            ? html`
                <span
                  title=${`Editing: ${this.selectedColor.name}`}
                  class="selected-style-span"
                >
                  <strong>
                    Editing ${this.selectedColor.modeId ? 'variable' : 'style'}:
                  </strong>
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

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'color-preview': ColorPreview;
  }
}
