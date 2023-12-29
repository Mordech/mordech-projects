import { dirname, join } from 'path';
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

module.exports = {
  stories: [
    '../../../packages/web-components/src/lib/**/*.stories.mdx',
    '../../../packages/web-components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  staticDirs: ['../public'],

  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@mordech/storybook-toggle-theme-addon'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },

  docs: {
    autodocs: true,
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
