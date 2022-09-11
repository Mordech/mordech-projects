import { CSSProperties } from 'styled-components';

export type FontSizes = 0 | 1 | 2 | 3 | 4 | 5 | 'inherit';

export type GapSizes = 0 | 1 | 2 | 3 | 4 | 'unset';

export type FontWeights = 'regular' | 'medium' | 'bold';

export type FontFamily = 'sans' | 'serif' | 'code' | 'inherit';

export const fontSizes: Record<FontSizes, CSSProperties['fontSize']> = {
  0: '0.875rem', // 14px
  1: '1rem', // 16px
  2: '1.5rem', // 24px
  3: '2.25rem', // 36px
  4: '3rem', // 48px
  5: '3.375rem', // 54px
  inherit: 'inherit',
};

export const gapSizes: Record<GapSizes, CSSProperties['gap']> = {
  0: '0.5rem', // 14px
  1: '1rem', // 16px
  2: '1.25rem', // 24px
  3: '1.5rem', // 36px
  4: '2rem', // 48px
  unset: 'unset',
};

export const fontWeights: Record<FontWeights, CSSProperties['fontWeight']> = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const fontFamilies: Record<FontFamily, CSSProperties['fontFamily']> = {
  sans: `'DM Sans',sans-serif`,
  serif: `'Eczar',serif`,
  code: `'JetBrains Mono',monospace`,
  inherit: 'inherit',
};
