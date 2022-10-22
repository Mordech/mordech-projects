import { create } from '@storybook/theming';

import { colors, fontFamilies } from '../src/lib/abstracts';

import logo from './assets/logo.png';

export default create({
  base: 'light',

  colorPrimary: colors.dark,
  colorSecondary: colors.dark,

  // UI
  appBg: colors.lightest,
  appContentBg: colors.lightest,
  appBorderRadius: 8,

  // Typography
  fontBase: fontFamilies['sans'],
  fontCode: fontFamilies['code'],

  // Text colors
  textColor: colors.dark,
  textInverseColor: colors.lightest,
  textMutedColor: colors.deeper,

  // Toolbar default and active colors
  barTextColor: colors.deeper,
  barSelectedColor: colors.dark,
  barBg: colors.lightest,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://elad.mizrahi.cc',
  brandImage: logo,
  brandTarget: '_blank',
});
