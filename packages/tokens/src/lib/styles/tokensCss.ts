import {
  colorTheme,
  defaultPaddingDeclaration,
  elevation,
  fontFamilies,
  fontSizes,
  fontWeights,
  screenSizesRem,
} from '../../';
import { transitions } from '../transitions';
import { css, Token, tokensToCssVars } from '../utils';

export const tokensCss = css`
  [data-theme='light'],
  :root {
    ${tokensToCssVars(colorTheme.light, 'color')}
    ${tokensToCssVars(fontFamilies, 'font-family')}
    ${tokensToCssVars(fontSizes, 'font-size')}
    ${tokensToCssVars(fontWeights, 'font-weight')}
    ${tokensToCssVars(elevation, 'elevation')}
    ${tokensToCssVars(screenSizesRem, 'screen-size')}
    ${tokensToCssVars(transitions, 'transition')}
  }

  ${defaultPaddingDeclaration}

  /* Dark theme is under a flag */
    @media (prefers-color-scheme: dark) {
    [data-theme='prefers'] {
      ${tokensToCssVars(colorTheme.dark as unknown as Token, 'color')}
    }
  }

  [data-theme='dark'] {
    ${tokensToCssVars(colorTheme.dark as unknown as Token, 'color')}
  }
`;
