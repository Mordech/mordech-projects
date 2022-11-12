import { colorTheme } from './colorTheme';
import { getCssVarNames, getCssVarValues } from './utils';

const cssVariableNames = getCssVarNames(colorTheme);
const cssVariableValues = getCssVarValues(colorTheme, 'light');

export const colors: typeof colorTheme.light = {
  primary: {
    base: `var(${cssVariableNames[0]}, ${cssVariableValues[0]})`,
    on: `var(${cssVariableNames[1]}, ${cssVariableValues[1]})`,
    container: `var(${cssVariableNames[2]}, ${cssVariableValues[2]})`,
    onContainer: `var(${cssVariableNames[3]}, ${cssVariableValues[3]})`,
  },
  secondary: {
    base: `var(${cssVariableNames[4]}, ${cssVariableValues[4]})`,
    on: `var(${cssVariableNames[5]}, ${cssVariableValues[5]})`,
    container: `var(${cssVariableNames[6]}, ${cssVariableValues[6]})`,
    onContainer: `var(${cssVariableNames[7]}, ${cssVariableValues[7]})`,
  },
  success: {
    base: `var(${cssVariableNames[8]}, ${cssVariableValues[8]})`,
    on: `var(${cssVariableNames[9]}, ${cssVariableValues[9]})`,
    container: `var(${cssVariableNames[10]}, ${cssVariableValues[10]})`,
    onContainer: `var(${cssVariableNames[11]}, ${cssVariableValues[11]})`,
  },
  error: {
    base: `var(${cssVariableNames[12]}, ${cssVariableValues[12]})`,
    on: `var(${cssVariableNames[13]}, ${cssVariableValues[13]})`,
    container: `var(${cssVariableNames[14]}, ${cssVariableValues[14]})`,
    onContainer: `var(${cssVariableNames[15]}, ${cssVariableValues[15]})`,
  },
  background: {
    base: `var(${cssVariableNames[16]}, ${cssVariableValues[16]})`,
    on: `var(${cssVariableNames[17]}, ${cssVariableValues[17]})`,
    surface: `var(${cssVariableNames[18]}, ${cssVariableValues[18]})`,
    onSurface: `var(${cssVariableNames[19]}, ${cssVariableValues[19]})`,
  },
  highlight: {
    yellow: `var(${cssVariableNames[20]}, ${cssVariableValues[20]})`,
    pink: `var(${cssVariableNames[21]}, ${cssVariableValues[21]})`,
    green: `var(${cssVariableNames[22]}, ${cssVariableValues[22]})`,
    neutral: `var(${cssVariableNames[23]}, ${cssVariableValues[23]})`,
  },
  disabled: {
    base: `var(${cssVariableNames[24]}, ${cssVariableValues[24]})`,
    on: `var(${cssVariableNames[25]}, ${cssVariableValues[25]})`,
    container: `var(${cssVariableNames[26]}, ${cssVariableValues[26]})`,
    onContainer: `var(${cssVariableNames[27]}, ${cssVariableValues[27]})`,
  },
};
