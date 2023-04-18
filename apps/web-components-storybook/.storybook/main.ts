import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  stories: [
    '../../../packages/web-components/src/lib/**/*.stories.mdx',
    '../../../packages/web-components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-essentials',
    '../../../packages/storybook-toggle-theme-addon/register.js',
    '@storybook/addon-mdx-gfm',
  ],
  docs: {
    autodocs: true,
  },
};

export default config;
