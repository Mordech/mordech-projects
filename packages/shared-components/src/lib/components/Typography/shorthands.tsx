import React, { FC } from 'react';
import { colors } from '../../abstracts';
import {
  BodyTextType,
  CodeType,
  HeadlineType,
  ParagraphType,
  SpanType,
} from './types';
import { Typography } from './Typography';

// shorthand components for typography
export const Code: FC<CodeType> = (props) => (
  <Typography variant="code" {...props} />
);

export const InlineCode: FC<CodeType> = (props) => (
  <Typography variant="inlineCode" {...props} />
);

export const Headline: FC<HeadlineType> = (props) => (
  <Typography variant="headline" {...props} />
);

export const Paragraph: FC<ParagraphType> = (props) => (
  <Typography variant="paragraph" {...props} />
);

export const Span: FC<SpanType> = (props) => (
  <Typography variant="span" {...props} />
);

export const Strong: FC<SpanType> = (props) => (
  <Typography variant="strong" {...props} />
);

export const Highlight: FC<SpanType> = (props) => (
  <Typography variant="highlight" {...props} />
);

export const Subheading: FC<BodyTextType> = (props) => (
  <Typography variant="subheading" {...props} />
);
