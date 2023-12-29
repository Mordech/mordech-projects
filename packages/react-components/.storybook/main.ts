import { dirname, join } from 'path';
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@mordech/storybook-toggle-theme-addon'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],

  staticDirs: ['../public'],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  docs: {
    autodocs: true,
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
