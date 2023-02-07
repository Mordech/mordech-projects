import { colors } from '@mordech/tokens';

import { TypographyProps, TypographyType } from './types';

export const defaultTypographyProps: Required<TypographyProps> = {
  srOnly: false,
  size: 1,
  weight: 'regular',
  color: colors.primary.base,
  lineHeight: '1.5',
  fontFamily: 'sans',
  align: 'inherit',
  whiteSpace: 'revert',
  highlight: 'revert',
};

export const variantDefaults: Record<
  Exclude<TypographyType['variant'], undefined>,
  TypographyType
> = {
  headline: {
    lineHeight: '1.15',
    size: 2,
    fontFamily: 'serif',
  },
  subheading: { lineHeight: '1.25', weight: 'medium' },
  body: {},
  paragraph: { asElement: 'p' },
  span: { asElement: 'span', lineHeight: 'inherit' },
  code: { asElement: 'code', fontFamily: 'code' },
  inlineCode: {
    asElement: 'code',
    lineHeight: 'inherit',
    fontFamily: 'code',
    highlight: colors.highlight.neutral,
  },
  strong: {
    asElement: 'strong',
    lineHeight: 'inherit',
    weight: 'bold',
    fontFamily: 'inherit',
    size: 'inherit',
  },
  highlight: {
    asElement: 'em',
    lineHeight: 'inherit',
    highlight: colors.highlight.yellow,
    fontFamily: 'inherit',
    size: 'inherit',
  },
};
