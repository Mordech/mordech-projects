import { colorTheme, fontFamilies } from '@mordech/tokens';
import { create } from '@storybook/theming';

import logo from './public/logo.png';

export default create({
  base: 'light',

  colorPrimary: colorTheme.light.primary.base,
  colorSecondary: colorTheme.light.primary.base,

  // UI
  appBg: colorTheme.light.background.base,
  appContentBg: colorTheme.light.background.base,
  appBorderRadius: 8,

  // Typography
  fontBase: fontFamilies['sans'],
  fontCode: fontFamilies['code'],

  // Text colors
  textColor: colorTheme.light.background.onBase,
  textInverseColor: colorTheme.light.background.onSurface,
  textMutedColor: colorTheme.light.disabled.base,

  // Toolbar default and active colors
  barTextColor: colorTheme.light.background.onBase,
  barSelectedColor: colorTheme.light.background.onBase,
  barBg: colorTheme.light.background.base,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://elad.mizrahi.cc',
  brandImage: logo,
  brandTarget: '_blank',
});
