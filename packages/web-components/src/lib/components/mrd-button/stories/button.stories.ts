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
    slot: {
      control: 'text',
      description: 'Slot content. Defaults to empty slot',
      table: {
        type: { summary: 'HTMLElement' },
      },
    },
  },
};

export const Default = ({ slot = `Hello World!` }: MrdButtonElement) =>
  html`<mrd-button>${slot}</mrd-button>`;
