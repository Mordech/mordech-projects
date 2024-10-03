import { createTokenObject } from '../utils';

import { borderRadiusEnum } from './radius';

/**
 * Border radius in rem
 *
 * @example
 * .card {
 *  border-radius: ${radius[100]};
 * }
 * // font-size: 0.25rem;
 */
export const borderRadius = createTokenObject(
  borderRadiusEnum,
  'radius',
) as typeof borderRadiusEnum;
