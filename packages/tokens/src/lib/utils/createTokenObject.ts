import { Token } from '.';

export type ManipulateValueFunction = (
  // eslint-disable-next-line no-unused-vars
  value: string | number
) => string | number;

export interface CreateCssVarObjectOptions {
  manipulateValue?: ManipulateValueFunction;
  type?: 'base' | 'variable' | 'declaration';
}

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
  }, {} as Token);
};
