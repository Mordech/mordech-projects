import { ColorTheme, Theme } from '../types';

export const getCssVarValues = (colorTheme: ColorTheme, theme: Theme) => {
  return Object.keys(colorTheme[theme])
    .map((color) => {
      return Object.keys(colorTheme[theme][color]).map((shade) => {
        return colorTheme[theme][color][shade];
      });
    })
    .flat();
};
