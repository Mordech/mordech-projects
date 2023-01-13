import { createTokenObject } from '../utils';

import { FontWeights, fontWeightsEnum } from './fontWeights';

/**
 * Font weights
 * @example
 * .title {
 *   font-weight: ${fontWeights.bold};
 * }
 * // font-weight: 700;
 */
export const fontWeights = createTokenObject(
  fontWeightsEnum,
  'font-weight'
) as Record<FontWeights, string>;
