import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@nrwl/react/plugins/storybook',
    '../../storybook-toggle-theme-addon/register.js',
    '@storybook/addon-mdx-gfm',
  ],
  staticDirs: ['../public'],
  docs: {
    autodocs: true,
  },
};

export default config;
