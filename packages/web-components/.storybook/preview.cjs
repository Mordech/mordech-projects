import { html } from 'lit';

import './decorator-story';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',

  backgrounds: {
    default: 'background',
    values: [
      {
        name: 'background',
        value: 'var(--mrd-color-background-base)',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story) => html`<decorator-story> ${story()} </decorator-story>`,
];
