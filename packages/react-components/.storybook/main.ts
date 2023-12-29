import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join } from 'path';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',

  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
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

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')));
}
