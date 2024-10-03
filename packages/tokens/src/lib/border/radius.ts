export type Radius = 100 | 200 | 250 | 300 | 400 | 600 | 800 | 1600 | 'round';

export const borderRadiusEnum: Record<Radius, string> = {
  100: '0.25rem',
  200: '0.5rem',
  250: '0.625rem',
  300: '0.75rem',
  400: '1rem',
  600: '1.5rem',
  800: '2rem',
  1600: '4rem',
  round: '9999rem',
};
