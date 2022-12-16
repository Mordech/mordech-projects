import { ColorTheme, Theme } from '../types';

export const getThemeColors = (colorTheme: ColorTheme, theme: Theme) => {
  return Object.keys(colorTheme[theme])
    .map((color) => {
      return Object.keys(colorTheme[theme][color]).map((shade) => {
        return `--mrd-color-${color}-${shade}: ${colorTheme[theme][color][shade]};`;
      });
    })
    .flat();
};
