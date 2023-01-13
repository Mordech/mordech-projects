import { createTokenObject } from '../utils';

import { elevationEnum } from './elevation';

/**
 * Elevation levels
 *
 * @example
 * .elevated {
 *   box-shadow: ${elevation[0]};
 * }
 */

export const elevation = createTokenObject(
  elevationEnum,
  'elevation'
) as typeof elevationEnum;
