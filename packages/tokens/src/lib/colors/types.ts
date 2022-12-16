export type Palette = {
  [key: string]: Record<string, string>;
};

export type Theme = 'light' | 'dark';

export type ColorTheme = Record<Theme, Palette>;
