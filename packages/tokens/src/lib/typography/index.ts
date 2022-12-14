export type FontSizes = 0 | 1 | 2 | 3 | 4 | 5 | 'inherit';

export type FontWeights = 'regular' | 'medium' | 'bold';

export type FontFamily = 'sans' | 'serif' | 'code' | 'ui' | 'inherit';

export const baseFontSize = 16;

/**
 * Font sizes in rem
 * @example
 * .title {
 *  font-size: ${fontSizes[4]};
 * }
 * // font-size: 3rem;
 */
export const fontSizes: Record<FontSizes, string> = {
  0: '0.875rem', // 14px
  1: '1rem', // 16px
  2: '1.5rem', // 24px
  3: '2.25rem', // 36px
  4: '3rem', // 48px
  5: '3.375rem', // 54px
  inherit: 'inherit',
};

/**
 * Font weights
 * @example
 * .title {
 *   font-weight: ${fontWeights.bold};
 * }
 * // font-weight: 700;
 */
export const fontWeights: Record<FontWeights, number> = {
  regular: 400,
  medium: 500,
  bold: 700,
};

/**
 * Font families
 * @description
 * The font families are defined in the `@mordech/tokens/css/fonts.css` file.
 * or in the `@mordech/tokens/css` file which imports all the tokens.
 * @example
 * .title {
 *  font-family: ${fontFamilies.sans};
 * }
 *
 * // font-family: 'DM Sans',sans-serif;
 */
export const fontFamilies: Record<FontFamily, string> = {
  sans: `'DM Sans',sans-serif`,
  serif: `'Eczar',serif`,
  code: `'JetBrains Mono',monospace`,
  ui: `'Mona Sans',sans-serif`,
  inherit: 'inherit',
};
