/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  core: { builder: 'webpack5' },
  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',

    '@nrwl/react/plugins/storybook',
    '../../storybook-toggle-theme-addon/register.js',
  ],
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js

    // add your own webpack tweaks if needed

    return config;
  },
};
