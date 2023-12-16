import { kebabize } from './kabebize';
import { Token } from './types';

/**
 * Converts a token object to a string of CSS variables
 * @param token The token object
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
export const tokensToCssVars = (token: Token, prefix: string): string => {
  return Object.keys(token)
    .map((key) => {
      const currentValue = token[key];
      if (typeof currentValue === 'object') {
        return tokensToCssVars(currentValue, `${prefix}-${key}`);
      }
      return `--mrd-${kebabize(prefix)}-${kebabize(key)}: ${token[key]};`;
    })
    .join('');
};
