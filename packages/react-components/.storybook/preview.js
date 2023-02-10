import React, { createElement } from 'react';
import { MrdToggleThemeElement } from '@mordech/web-components/mrd-toggle-theme';

import { GlobalStyle } from '../src/lib/abstracts';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'background',
    values: [
      {
        name: 'background',
        value: 'var(--mrd-color-background-base)',
      },
    ],
  },
  layout: 'centered',
  options: {
    storySort: {
      order: [
        'Introduction',
        ['Getting Started'],
        'Abstracts',
        'Atoms',
        ['Typography', 'Markdown', 'Button', 'Icon', 'Link', 'List'],
        'Molecules',
        'Organisms',
        'Templates',
        'Pages',
      ],
    },
  },
};

const theme = new MrdToggleThemeElement();
theme.saveToStorage = false;
theme.initTheme();

customElements.define(
  'preview-container',
  class PreviewContainerElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      const slot = createElement('slot');

      this.shadowRoot.appendChild(slot);
    }
  }
);

export const decorators = [
  (Story) => (
    <preview-container>
      <GlobalStyle />
      <Story />
    </preview-container>
  ),
];
