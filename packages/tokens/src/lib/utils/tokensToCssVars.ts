export type Token = { [key: string]: Token | string | number };

export const tokensToCssVars = (obj: Token, prefix: string): string => {
  return Object.keys(obj)
    .map((key) => {
      const currentValue = obj[key];
      if (typeof currentValue === 'object') {
        return tokensToCssVars(currentValue, `${prefix}-${key}`);
      }
      return `--${prefix}-${key}: ${obj[key]};`;
    })
    .join('');
};
