import { create } from '@storybook/theming';

import { colors, fontFamilies, palette } from '../src/lib/abstracts';

import logo from './assets/logo.png';

export default create({
  base: 'light',

  colorPrimary: colors.light.primary.base,
  colorSecondary: colors.light.primary.base,

  // UI
  appBg: colors.light.background.base,
  appContentBg: colors.light.background.base,
  appBorderRadius: 8,

  // Typography
  fontBase: fontFamilies['sans'],
  fontCode: fontFamilies['code'],

  // Text colors
  textColor: colors.light.background.on,
  textInverseColor: colors.light.background.onContainer,
  textMutedColor: palette.primary['50'],

  // Toolbar default and active colors
  barTextColor: colors.light.background.on,
  barSelectedColor: colors.light.background.on,
  barBg: colors.light.background.base,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://elad.mizrahi.cc',
  brandImage: logo,
  brandTarget: '_blank',
});
