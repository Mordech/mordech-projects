import { Token } from '.';

export type ManipulateValueFunction = (
  // eslint-disable-next-line no-unused-vars
  value: string | number
) => string | number;

export interface CreateCssVarObjectOptions {
  manipulateValue?: ManipulateValueFunction;
  declaration?: boolean;
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

      options?.declaration
        ? (acc[key] = currentValue)
        : (acc[key] = `var(--mrd-${prefix}-${key}, ${currentValue});`);
    }
    return acc;
  }, {} as Token);
};

// export const colors: typeof colorTheme.light = Object.keys(
//   colorThemeLight
// ).reduce((acc: Palette, color: string) => {
//   acc[color] = Object.keys(colorThemeLight[color]).reduce((acc, shade) => {
//     acc[
//       shade
//     ] = `var(--color-${color}-${shade}, ${colorThemeLight[color][shade]})`;
//     return acc;
//   }, {} as Palette[typeof color]);
//   return acc as typeof colorTheme.light;
// }, {} as typeof colorTheme.light);
