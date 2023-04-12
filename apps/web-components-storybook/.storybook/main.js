/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

module.exports = {
  core: { builder: 'webpack5' },
  stories: [
    '../../../packages/web-components/src/lib/**/*.stories.mdx',
    '../../../packages/web-components/src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-essentials',

    '../../../packages/storybook-toggle-theme-addon/register.js',
  ],
  webpackFinal: async (config) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js

    // add your own webpack tweaks if needed

    return config;
  },
};
