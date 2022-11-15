import { css } from 'styled-components';

import { getThemeColors } from './utils/getThemeColors';
import { colorTheme } from './colorTheme';

export const cssColorVariables = css`
  [data-theme='light'],
  & {
    ${getThemeColors(colorTheme, 'light')}
  }

  [data-theme='dark'],
  [data-theme='prefers'] {
    @media (prefers-color-scheme: dark) {
      ${getThemeColors(colorTheme, 'dark')}
    }
  }
`;
