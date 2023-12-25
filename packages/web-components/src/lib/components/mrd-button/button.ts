import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { focusableBase } from '../../styles/focusable.styles';

import { buttonBase } from './button.styles';
@customElement('mrd-button')
export class MrdButtonElement extends LitElement {
  static override styles = [focusableBase, buttonBase];

  @property({ type: String }) size: 'small' | 'tiny' | 'default' = 'default';
  @property({ type: String }) radius: 'round' | 'pill' | 'default' = 'default';
  @state() private hasText = false;

  override render() {
    return html`
      <button
        part="button"
        class="btn"
        data-size=${this.size}
        data-radius=${this.radius}
      >
        <slot name="icon-start"></slot>
        <slot
          class=${classMap({ slot: this.hasText })}
          @slotchange=${this.handleSlotchange}
        >
        </slot>
        <slot name="icon-end"></slot>
      </button>
    `;
  }

  private handleSlotchange(event: Event) {
    const { target } = event as Event & { target: HTMLSlotElement };

    const nodes = target.assignedNodes() ?? [];

    const icons = nodes.filter((node) => node.nodeName === 'svg');

    const texts = nodes.filter((node) => node.nodeName === '#text');
    const validText = texts.filter((node) => node.textContent?.trim() !== '');

    this.hasText = validText.length > 0;

    if (icons.length > 0) {
      icons.forEach((icon, index) => {
        if (icon instanceof SVGElement) {
          icon.setAttribute('slot', index === 0 ? 'icon-start' : 'icon-end');
        }
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mrd-button': MrdButtonElement;
  }
}
