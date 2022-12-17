import { pxToRem } from '../utils';

import { createTokenObject } from './createTokenObject';

describe('createTokenObject', () => {
  it('should create a token object', () => {
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

    const result = createTokenObject(obj, 'test');

    expect(result).toEqual({
      color: {
        primary: 'var(--mrd-test-color-primary, red)',
        secondary: 'var(--mrd-test-color-secondary, blue)',
      },
      size: {
        small: 'var(--mrd-test-size-small, 1rem)',
        medium: 'var(--mrd-test-size-medium, 2rem)',
        large: 'var(--mrd-test-size-large, 3rem)',
      },
    });
  });

  it('should create a token object as a css var declaration', () => {
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

    const result = createTokenObject(obj, 'test', { type: 'declaration' });

    expect(result).toEqual({
      color: {
        primary: '--mrd-test-color-primary: red;',
        secondary: '--mrd-test-color-secondary: blue;',
      },
      size: {
        small: '--mrd-test-size-small: 1rem;',
        medium: '--mrd-test-size-medium: 2rem;',
        large: '--mrd-test-size-large: 3rem;',
      },
    });
  });

  it('should create a token object with the same values', () => {
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

    const result = createTokenObject(obj, 'test', { type: 'base' });

    expect(result).toEqual({
      color: {
        primary: 'red',
        secondary: 'blue',
      },
      size: {
        small: '1rem',
        medium: '2rem',
        large: '3rem',
      },
    });
  });

  it('should create a token object with a custom manipulateValue function', () => {
    const obj = {
      color: {
        primary: 'red',
        secondary: 'blue',
      },
      size: {
        small: 16,
        medium: 32,
        large: 48,
      },
    };

    const result = createTokenObject(obj, 'test', {
      manipulateValue: (value) =>
        typeof value !== 'number' ? value : pxToRem({ px: value }),
    });

    expect(result).toEqual({
      color: {
        primary: 'var(--mrd-test-color-primary, red)',
        secondary: 'var(--mrd-test-color-secondary, blue)',
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
      },
      size: {
        small: '--mrd-test-size-small: 1rem;',
        medium: '--mrd-test-size-medium: 2rem;',
        large: '--mrd-test-size-large: 3rem;',
      },
    });
  });

  it('should create a token object as a css variable when passing variable type', () => {
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

    const result = createTokenObject(obj, 'test', { type: 'variable' });

    expect(result).toEqual({
      color: {
        primary: 'var(--mrd-test-color-primary, red)',
        secondary: 'var(--mrd-test-color-secondary, blue)',
      },
      size: {
        small: 'var(--mrd-test-size-small, 1rem)',
        medium: 'var(--mrd-test-size-medium, 2rem)',
        large: 'var(--mrd-test-size-large, 3rem)',
      },
    });
  });
});
