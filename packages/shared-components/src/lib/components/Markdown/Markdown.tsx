import React, { FC } from 'react';
import ReactMarkdown, { ReactMarkdownOptions } from 'react-markdown';
import { Highlight, InlineCode, Strong } from '../Typography';
import {
  MarkdownH1,
  MarkdownH2,
  MarkdownH3,
  MarkdownH4,
  MarkdownParagraph,
  Pre,
} from './Markdown.styles';

type MarkdownType = ReactMarkdownOptions & {
  children: string;
  asFragment?: boolean;
};

export const Markdown: FC<MarkdownType> = ({
  children,
  asFragment = false,
  ...rest
}) => (
  <ReactMarkdown
    components={{
      p: ({ children }) =>
        asFragment ? (
          // needed for functionality
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>{children}</>
        ) : (
          <MarkdownParagraph>{children}</MarkdownParagraph>
        ),
      em: ({ children }) => <Highlight>{children}</Highlight>,
      strong: ({ children }) => <Strong>{children}</Strong>,
      h1: ({ children }) => <MarkdownH1>{children}</MarkdownH1>,
      h2: ({ children }) => <MarkdownH2>{children}</MarkdownH2>,
      h3: ({ children }) => <MarkdownH3>{children}</MarkdownH3>,
      h4: ({ children }) => <MarkdownH4>{children}</MarkdownH4>,
      code: InlineCode,
      pre: Pre,
    }}
    {...rest}
  >
    {children}
  </ReactMarkdown>
);
