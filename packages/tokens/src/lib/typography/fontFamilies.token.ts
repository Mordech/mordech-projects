import { createTokenObject } from '../utils';

import { fontFamiliesEnum } from './fontFamilies';

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
export const fontFamilies = createTokenObject(
  fontFamiliesEnum,
  'font-family'
) as typeof fontFamiliesEnum;
