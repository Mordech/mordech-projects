import { colors } from '@mordech/tokens';
import { LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { html, unsafeStatic } from 'lit/static-html.js';

import { focusableBase } from '../../styles/focusable.styles';

import { buttonBase } from './button.styles';
import {
  type ButtonColors,
  type ButtonRadius,
  type ButtonSize,
  type ButtonVariants,
} from './types';

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
  variant: ButtonVariants = 'fill';
  @property({ type: Boolean })
  disabled = false;
  @property({ type: String })
  as: 'button' | 'a' = 'button';

  get tag() {
    return unsafeStatic(this.as);
  }

  @state() private _hasText = false;

  get backgroundColor() {
    switch (this.variant) {
      case 'fill':
        return colors[this.color].base;
      case 'tonal':
        return colors[this.color].container;
      case 'inverted':
        return colors.background.base;
      case 'text':
        return 'transparent';
    }
  }

  get textColor() {
    switch (this.variant) {
      case 'fill':
        return colors[this.color].onBase;

      case 'tonal':
        return colors[this.color].onContainer;
      case 'inverted':
        return colors[this.color].base;
      case 'text':
        return colors[this.color].base;
    }
  }

  override render() {
    const handleColors = styleMap({
      '--mrd-button-color': this.textColor,
      '--mrd-button-background': this.backgroundColor,
    });

    return html`
      <${this.tag}
        aria-label=${this.ariaLabel}
        aria-disabled=${this.disabled}
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
      </${this.tag}>
    `;
  }

  private _handleSlotchange(event: Event) {
    const { target } = event as Event & { target: HTMLSlotElement };

    const nodes = target.assignedNodes() ?? [];

    const icons = nodes.filter((node) => node.nodeName === 'svg');

    const texts = nodes.filter(
      (node) => node.nodeName === '#text' || node.nodeName === 'SPAN',
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
