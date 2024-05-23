export type FontSizes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 'inherit';

export const fontSizesEnum: Record<FontSizes, string> = {
  0: '0.875rem',
  1: '1rem',
  2: '1.5rem',
  3: '2.25rem',
  4: '3rem',
  5: '3.375rem',
  6: '4rem',
  inherit: 'inherit',
};
