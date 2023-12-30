import { tokensToCssVars } from './tokensToCssVars';

describe('tokensToCssVars', () => {
  it('should convert tokens to css variables', () => {
    const obj = {
      color: {
        primary: 'red',
        secondary: 'blue',
      },
      size: {
        small: '1rem',
        medium: '2rem',
        large: '3rem',
      },
    };

    const result = tokensToCssVars(obj, 'test');

    expect(result).toBe(
      '--mrd-test-color-primary: red;--mrd-test-color-secondary: blue;--mrd-test-size-small: 1rem;--mrd-test-size-medium: 2rem;--mrd-test-size-large: 3rem;',
    );
  });
});
