import { colors } from '@mordech/tokens';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import '../mrd-interaction-layer';

import focusableBase from '../../styles/focusable.styles.scss?lit';
import type { SemanticColors } from '../../types';

import styles from './chip.styles.scss?lit';

export type ChipVariant = 'default' | 'interactive' | 'clearable';

@customElement('mrd-chip')
export class MrdChipElement extends LitElement {
  static override styles = [focusableBase, styles];

  @property({ type: String })
  color: SemanticColors = 'primary';

  @property({ type: String })
  variant: ChipVariant = 'default';

  get chipColors() {
    return styleMap({
      '--mrd-chip-background': colors[this.color].container,
      '--mrd-chip-color': colors[this.color].onContainer,
    });
  }

  override render() {
    const isInteractive = this.variant === 'interactive';
    const isClearable = this.variant === 'clearable';

    return html`
      <div
        class="chip"
        part="chip"
        style=${this.chipColors}
        .role=${isInteractive ? 'button' : null}
        tabindex=${isInteractive ? 0 : -1}
        @keydown=${isInteractive ? this._handleKeydown : nothing}
      >
        <slot name="icon-start" part="icon-start"></slot>
        <span class="label" part="label"><slot></slot></span>
        ${isClearable
          ? html`
              <button
                class="clear"
                part="clear"
                aria-label="Clear"
                @click=${this._handleClear}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
                <mrd-interaction-layer></mrd-interaction-layer>
              </button>
            `
          : nothing}
        ${isInteractive
          ? html`<mrd-interaction-layer></mrd-interaction-layer>`
          : nothing}
      </div>
    `;
  }

  private _handleClear(e: Event) {
    e.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('mrd-chip-clear', { bubbles: true, composed: true }),
    );
  }

  private _handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.dispatchEvent(
        new MouseEvent('click', { bubbles: true, composed: true }),
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mrd-chip': MrdChipElement;
  }
}
