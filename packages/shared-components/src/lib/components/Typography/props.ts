import { colors } from '../../abstracts';
import { TypographyProps, TypographyType } from './types';

export const defaultTypographyProps: Required<TypographyProps> = {
  srOnly: false,
  size: 1,
  weight: 'regular',
  color: colors.dark,
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
  span: { asElement: 'span' },
  code: { asElement: 'code', fontFamily: 'code' },
  inlineCode: {
    asElement: 'code',
    fontFamily: 'code',
    highlight: colors.light,
  },
  strong: {
    asElement: 'strong',
    weight: 'bold',
    fontFamily: 'inherit',
    size: 'inherit',
  },
  highlight: {
    asElement: 'em',
    highlight: colors.highlightYellow,
    fontFamily: 'inherit',
    size: 'inherit',
  },
};
