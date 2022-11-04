import React from 'react';
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

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
