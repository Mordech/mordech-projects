import {
  borderRadiusEnum,
  colorTheme,
  defaultPaddingDeclaration,
  elevationEnum,
  fontFamiliesEnum,
  fontSizesEnum,
  fontWeightsEnum,
  lineHeightsEnum,
  opacityEnum,
  screenSizesRemEnum,
  spaceEnum,
  transitionsEnum,
} from '../../';
import { css, Token, tokensToCssVars } from '../utils';

export const tokensCss = css`
  [data-theme='light'],
  :root {
    ${tokensToCssVars(colorTheme.light, 'color')}
    ${tokensToCssVars(fontFamiliesEnum, 'font-family')}
    ${tokensToCssVars(fontSizesEnum, 'font-size')}
    ${tokensToCssVars(lineHeightsEnum, 'line-height')}
    ${tokensToCssVars(fontWeightsEnum, 'font-weight')}
    ${tokensToCssVars(elevationEnum, 'elevation')}
    ${tokensToCssVars(screenSizesRemEnum, 'screen-size')}
    ${tokensToCssVars(transitionsEnum, 'transition')}
    ${tokensToCssVars(opacityEnum, 'opacity')}
    ${tokensToCssVars(borderRadiusEnum, 'border-radius')}
    ${tokensToCssVars(spaceEnum, 'space')}
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
