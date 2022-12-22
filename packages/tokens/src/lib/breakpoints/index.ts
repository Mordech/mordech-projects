import { baseFontSize } from '../typography';
import {
  createTokenObject,
  css,
  ManipulateValueFunction,
  pxToRem,
} from '../utils';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Breakpoint screen sizes in pixels
 */
export const screenSizes: Record<Breakpoint, number> = {
  sm: 600,
  md: 905,
  lg: 1240,
  xl: 1440,
};

export const screenSizesToRem: ManipulateValueFunction = (value) => {
  if (typeof value !== 'number') return value;
  return pxToRem({ px: value, baseFontSize: baseFontSize });
};

/**
 * Breakpoint screen sizes in rem
 */
export const screenSizesRem: typeof screenSizes = createTokenObject(
  screenSizes,
  'screen-size',
  { manipulateValue: screenSizesToRem, type: 'base' }
) as typeof screenSizes;

/**
 * Breakpoint media queries in CSS
 * @example
 * ${breakpoints.sm} {
 *  // Styles for screens larger than 600px
 * }
 */
export const breakpoints: Record<Breakpoint, string> = {
  sm: `@media screen and (min-width: ${screenSizes.sm}px)`,
  md: `@media screen and (min-width: ${screenSizes.md}px)`,
  lg: `@media screen and (min-width: ${screenSizes.lg}px)`,
  xl: `@media screen and (min-width: ${screenSizes.xl}px)`,
};

/**
 * Page paddings in rem
 * @example
 * .page {
 *   padding-inline-start: ${pagePaddings.sm};
 *   padding-inline-end: ${pagePaddings.sm};
 * }
 */
export const pagePaddings = {
  sm: '1.5rem',
  md: '2rem',
  lg: '5.25rem',
};

/**
 * Page padding declaration
 * Returns a responsive padding declaration for the page
 * @example
 * .page {
 *   ${pagePadding}
 * }
 */
export const pagePadding = css`
  padding-inline-start: var(--mrd-default-padding, ${pagePaddings.sm});
  padding-inline-end: var(--mrd-default-padding, ${pagePaddings.sm});
`;

export const defaultPaddingDeclaration = css`
  :root {
    --mrd-default-padding: ${pagePaddings.sm};
  }

  ${breakpoints.sm} {
    :root {
      --mrd-default-padding: ${pagePaddings.md};
    }
  }

  ${breakpoints.lg} {
    :root {
      --mrd-default-padding: ${pagePaddings.lg};
    }
  }
`;
