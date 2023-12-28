import { colors } from './colors.token';

export type Palette = {
  [key: string]: Record<string, string>;
};

export type Theme = 'light' | 'dark';

export type ColorTheme = Record<Theme, Palette>;

export type Color = keyof typeof colors;
