import { html } from 'lit-html';

import { MrdButtonElement } from '..';

export default {
  title: 'Atoms/mrd-button',
  component: 'mrd-button',
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'A simple button',
      },
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['default', 'small', 'tiny'],
      },
      description: 'Button size',
      table: {
        type: { summary: 'default | small | tiny' },
        defaultValue: { summary: 'default' },
      },
    },
    radius: {
      control: {
        type: 'select',
        options: ['default', 'round', 'pill'],
      },
      description: 'Button radius',
      table: {
        type: { summary: 'default | round | pill' },
        defaultValue: { summary: 'default' },
      },
    },
    slot: {
      control: 'text',
      description: 'Slot content. Defaults to empty slot',
      table: {
        type: { summary: 'HTMLElement' },
      },
    },
  },
};

export const Default = ({
  slot = `Hello World!`,
  size,
  radius,
}: MrdButtonElement) =>
  html`<mrd-button size=${size} radius=${radius}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="currentColor"
    >
      <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
    </svg>
    ${slot}
  </mrd-button> `;
