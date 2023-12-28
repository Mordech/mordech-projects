import { colors } from '@mordech/tokens';
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

import { focusableBase } from '../../styles/focusable.styles';

import { buttonBase } from './button.styles';
import { type ButtonColors, type ButtonRadius, type ButtonSize } from './types';

@customElement('mrd-button')
export class MrdButtonElement extends LitElement {
  static override styles = [focusableBase, buttonBase];

  @property({ type: String })
  size: ButtonSize = 'default';
  @property({ type: String })
  radius: ButtonRadius = 'default';
  @property({ type: String })
  color: ButtonColors = 'primary';
  @property({ type: String })
  variant: 'fill' | 'tonal' | 'inverted' | 'text' = 'fill';
  @property({ type: Boolean })
  disabled = false;

  @state() private _hasText = false;

  get backgroundColor() {
    switch (this.variant) {
      case 'fill':
        return !this.disabled ? colors[this.color].base : colors.disabled.base;
      case 'tonal':
        return !this.disabled
          ? colors[this.color].container
          : colors.disabled.container;
      case 'inverted':
        return colors.background.base;
      case 'text':
        return 'transparent';
    }
  }

  get textColor() {
    switch (this.variant) {
      case 'fill':
        return !this.disabled
          ? colors[this.color].onBase
          : colors.disabled.onBase;
      case 'tonal':
        return !this.disabled
          ? colors[this.color].onContainer
          : colors.disabled.onContainer;
      case 'inverted':
        return !this.disabled ? colors[this.color].base : colors.disabled.base;
      case 'text':
        return !this.disabled ? colors[this.color].base : colors.disabled.base;
    }
  }

  override render() {
    const handleColors = styleMap({
      '--mrd-button-color': this.textColor,
      '--mrd-button-background': this.backgroundColor,
    });

    return html`
      <button
        part="button"
        class="btn"
        style=${handleColors}
        data-size=${this.size}
        data-radius=${this.radius}
        .disabled=${this.disabled}
      >
        <slot name="icon-start" part="icon-start"></slot>
        <slot
          part="slot"
          class=${classMap({ slot: this._hasText })}
          @slotchange=${this._handleSlotchange}
        >
        </slot>
        <slot name="icon-end" part="icon-end"></slot>
      </button>
    `;
  }

  private _handleSlotchange(event: Event) {
    const { target } = event as Event & { target: HTMLSlotElement };

    const nodes = target.assignedNodes() ?? [];

    const icons = nodes.filter((node) => node.nodeName === 'svg');

    const texts = nodes.filter(
      (node) => node.nodeName === '#text' || node.nodeName === 'SPAN'
    );
    const validText = texts.filter((node) => node.textContent?.trim() !== '');

    this._hasText = validText.length > 0;

    if (icons.length > 0) {
      icons.forEach((icon, index) => {
        if (icon instanceof SVGElement) {
          if (icon.hasAttribute('slot')) return;
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
