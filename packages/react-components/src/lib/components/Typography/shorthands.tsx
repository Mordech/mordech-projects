import { FC } from 'react';

import {
  BodyTextType,
  CodeType,
  HeadlineType,
  ParagraphType,
  SpanType,
} from './types';
import { Typography } from './Typography';

// shorthand components for typography
export const Code = (props: CodeType) => (
  <Typography variant="code" {...props} />
);

export const InlineCode = (props: CodeType) => (
  <Typography variant="inlineCode" {...props} />
);

export const Headline = (props: HeadlineType) => (
  <Typography variant="headline" {...props} />
);

export const Paragraph = (props: ParagraphType) => (
  <Typography variant="paragraph" {...props} />
);

export const Span = (props: SpanType) => (
  <Typography variant="span" {...props} />
);

export const Strong: FC<SpanType> = (props) => (
  <Typography variant="strong" {...props} />
);

export const Highlight = (props: SpanType) => (
  <Typography variant="highlight" {...props} />
);

export const Subheading = (props: BodyTextType) => (
  <Typography variant="subheading" {...props} />
);
