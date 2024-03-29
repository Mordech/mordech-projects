import { MrdToggleThemeElement } from '../../../packages/web-components/src';

import '@mordech/tokens/css';

const theme = new MrdToggleThemeElement();
theme.saveToStorage = false;
theme.initTheme();

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
        [
          'mrd-range',
          'mrd-toggle-theme',
          'mrd-typography',
          'mrd-markdown',
          'mrd-button',
          'mrd-icon',
        ],
        'Molecules',
        'Organisms',
        'Templates',
        'Pages',
      ],
    },
  },
};
