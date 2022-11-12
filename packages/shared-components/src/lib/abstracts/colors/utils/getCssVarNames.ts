import { ColorTheme } from '../types';

export const getCssVarNames = (colorTheme: ColorTheme) => {
  return Object.keys(colorTheme.light)
    .map((color) => {
      return Object.keys(colorTheme.light[color]).map((variant) => {
        return `--color-${color}-${variant}`;
      });
    })
    .flat();
};
