import { ChangeEvent } from 'react';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { createRef, Ref, ref } from 'lit/directives/ref.js';

import type { Radii, Sizes } from '../../types';

import styles from './text-field.styles.scss?lit';
import type { TextFieldType } from './types';

@customElement('mrd-text-field')
export class MrdTextFieldElement extends LitElement {
  static override styles = [styles];

  @property({ type: String }) size: Sizes = 'default';
  @property({ type: String }) radius: Radii = 'default';
  @property({ type: Boolean }) error = false;
  @property({ type: String }) label?: string;
  @property({ type: String }) name?: string;
  @property({ type: Boolean }) required = false;
  @property({ attribute: 'supporting-text' }) supportingText = '';
  @property({ attribute: 'error-text' }) errorText = '';
  @property() value: string = '';
  @property() placeholder: string = '';
  @property() autocomplete?: AutoFill;
  @property() type: TextFieldType = 'text';
  @property({ type: Boolean }) disabled?: boolean;

  inputRef: Ref<HTMLInputElement> = createRef();

  private get supportingOrErrorText() {
    return this.error && this.errorText ? this.errorText : this.supportingText;
  }

  get input() {
    return this.inputRef.value;
  }

  get inputDirection() {
    if (this.dir) return this.dir as 'ltr' | 'rtl' | 'auto';
    return this.placeholder.match(/^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/g)
      ? 'rtl'
      : 'ltr';
  }

  override render() {
    const name = this.name || this.label || '';

    return html`
      ${this.renderLabel(name)}

      <div
        class="input-container"
        data-size=${this.size}
        data-radius=${this.radius}
        data-error=${this.error}
        @click=${this.focus}
        dir=${this.inputDirection}
      >
        <input
          dir=${(this.dir as 'ltr' | 'rtl' | 'auto') || 'auto'}
          ${ref(this.inputRef)}
          part="input"
          .value=${live(this.value)}
          .type=${this.type}
          .autocomplete=${this.autocomplete || nothing}
          .autocapitalize=${this.autocapitalize}
          ?disabled=${this.disabled}
          name=${name}
          placeholder=${this.placeholder}
          title=${this.placeholder}
          spellcheck=${this.spellcheck}
          @change=${this.handleInputChange}
        />

        <div class="placeholder-container" aria-hidden="true">
          <slot name="placeholder-icon" part="placeholder-icon"></slot>
          <span class="placeholder"> ${this.placeholder} </span>
        </div>
      </div>
      ${this.renderSupportingText()}
    `;
  }

  private renderLabel(name: string) {
    return this.label
      ? html`
          <label
            dir="auto"
            data-size=${this.size}
            data-error=${this.error}
            class="label"
            for=${name}
          >
            ${this.label}
            ${this.required ? html`<span class="asterisk">*</span>` : nothing}
          </label>
        `
      : nothing;
  }

  private renderSupportingText() {
    return this.supportingOrErrorText
      ? html`
          <span
            dir="auto"
            data-size=${this.size}
            data-radius=${this.radius}
            data-error=${this.error}
            class="supporting-text"
          >
            ${this.supportingOrErrorText}
          </span>
        `
      : nothing;
  }

  override focus() {
    return this.input?.focus();
  }

  override blur() {
    this.input?.blur();
  }

  handleInputChange(e: ChangeEvent) {
    const { target } = e;
    if (!(target instanceof HTMLInputElement)) return;
    this.value = target.value;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mrd-text-field': MrdTextFieldElement;
  }
}
