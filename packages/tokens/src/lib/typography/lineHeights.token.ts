import { createTokenObject } from '../utils';

import { lineHeightsEnum } from './lineHeights';

/**
 * Line heights in percentages
 * @example
 * .title {
 *  line-height: ${lineHeights[4]};
 * }
 * // line-height: 115%;
 */
export const lineHeights = createTokenObject(
  lineHeightsEnum,
  'line-height',
) as typeof lineHeightsEnum;
