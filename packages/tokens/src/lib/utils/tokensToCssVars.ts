import { Token } from './';
/**
 * Converts a token object to a string of CSS variables
 * @param obj The token object
 * @param prefix The prefix to use for the CSS variables (e.g. 'color')
 * @returns A string of CSS variables
 * @example
 * const tokens = {
 *  color: {
 *    primary: 'red',
 *    secondary: 'blue',
 *  },
 * };
 * tokensToCssVars(tokens, 'mrd');
 * // --mrd-color-primary: red;
 * // --mrd-color-secondary: blue;
 */
export const tokensToCssVars = (obj: Token, prefix: string): string => {
  return Object.keys(obj)
    .map((key) => {
      const currentValue = obj[key];
      if (typeof currentValue === 'object') {
        return tokensToCssVars(currentValue, `${prefix}-${key}`);
      }
      return `--mrd-${prefix}-${key}: ${obj[key]};`;
    })
    .join('');
};
