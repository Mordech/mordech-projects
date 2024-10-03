export type Spaces =
  | 0
  | 50
  | 100
  | 200
  | 300
  | 400
  | 600
  | 800
  | 1200
  | 1600
  | 2100
  | 3200
  | 6400;

export const spaceEnum: Record<Spaces, string> = {
  0: '0',
  50: '0.125rem',
  100: '0.25rem',
  200: '0.5rem',
  300: '0.75rem',
  400: '1rem',
  600: '1.5rem',
  800: '2rem',
  1200: '3rem',
  1600: '4rem',
  2100: '5.25rem',
  3200: '8rem',
  6400: '16rem',
};
