import { palette } from './palette';

export const colorTheme = {
  light: {
    primary: {
      base: palette['primary']['20'],
      on: palette['primary']['99'],
      container: palette['primary']['95'],
      onContainer: palette['primary']['20'],
    },
    secondary: {
      base: palette['secondary']['40'],
      on: palette['secondary']['99'],
      container: palette['secondary']['90'],
      onContainer: palette['secondary']['10'],
    },
    success: {
      base: palette['success']['30'],
      on: palette['success']['99'],
      container: palette['success']['90'],
      onContainer: palette['success']['20'],
    },
    error: {
      base: palette['error']['40'],
      on: palette['error']['99'],
      container: palette['error']['90'],
      onContainer: palette['error']['10'],
    },
    background: {
      base: palette['primary']['99'],
      on: palette['primary']['20'],
      surface: palette['primary']['90'],
      onSurface: palette['primary']['20'],
    },
    highlight: {
      yellow: palette['highlight']['yellowLight'],
      pink: palette['highlight']['pinkLight'],
      green: palette['highlight']['greenLight'],
      neutral: palette['neutral']['90'],
    },
    disabled: {
      base: palette['primary']['90'],
      on: palette['primary']['30'],
      container: palette['primary']['80'],
      onContainer: palette['primary']['60'],
    },
  },

  dark: {
    primary: {
      base: palette['primary']['99'],
      on: palette['primary']['20'],
      container: palette['primary']['10'],
      onContainer: palette['primary']['90'],
    },
    secondary: {
      base: palette['secondary']['80'],
      on: palette['secondary']['20'],
      container: palette['secondary']['30'],
      onContainer: palette['secondary']['90'],
    },
    success: {
      base: palette['success']['95'],
      on: palette['success']['10'],
      container: palette['success']['20'],
      onContainer: palette['success']['90'],
    },
    error: {
      base: palette['error']['70'],
      on: palette['error']['20'],
      container: palette['error']['30'],
      onContainer: palette['error']['90'],
    },
    background: {
      base: palette['neutral']['10'],
      on: palette['neutral']['95'],
      surface: palette['neutral']['20'],
      onSurface: palette['neutral']['90'],
    },
    highlight: {
      yellow: palette['highlight']['yellowDark'],
      pink: palette['highlight']['pinkDark'],
      green: palette['highlight']['greenDark'],
      neutral: palette['neutral']['20'],
    },
    disabled: {
      base: palette['neutral']['20'],
      on: palette['neutral']['80'],
      container: palette['neutral']['30'],
      onContainer: palette['neutral']['60'],
    },
  },
};
