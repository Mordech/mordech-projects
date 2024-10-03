import { createTokenObject } from '../utils';

import { opacityEnum } from './opacity';

/**
 * Opacity levels
 *
 * @example
 * ...
 *   opacity: ${opacity.disabled};
 * ...
 */

export const opacity = createTokenObject(
  opacityEnum,
  'opacity',
) as typeof opacityEnum;
