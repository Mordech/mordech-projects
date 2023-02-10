import { argbFromHex } from '@material/material-color-utilities';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../../icons/save-icon';
import '@mordech/web-components/mrd-button';

import type { UiPaintStyle } from '../../../types';
import { postMessage } from '../../utils/postMessage';

import { createButtonStyle } from './create-button.styles';

import './color-preview.scss';

@customElement('color-preview')
export class ColorPreview extends LitElement {
  @property({ type: String }) hex = '#000000';
  @property({ type: Object }) selectedColor?: UiPaintStyle;

  render() {
    return html`
      <div class="color-container">
        <div class="color-input">
          <input
            type="color"
            id="mrd-selected_color"
            name="Selected Color"
            class="mrd-color-input"
            .value=${this.hex}
          />

          ${!this.selectedColor
            ? html`
                <mrd-button
                  class="add-style-button"
                  @click=${this.createPaintStyle}
                  .style=${createButtonStyle}
                >
                  <save-icon></save-icon>
                </mrd-button>
              `
            : ''}
        </div>

        <div class="info-container">
          ${this.selectedColor
            ? html`
                <span
                  title=${`Selected style: ${this.selectedColor.name}`}
                  class="selected-style-span"
                >
                  <strong> Selected style: </strong> ${this.selectedColor.name}
                </span>
              `
            : html` <strong> Custom color </strong> `}
          <span> ${this.hex.toUpperCase()} </span>
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
