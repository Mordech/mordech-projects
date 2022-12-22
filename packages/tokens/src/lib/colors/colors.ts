import { createTokenObject } from '../utils';

import { colorTheme } from './colorTheme';

/**
 * Color tokens
 * @description
 * The color tokens are a set of colors that are used to create a consistent
 * look and feel across the application.
 *
 * Use this object to declare a dynamic color.
 * Colors are dynamic only if you have a data-theme attribute on the html element.
 *
 * @example
 * import { colors } from '@mrd/tokens';
 * colors.color.primary.base;
 * // 'var(--mrd-color-primary-base, #272931)'
 */
export const colors: typeof colorTheme.light = createTokenObject(
  colorTheme.light,
  'color'
) as typeof colorTheme.light;
