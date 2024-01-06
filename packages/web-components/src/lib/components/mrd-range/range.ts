import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { focusableBase } from '../../styles/focusable.styles';

import { rangeBase, slotContainer } from './range.styles';

@customElement('mrd-range')
export class MrdRangeElement extends LitElement {
  static override styles = [focusableBase, rangeBase, slotContainer];
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) value: number = this.getValue();
  @property({ type: Boolean }) disabled?: boolean;
  @property({ type: String }) name = 'range';

  override render() {
    return html`<div part="wrapper" class="wrapper">
      <input
        part="range"
        aria-label=${this.ariaLabel || this.name}
        .min=${this.min.toString()}
        .max=${this.max.toString()}
        .value=${this.value.toString()}
        .disabled=${!!this.disabled}
        type="range"
        name=${this.name}
        @input=${this.handleInput}
        style="--mrd-range: ${this.percentage()}%"
      />
      <div part="slot-container" class="slot-container">
        <slot></slot>
      </div>
    </div>`;
  }

  handleInput(e: Event) {
    const input = e.target as HTMLInputElement;

    this.value = parseInt(input.value);
  }

  private getValue() {
    if (this.value === undefined)
      return (this.value = (this.min + this.max) / 2);
    return this.value;
  }

  private percentage() {
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mrd-range': MrdRangeElement;
  }
}
