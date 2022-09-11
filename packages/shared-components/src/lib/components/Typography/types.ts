import { HTMLAttributes, ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import { FontFamily, FontSizes, FontWeights } from '../../abstracts';

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
  as?: 'p' | 'span' | 'strong' | 'em';
};

export type HeadlineType = CommonTypographyType & {
  variant?: 'headline';
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export type ParagraphType = CommonTypographyType & {
  variant?: 'paragraph' | 'body';
  as?: 'p';
};

export type SpanType = CommonTypographyType & {
  variant?: 'span' | 'strong' | 'highlight';
  as?: 'span' | 'strong' | 'em';
};

export type CodeType = CommonTypographyType & {
  variant?: 'code' | 'inlineCode';
  as?: 'code';
};

export type TypographyType =
  | BodyTextType
  | HeadlineType
  | ParagraphType
  | SpanType
  | CodeType;
