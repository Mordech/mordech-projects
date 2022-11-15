import { colorTheme } from './colorTheme';
import { Palette } from './types';

const colorThemeLight: Palette = colorTheme.light;

export const colors: typeof colorTheme.light = Object.keys(
  colorThemeLight
).reduce((acc: Palette, color: string) => {
  acc[color] = Object.keys(colorThemeLight[color]).reduce((acc, shade) => {
    acc[
      shade
    ] = `var(--color-${color}-${shade}, ${colorThemeLight[color][shade]})`;
    return acc;
  }, {} as Palette[typeof color]);
  return acc as typeof colorTheme.light;
}, {} as typeof colorTheme.light);
