import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import '@mordech/web-components/mrd-range';

import './hct-controller.scss';

@customElement('hct-controller')
export class HctController extends LitElement {
  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 360;
  @property({ type: String }) name = 'hue';
  @property({ type: Object }) sliderGradient: Record<string, string> = {
    '--mrd-range-background': '',
  };

  render() {
    return html`
      <div class="slider-container">
        <div class="input-title-container">
          <label
            for="mrd_range-${this.name.toLocaleLowerCase()}"
            id="mrd_label-${this.name.toLocaleLowerCase()}"
          >
            ${this.name}
          </label>

          <input
            type="number"
            aria-labelledby="mrd_label-${this.name.toLocaleLowerCase()}"
            id="mrd_number-${this.name.toLocaleLowerCase()}"
            name="mrd_number-${this.name.toLocaleLowerCase()}"
            min=${this.min}
            max=${this.max}
            .value=${this.value.toFixed().toString()}
          />
        </div>

        <mrd-range
          aria-labelledby="mrd_label-${this.name.toLocaleLowerCase()}"
          id="mrd_range-${this.name.toLocaleLowerCase()}"
          name="mrd_range-${this.name.toLocaleLowerCase()}"
          min=${this.min}
          max=${this.max}
          style=${styleMap(this.sliderGradient)}
          .value=${this.value}
        >
          <input
            aria-labelledby="mrd_label-${this.name.toLocaleLowerCase()}"
            tabindex="-1"
            class="invisible-color-range"
            type="range"
            id="mrd_invisible_range-${this.name.toLocaleLowerCase()}"
            name="mrd_color-${this.name.toLocaleLowerCase()}"
            min=${this.min}
            max=${this.max}
            .value=${this.value.toFixed().toString()}
          />
        </mrd-range>
      </div>
    `;
  }

  protected createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hct-controller': HctController;
  }
}
