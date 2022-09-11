import React, { FC } from 'react';
import ReactMarkdown, { ReactMarkdownOptions } from 'react-markdown';
import { Headline, Highlight, Paragraph, Strong } from '../Typography';

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
          <Paragraph size="inherit">{children}</Paragraph>
        ),
      em: ({ children }) => <Highlight>{children}</Highlight>,
      strong: ({ children }) => <Strong>{children}</Strong>,
      h1: ({ children }) => (
        <Headline as="h1" size={4}>
          {children}
        </Headline>
      ),
      h2: ({ children }) => (
        <Headline as="h2" size={4}>
          {children}
        </Headline>
      ),
      h3: ({ children }) => (
        <Headline as="h3" size={3}>
          {children}
        </Headline>
      ),
      h4: ({ children }) => (
        <Headline as="h4" size={2}>
          {children}
        </Headline>
      ),
    }}
    {...rest}
  >
    {children}
  </ReactMarkdown>
);
