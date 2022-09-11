import { CSSProperties } from 'styled-components';

export type Colors =
  | 'black'
  | 'dark'
  | 'deep'
  | 'deeper'
  | 'deepest'
  | 'light'
  | 'lightest'
  | 'white'
  | 'blue'
  | 'red'
  | 'highlightYellow'
  | 'highlightPink'
  | 'highlightGreen'
  | 'transparent'
  | 'inherit'
  | 'initial'
  | 'revert';

export const colors: Record<Colors, NonNullable<CSSProperties['color']>> = {
  black: '#0A0B0D',
  dark: '#272931',
  deepest: '#43434C',
  deeper: '#53535F',
  deep: '#A1A3AA',
  light: '#E6E8EC',
  lightest: '#F9F9F9',
  white: '#ffffff',
  blue: '#486ff0',
  red: '#f04861',
  highlightYellow: '#f7ff9a',
  highlightPink: '#fed2dc',
  highlightGreen: '#d2ff99',
  transparent: 'transparent',
  inherit: 'inherit',
  revert: 'revert',
  initial: 'initial',
};
