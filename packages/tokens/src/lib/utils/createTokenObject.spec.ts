import { pxToRem } from '../utils';

import { createTokenObject } from '.';

const obj = {
  color: {
    primary: 'red',
    secondary: 'blue',
    background: {
      base: 'green',
      onBase: 'yellow',
    },
  },
  size: {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  },
};

describe('createTokenObject', () => {
  it('should create a token object', () => {
    const result = createTokenObject(obj, 'test');

    expect(result).toEqual({
      color: {
        primary: 'var(--mrd-test-color-primary, red)',
        secondary: 'var(--mrd-test-color-secondary, blue)',
        background: {
          base: 'var(--mrd-test-color-background-base, green)',
          onBase: 'var(--mrd-test-color-background-on-base, yellow)',
        },
      },
      size: {
        small: 'var(--mrd-test-size-small, 1rem)',
        medium: 'var(--mrd-test-size-medium, 2rem)',
        large: 'var(--mrd-test-size-large, 3rem)',
      },
    });
  });

  it('should create a token object as a css var declaration', () => {
    const result = createTokenObject(obj, 'test', { type: 'declaration' });

    expect(result).toEqual({
      color: {
        primary: '--mrd-test-color-primary: red;',
        secondary: '--mrd-test-color-secondary: blue;',
        background: {
          base: '--mrd-test-color-background-base: green;',
          onBase: '--mrd-test-color-background-on-base: yellow;',
        },
      },
      size: {
        small: '--mrd-test-size-small: 1rem;',
        medium: '--mrd-test-size-medium: 2rem;',
        large: '--mrd-test-size-large: 3rem;',
      },
    });
  });

  it('should create a token object with the same values', () => {
    const result = createTokenObject(obj, 'test', { type: 'base' });

    expect(result).toEqual({
      color: {
        primary: 'red',
        secondary: 'blue',
        background: {
          base: 'green',
          onBase: 'yellow',
        },
      },
      size: {
        small: '1rem',
        medium: '2rem',
        large: '3rem',
      },
    });
  });

  it('should create a token object with a custom manipulateValue function', () => {
    const result = createTokenObject(obj, 'test', {
      manipulateValue: (value) =>
        typeof value !== 'number' ? value : pxToRem({ px: value }),
    });

    expect(result).toEqual({
      color: {
        primary: 'var(--mrd-test-color-primary, red)',
        secondary: 'var(--mrd-test-color-secondary, blue)',
        background: {
          base: 'var(--mrd-test-color-background-base, green)',
          onBase: 'var(--mrd-test-color-background-on-base, yellow)',
        },
      },
      size: {
        small: 'var(--mrd-test-size-small, 1rem)',
        medium: 'var(--mrd-test-size-medium, 2rem)',
        large: 'var(--mrd-test-size-large, 3rem)',
      },
    });
  });

  it('should create a token object with a custom manipulateValue function as a declaration', () => {
    const obj = {
      color: {
        primary: 'red',
        secondary: 'blue',
        background: {
          base: 'green',
          onBase: 'yellow',
        },
      },
      size: {
        small: 16,
        medium: 32,
        large: 48,
      },
    };

    const result = createTokenObject(obj, 'test', {
      type: 'declaration',
      manipulateValue: (value) =>
        typeof value !== 'number' ? value : pxToRem({ px: value }),
    });

    expect(result).toEqual({
      color: {
        primary: '--mrd-test-color-primary: red;',
        secondary: '--mrd-test-color-secondary: blue;',
        background: {
          base: '--mrd-test-color-background-base: green;',
          onBase: '--mrd-test-color-background-on-base: yellow;',
        },
      },
      size: {
        small: '--mrd-test-size-small: 1rem;',
        medium: '--mrd-test-size-medium: 2rem;',
        large: '--mrd-test-size-large: 3rem;',
      },
    });
  });

  it('should create a token object as a css variable when passing variable type', () => {
    const result = createTokenObject(obj, 'test', { type: 'variable' });

    expect(result).toEqual({
      color: {
        primary: 'var(--mrd-test-color-primary, red)',
        secondary: 'var(--mrd-test-color-secondary, blue)',
        background: {
          base: 'var(--mrd-test-color-background-base, green)',
          onBase: 'var(--mrd-test-color-background-on-base, yellow)',
        },
      },
      size: {
        small: 'var(--mrd-test-size-small, 1rem)',
        medium: 'var(--mrd-test-size-medium, 2rem)',
        large: 'var(--mrd-test-size-large, 3rem)',
      },
    });
  });
});
