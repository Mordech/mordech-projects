import { HTMLAttributes, ReactNode } from 'react';
import { FontFamily, FontSizes, FontWeights } from '@mordech/tokens';
import { CSSProperties } from 'styled-components';

export interface TypographyProps {
  srOnly?: boolean;
  size?: FontSizes;
  weight?: FontWeights;
  color?: CSSProperties['color'];
  lineHeight?: CSSProperties['lineHeight'];
  fontFamily?: FontFamily;
  align?: CSSProperties['textAlign'];
  whiteSpace?: CSSProperties['whiteSpace'];
  highlight?: CSSProperties['backgroundColor'];
}

export type CommonTypographyType = HTMLAttributes<HTMLHtmlElement> &
  TypographyProps & { children?: ReactNode };

export type BodyTextType = CommonTypographyType & {
  variant?: 'body' | 'subheading';
  asElement?: 'p' | 'span' | 'strong' | 'em';
};

export type HeadlineType = CommonTypographyType & {
  variant?: 'headline';
  asElement: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export type ParagraphType = CommonTypographyType & {
  variant?: 'paragraph' | 'body';
  asElement?: 'p';
};

export type SpanType = CommonTypographyType & {
  variant?: 'span' | 'strong' | 'highlight';
  asElement?: 'span' | 'strong' | 'em';
};

export type CodeType = CommonTypographyType & {
  variant?: 'code' | 'inlineCode';
  asElement?: 'code';
};

export type TypographyType =
  | BodyTextType
  | HeadlineType
  | ParagraphType
  | SpanType
  | CodeType;
