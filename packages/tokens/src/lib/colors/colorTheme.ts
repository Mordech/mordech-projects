import { palette } from './palette';

/**
 * Color theme
 * @description
 * The color theme is a set of colors that are used to create a consistent
 * look and feel across the application.
 *
 * Use this object to declare a static color.
 * To declare a dynamic colors that can change base on theme use `colors`.
 *
 * @example
 * import { colorTheme } from '@mrd/tokens';
 * colorTheme.light.primary.base;
 * // '#272931'
 */
export const colorTheme = {
  light: {
    primary: {
      base: palette['primary']['20'],
      onBase: palette['primary']['99'],
      container: palette['primary']['90'],
      onContainer: palette['primary']['20'],
    },
    secondary: {
      base: palette['secondary']['30'],
      onBase: palette['secondary']['99'],
      container: palette['secondary']['90'],
      onContainer: palette['secondary']['10'],
    },
    success: {
      base: palette['success']['30'],
      onBase: palette['success']['99'],
      container: palette['success']['90'],
      onContainer: palette['success']['10'],
    },
    error: {
      base: palette['error']['30'],
      onBase: palette['error']['99'],
      container: palette['error']['90'],
      onContainer: palette['error']['10'],
    },
    background: {
      base: palette['neutral']['99'],
      onBase: palette['neutral']['10'],
      onBaseVariant: palette['neutral']['20'],
      surface: palette['primary']['90'],
      onSurface: palette['primary']['10'],
      surfaceVariant: palette['primary']['80'],
      onSurfaceVariant: palette['primary']['10'],
    },
    highlight: {
      yellow: palette['highlight']['yellowLight'],
      pink: palette['highlight']['pinkLight'],
      green: palette['highlight']['greenLight'],
      neutral: palette['neutral']['90'],
    },
    disabled: {
      base: palette['primary']['60'],
      onBase: palette['primary']['90'],
      container: palette['primary']['90'],
      onContainer: palette['primary']['60'],
    },
    outline: palette['neutral']['80'],
    outlineVariant: palette['neutral']['60'],
  },

  dark: {
    primary: {
      base: palette['primary']['95'],
      onBase: palette['primary']['10'],
      container: palette['primary']['20'],
      onContainer: palette['primary']['99'],
    },
    secondary: {
      base: palette['secondary']['80'],
      onBase: palette['secondary']['03'],
      container: palette['secondary']['20'],
      onContainer: palette['secondary']['95'],
    },
    success: {
      base: palette['success']['80'],
      onBase: palette['success']['03'],
      container: palette['success']['20'],
      onContainer: palette['success']['95'],
    },
    error: {
      base: palette['error']['70'],
      onBase: palette['error']['10'],
      container: palette['error']['10'],
      onContainer: palette['error']['80'],
    },
    background: {
      base: palette['neutral']['10'],
      onBase: palette['neutral']['95'],
      onBaseVariant: palette['neutral']['80'],
      surface: palette['primary']['20'],
      onSurface: palette['primary']['95'],
      surfaceVariant: palette['primary']['30'],
      onSurfaceVariant: palette['primary']['95'],
    },
    highlight: {
      yellow: palette['highlight']['yellowDark'],
      pink: palette['highlight']['pinkDark'],
      green: palette['highlight']['greenDark'],
      neutral: palette['neutral']['20'],
    },
    disabled: {
      base: palette['neutral']['60'],
      onBase: palette['neutral']['30'],
      container: palette['neutral']['40'],
      onContainer: palette['neutral']['70'],
    },
    outline: palette['neutral']['30'],
    outlineVariant: palette['neutral']['40'],
  },
};
