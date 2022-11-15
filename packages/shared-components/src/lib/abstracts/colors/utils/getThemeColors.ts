import { css } from 'styled-components';

import { ColorTheme, Theme } from '../types';

import { getCssVarNames, getCssVarValues } from './';

export const getThemeColors = (colorTheme: ColorTheme, theme: Theme) => {
  const cssVarNames = getCssVarNames(colorTheme);
  const cssVarValues = getCssVarValues(colorTheme, theme);

  return css`
    ${cssVarNames.map((name, index) => {
      return `${name}: ${cssVarValues[index]};`;
    })}
  `;
};
