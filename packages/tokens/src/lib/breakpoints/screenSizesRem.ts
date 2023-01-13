import { createTokenObject } from '../utils';

import { screenSizesToRem } from './utils/screenSizesToRem';
import { screenSizes } from './screenSizes';
import { Breakpoint } from '.';

export const screenSizesRemEnum: typeof screenSizes = createTokenObject(
  screenSizes,
  'screen-size',
  { manipulateValue: screenSizesToRem, type: 'base' }
) as typeof screenSizes;

/**
 * Breakpoint screen sizes in rem
 */
export const screenSizesRem = createTokenObject(
  screenSizes,
  'screen-size'
) as Record<Breakpoint, string>;
