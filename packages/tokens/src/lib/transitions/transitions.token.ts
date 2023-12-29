import { createTokenObject } from '../utils';

import { transitionsEnum } from './transitions';

/**
 * Transitions
 * @example
 * .transition {
 *   transition: all ${transitions.default};
 * }
 * // transition: all 0.3s ease-in-out;
 */
export const transitions = createTokenObject(
  transitionsEnum,
  'transition',
) as typeof transitionsEnum;
