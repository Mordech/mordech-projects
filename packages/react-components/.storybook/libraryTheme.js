import { colorTheme, fontFamilies } from '@mordech/tokens';
import { create } from '@storybook/theming';

import logo from './assets/logo.png';

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
  textColor: colorTheme.light.background.on,
  textInverseColor: colorTheme.light.background.onSurface,
  textMutedColor: colorTheme.light.disabled.base,

  // Toolbar default and active colors
  barTextColor: colorTheme.light.background.on,
  barSelectedColor: colorTheme.light.background.on,
  barBg: colorTheme.light.background.base,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://elad.mizrahi.cc',
  brandImage: logo,
  brandTarget: '_blank',
});
