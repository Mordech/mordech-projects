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

// TODO map number to string in rem for breakpoints

export const breakpoints: Record<Breakpoint, string> = {
  sm: `@media screen and (min-width: ${screenSizes.sm}px)`,
  md: `@media screen and (min-width: ${screenSizes.md}px)`,
  lg: `@media screen and (min-width: ${screenSizes.lg}px)`,
  xl: `@media screen and (min-width: ${screenSizes.xl}px)`,
};

export const pagePadding = `
  padding-inline: var(--default-padding);
`;
