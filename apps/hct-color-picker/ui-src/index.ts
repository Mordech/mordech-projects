import {
  argbFromHex,
  argbFromRgb,
  Hct,
  hexFromArgb,
} from '@material/material-color-utilities';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import * as mixpanel from 'mixpanel-figma';
import { v4 as uuidv4 } from 'uuid';

import '@mordech/web-components/mrd-paint-swatch';
import '@mordech/web-components/mrd-toggle-theme';
import './components/color-preview';
import './components/details-section';
import './components/expand-chevron';
import './components/hct-controller';

import type { PluginMessage, UiPaintStyle } from '../types';

import { initAnalytics } from './utils/initAnalytics';
import { postMessage } from './utils/postMessage';

import './styles.scss';

initAnalytics();

@customElement('my-app')
export class MyApp extends LitElement {
  @property({ type: Number }) hue = 156;
  @property({ type: Number }) chroma = 50;
  @property({ type: Number }) tone = 50;
  @property({ type: Array }) paints?: UiPaintStyle[];
  @property({ type: String }) selectedColor?: UiPaintStyle;

  render() {
    return html`
      <header>
        <color-preview
          @input=${this.handleInput}
          .hex=${this.hex}
          .selectedColor=${this.selectedColor}
          .chroma=${this.chroma}
          .hue=${this.hue}
          .tone=${this.tone}
        >
        </color-preview>
      </header>

      <main>
        <div class="controller-container">
          <hct-controller
            id="mrd_controller-hue"
            .name=${'Hue'}
            .value=${this.hue}
            .min=${0}
            .max=${360}
            .sliderGradient=${this.hueGradient}
            @input=${this.handleInput}
          >
          </hct-controller>

          <hct-controller
            id="mrd_controller-chroma"
            .name=${'Chroma'}
            .value=${this.chroma}
            .min=${0}
            .max=${150}
            .sliderGradient=${this.chromaGradient}
            @input=${this.handleInput}
          >
          </hct-controller>

          <hct-controller
            id="mrd_controller-tone"
            .name=${'Tone'}
            .value=${this.tone}
            .min=${0}
            .max=${100}
            .sliderGradient=${this.toneGradient}
            @input=${this.handleInput}
          >
          </hct-controller>
        </div>

        ${this.paints?.length
          ? html`
              <details-section
                data-action="Show/hide styles"
                title="Color styles"
              >
                <div class="paints-container" role="listbox">
                  ${repeat(
                    this.paints,
                    ({ id, name, color }) =>
                      html`
                        <mrd-paint-swatch
                          data-action="Select style"
                          role="option"
                          aria-selected=${id === this.selectedColor?.id}
                          @click=${() =>
                            id === this.selectedColor?.id
                              ? (this.selectedColor = undefined)
                              : (this.selectedColor = { id, name, color })}
                          .id=${id}
                          .name=${name}
                          .color=${`rgb(${color.r}, ${color.g}, ${color.b})`}
                          .active=${id === this.selectedColor?.id}
                        >
                        </mrd-paint-swatch>
                      `
                  )}
                </div>
              </details-section>
            `
          : ''}

        <footer>
          <a
            href="https://github.com/Mordech/mordech-projects/tree/main/apps/hct-color-picker"
            target="_blank"
            rel="noopener noreferrer"
          >
            This plugin is open source ⚡️
          </a>

          <mrd-toggle-theme
            title="Toggle theme"
            @toggle-theme=${this.handleThemeChange}
            .saveToStorage=${false}
          >
          </mrd-toggle-theme>
        </footer>
      </main>
    `;
  }

  get hex() {
    return hexFromArgb(Hct.from(this.hue, this.chroma, this.tone).toInt());
  }

  get argb() {
    return argbFromHex(this.hex);
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('selectedColor')) {
      if (!this.selectedColor) return;
      const { r, g, b } = this.selectedColor.color;

      const hct = Hct.fromInt(argbFromRgb(r, g, b));

      this.hue = hct.hue;
      this.chroma = hct.chroma;
      this.tone = hct.tone;

      this.updateStyle();
      this.saveColor();
    }
  }

  get hueGradient() {
    const steps = 360;
    const gradient = [];

    for (let i = 0; i < steps; i++) {
      const color = Hct.from(i, 100, 60);
      gradient.push(hexFromArgb(color.toInt()));
    }

    return css`
      --mrd-range-preview-background: linear-gradient(
        to right,
        ${unsafeCSS(gradient.join(','))}
      );

      --mrd-range-color: ${unsafeCSS(
        gradient.splice(0, this.hue + 1).join(',')
      )};

      --mrd-thumb-color: ${unsafeCSS(
        hexFromArgb(Hct.from(this.hue, 100, 60).toInt())
      )};
    `;
  }

  get chromaGradient() {
    const steps = 150;
    const gradient = [];

    for (let i = 1; i < steps; i++) {
      const color = Hct.from(this.hue, i, 65);
      gradient.push(hexFromArgb(color.toInt()));
    }

    return css`
      --mrd-range-preview-background: linear-gradient(
        to right,
        ${unsafeCSS(gradient.join(','))}
      );

      --mrd-range-color: ${unsafeCSS(
        gradient.splice(0, this.chroma + 1).join(',')
      )};

      --mrd-thumb-color: ${unsafeCSS(
        hexFromArgb(Hct.from(this.hue, this.chroma, 65).toInt())
      )};
    `;
  }

  get toneGradient() {
    const steps = 100;
    const gradient = [];

    for (let i = 0; i < steps; i++) {
      const color = Hct.from(this.hue, this.chroma, i);
      gradient.push(hexFromArgb(color.toInt()));
    }

    return css`
      --mrd-range-preview-background: linear-gradient(
        to right,
        ${unsafeCSS(gradient.join(','))}
      );

      --mrd-range-color: ${unsafeCSS(
        gradient.splice(0, this.tone + 1).join(',')
      )};

      --mrd-thumb-color: ${unsafeCSS(
        hexFromArgb(
          Hct.from(
            this.hue,
            this.chroma,
            Math.min(75, Math.max(this.tone, 25))
          ).toInt()
        )
      )};
    `;
  }

  handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    const value = parseInt(input.value) || 0;

    switch (input.id.split('-')[1]) {
      case 'hue':
        this.hue = value;
        break;

      case 'chroma':
        this.chroma = value;
        break;

      case 'tone':
        this.tone = value;
        break;

      case 'selected_color': {
        const { hue, chroma, tone } = Hct.fromInt(argbFromHex(input.value));
        this.hue = hue;
        this.chroma = chroma;
        this.tone = tone;
        break;
      }
    }
  }

  handleThemeChange(e: CustomEvent) {
    const { theme } = e.detail;

    postMessage({
      type: 'save-theme',
      data: theme,
    });

    mixpanel.track('Theme change', { theme });
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener('input', () => {
      this.updateStyle();
      this.saveColor();
    });

    postMessage({ type: 'get-color' });
    postMessage({ type: 'get-theme' });

    onmessage = (event) => {
      const msg = event.data.pluginMessage as PluginMessage | undefined;
      if (!msg) return;
      const { type } = msg;

      switch (type) {
        case 'paints':
          {
            const { paints } = msg;
            this.paints = paints;
          }
          break;

        case 'selection':
          this.selectedColor = this.paints?.find(
            (paint) => paint.id === msg.selection?.id
          );
          if (!this.selectedColor && msg.selection?.color) {
            const { hue, chroma, tone } = Hct.fromInt(
              argbFromRgb(
                msg.selection?.color?.r,
                msg.selection?.color?.g,
                msg.selection?.color?.b
              )
            );
            this.hue = hue;
            this.chroma = chroma;
            this.tone = tone;
            this.saveColor();
          }

          mixpanel.track('Layer selected', {
            hasStyle: !!msg.selection?.id,
            color:
              msg.selection?.color &&
              hexFromArgb(
                argbFromRgb(
                  msg.selection?.color?.r,
                  msg.selection?.color?.g,
                  msg.selection?.color?.b
                )
              ),
          });

          break;

        case 'color-from-storage':
          {
            const { color } = msg;
            if (!color) return;
            this.hue = color.hue;
            this.chroma = color.chroma;
            this.tone = color.tone;
          }
          break;

        case 'stored-theme': {
          const { theme } = msg;
          const toggleTheme = document.querySelector('mrd-toggle-theme');
          if (!toggleTheme) return;
          if (!theme) return;
          toggleTheme.theme = theme;
          break;
        }

        case 'uuid': {
          const { uuid } = msg;

          if (!uuid) {
            const uuid = uuidv4();
            postMessage({ type: 'set-uuid', uuid });
            return mixpanel.identify(uuid);
          }

          mixpanel.identify(uuid);
          break;
        }
      }
    };
  }

  private saveColor() {
    postMessage({
      type: 'save-color',
      data: { hue: this.hue, chroma: this.chroma, tone: this.tone },
    });
  }

  private updateStyle() {
    postMessage({
      type: 'update-style',
      data: {
        selectedColor: this.selectedColor,
        argb: this.argb,
      },
    });
  }

  createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': MyApp;
  }
}
