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

const screenSizesToRem: ManipulateValueFunction = (value) => {
  if (typeof value !== 'number') return value;
  return pxToRem({ px: value, baseFontSize: baseFontSize });
};

export const screenSizesRem: typeof screenSizes = createTokenObject(
  screenSizes,
  'screen-size',
  { manipulateValue: screenSizesToRem, declaration: true }
) as typeof screenSizes;

export const breakpoints: Record<Breakpoint, string> = {
  sm: `@media screen and (min-width: ${screenSizes.sm}px)`,
  md: `@media screen and (min-width: ${screenSizes.md}px)`,
  lg: `@media screen and (min-width: ${screenSizes.lg}px)`,
  xl: `@media screen and (min-width: ${screenSizes.xl}px)`,
};

export const pagePadding = css`
  padding-inline-start: var(--mrd-default-padding);
  padding-inline-end: var(--mrd-default-padding);
`;

export const defaultPaddingDeclaration = css`
  :root {
    --mrd-default-padding: 1.5rem;
  }

  ${breakpoints.sm} {
    :root {
      --mrd-default-padding: 2rem;
    }
  }

  ${breakpoints.lg} {
    :root {
      --mrd-default-padding: 5.25rem;
    }
  }
`;
