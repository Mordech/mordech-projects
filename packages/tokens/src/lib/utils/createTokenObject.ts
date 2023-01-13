import { Token } from '.';

export type ManipulateValueFunction = (
  // eslint-disable-next-line no-unused-vars
  value: string | number
) => string | number;

export interface CreateCssVarObjectOptions {
  manipulateValue?: ManipulateValueFunction;
  type?: 'base' | 'variable' | 'declaration';
}

/**
 * createTokenObject
 *
 * This function takes an object, and creates a new object that has the same keys and values.
 * The difference is that the values are manipulated in some way. It can also create CSS declaration strings.
 *
 * @param obj - The object to manipulate.
 * @param prefix - The prefix to use for the CSS variable name.
 * @param options - An object with options.
 * @param options.type - The type of manipulation to perform on the values.
 * @param options.manipulateValue - A function that will be used to manipulate the values.
 * @returns An object with the same keys and values, but with the values manipulated in some way.
 * @example
 * const tokens = {
 * color: {
 *    primary: 'red',
 *    secondary: 'blue',
 *  },
 * };
 * createTokenObject(tokens, 'color');
 * // {
 * //  color: {
 * //    primary: 'var(--mrd-color-primary, red)',
 * //    secondary: 'var(--mrd-color-secondary, blue)',
 * //  },
 * // }
 * @example
 * createTokenObject(tokens, 'color', { type: 'declaration' });
 * // {
 * //  color: {
 * //    primary: '--mrd-color-primary: red;',
 * //    secondary: '--mrd-color-secondary: blue;',
 * //  },
 * // }
 * @example
 * createTokenObject(tokens, 'color', { type: 'base' });
 * // {
 * //  color: {
 * //    primary: 'red',
 * //    secondary: 'blue',
 * //  },
 * // }
 * @example
 * createTokenObject(tokens, 'color', {
 *   manipulateValue: (value) => value.toUpperCase(),
 * });
 * // {
 * //  color: {
 * //    primary: 'var(--mrd-color-primary, RED)',
 * //    secondary: 'var(--mrd-color-secondary, BLUE)',
 * //  },
 * // }
 */
export const createTokenObject = (
  obj: Token,
  prefix: string,
  options?: CreateCssVarObjectOptions
): Token => {
  return Object.keys(obj).reduce((acc, key) => {
    const currentKey = key;
    let currentValue = obj[key];
    if (typeof currentValue === 'object') {
      return {
        ...acc,
        [currentKey]: createTokenObject(
          currentValue,
          `${prefix}-${key}`,
          options
        ),
      };
    } else {
      if (options?.manipulateValue) {
        currentValue = options.manipulateValue(currentValue);
      }

      switch (options?.type) {
        case 'base':
          return {
            ...acc,
            [currentKey]: currentValue,
          };
        case 'declaration':
          return {
            ...acc,
            [currentKey]: `--mrd-${prefix}-${key}: ${currentValue};`,
          };
        default:
          return {
            ...acc,
            [currentKey]: `var(--mrd-${prefix}-${key}, ${currentValue})`,
          };
      }
    }
  }, {});
};
