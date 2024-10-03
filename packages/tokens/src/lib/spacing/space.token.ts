import { createTokenObject } from '../utils';

import { spaceEnum } from './space';

/**
 * Space increments in rem
 *
 * @example
 * .card {
 *  gap: ${space[200]};
 * }
 * // font-size: 0.5rem;
 */
export const space = createTokenObject(spaceEnum, 'space') as typeof spaceEnum;
