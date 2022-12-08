import { CSSProperties } from 'styled-components';

export type Palette = {
  [key: string]: Record<string, NonNullable<CSSProperties['color']>>;
};

export type Theme = 'light' | 'dark';

export type ColorTheme = Record<Theme, Palette>;
