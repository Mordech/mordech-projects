import { colors } from '@mordech/tokens';
import { html as raw } from '@mordech/tokens/utils';
import { html } from 'lit-html';

import { MrdRangeElement } from '../range';

export default {
  title: 'Atoms/mrd-range',
  component: 'mrd-range',
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'A simple range',
      },
    },
  },
  argTypes: {
    min: {
      control: 'number',
      description: 'Minimum value',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: '100' },
      },
    },
    value: {
      control: 'number',
      description: 'Current value',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: '(min + max) / 2' },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: true,
      },
    },
  },
};

export const Default = ({
  min = 0,
  max = 100,
  value = 50,
  disabled,
}: MrdRangeElement) => html`
  <range-container>
    <mrd-range
      .min=${min}
      .max=${max}
      .value=${value}
      .disabled=${disabled}
    ></mrd-range>
  </range-container>
`;

export const ColoredRange = ({
  min = 0,
  max = 100,
  value = 50,
  disabled,
}: MrdRangeElement) => html`
  <range-container>
    <mrd-range
      style=${`--mrd-range-color: ${colors.highlight.pink}; --mrd-thumb-color: ${colors.secondary.base};`}
      .min=${min}
      .max=${max}
      .value=${value}
      .disabled=${disabled}
    >
    </mrd-range>
  </range-container>
`;

export class RangeContainer extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = raw`
    <div style="width: 16rem;">
      <slot></slot>
    </div>
    `;
  }
}

customElements.define('range-container', RangeContainer);

declare global {
  interface HTMLElementTagNameMap {
    'range-container': RangeContainer;
  }
}
