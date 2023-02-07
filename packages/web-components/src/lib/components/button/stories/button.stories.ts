import { html, TemplateResult } from 'lit-html';

import '@mordech/web-components';

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

export const Default = ({
  slot = html`Hello World!`,
}: {
  slot: TemplateResult;
}) => html`<mrd-button>${slot}</mrd-button>`;
