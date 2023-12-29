import type { StorybookConfig } from '@storybook/web-components-vite';
import { dirname, join } from 'path';

const config: StorybookConfig = {
  framework: '@storybook/web-components-vite',

  stories: [
    '../../../packages/web-components/src/lib/**/*.stories.mdx',
    '../../../packages/web-components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@mordech/storybook-toggle-theme-addon'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
  ],

  docs: {
    autodocs: true,
  },

  staticDirs: ['../public'],

  core: {
    builder: '@storybook/builder-vite',
  },
};

export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
