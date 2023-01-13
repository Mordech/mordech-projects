import { screenSizes } from './screenSizes';
import { Breakpoint } from './types';

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
