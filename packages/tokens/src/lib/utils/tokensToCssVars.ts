import { Token } from './';

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
