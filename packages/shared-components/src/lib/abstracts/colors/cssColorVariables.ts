import { css } from 'styled-components';

import { colorTheme } from './colorTheme';
import { getThemeColors } from './utils';

export const cssColorVariables = css`
  ${getThemeColors(colorTheme, 'light')}

  [data-theme='support-dark'] {
    @media (prefers-color-scheme: dark) {
      ${getThemeColors(colorTheme, 'dark')}
    }
  }
`;
