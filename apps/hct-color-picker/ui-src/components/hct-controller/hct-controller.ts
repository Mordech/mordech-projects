import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@mordech/web-components/mrd-range';

import './hct-controller.scss';

@customElement('hct-controller')
export class HctController extends LitElement {
  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 360;
  @property({ type: String }) name = 'hue';
  @property({ type: String })
  sliderGradient = css`
    background: linear-gradient(
      to right,
      red,
      yellow,
      lime,
      cyan,
      blue,
      magenta,
      red
    );
  `;

  render() {
    return html`
      <div class="slider-container">
        <div class="input-title-container">
          <label for="mrd_range-${this.name.toLocaleLowerCase()}"
            >${this.name}</label
          >
          <input
            type="number"
            id="mrd_number-${this.name.toLocaleLowerCase()}"
            name="mrd_number-${this.name.toLocaleLowerCase()}"
            min=${this.min}
            max=${this.max}
            .value=${this.value.toFixed().toString()}
          />
        </div>
        <mrd-range
          id="mrd_range-${this.name.toLocaleLowerCase()}"
          name="mrd_range-${this.name.toLocaleLowerCase()}"
          min=${this.min}
          max=${this.max}
          .value=${this.value}
          .style=${this.sliderGradient}
        >
        </mrd-range>
      </div>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hct-controller': HctController;
  }
}
