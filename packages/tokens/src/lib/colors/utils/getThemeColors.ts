import { ColorTheme, Theme } from '../types';

/**
 * @deprecated Use `createTokenObject` instead
 */
export const getThemeColors = (colorTheme: ColorTheme, theme: Theme) => {
  return Object.keys(colorTheme[theme])
    .map((color) => {
      return Object.keys(colorTheme[theme][color]).map((shade) => {
        return `--mrd-color-${color}-${shade}: ${colorTheme[theme][color][shade]};`;
      });
    })
    .flat();
};
