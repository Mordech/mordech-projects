import { createTokenObject } from '../utils';

import { colorTheme } from './colorTheme';

export const colors: typeof colorTheme.light = createTokenObject(
  colorTheme.light,
  'color'
) as typeof colorTheme.light;
