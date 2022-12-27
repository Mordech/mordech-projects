import React from 'react';
import { ToggleTheme } from '@mordech/web-components';
import { addDecorator } from '@storybook/react';

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

const theme = new ToggleTheme();
theme.initTheme();

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
