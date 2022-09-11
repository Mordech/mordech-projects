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
};

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
