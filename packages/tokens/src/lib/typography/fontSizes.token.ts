import { createTokenObject } from '../utils';

import { fontSizesEnum } from './fontSizes';

/**
 * Font sizes in rem
 * @example
 * .title {
 *  font-size: ${fontSizes[4]};
 * }
 * // font-size: 3rem;
 */
export const fontSizes = createTokenObject(
  fontSizesEnum,
  'font-size'
) as typeof fontSizesEnum;
