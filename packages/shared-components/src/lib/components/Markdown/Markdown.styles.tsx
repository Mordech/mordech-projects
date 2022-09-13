import styled from 'styled-components';
import { Headline, Paragraph } from '../Typography';

export const Pre = styled.pre`
  & > * {
    display: inline;
    background-color: initial;
  }
`;

export const MarkdownParagraph = styled(Paragraph).attrs({ size: 'inherit' })`
  margin-block-start: 0.5rem;
  &:first-child {
    margin-block-start: unset;
  }
`;

export const MarkdownH1 = styled(Headline).attrs({
  asElement: 'h1',
  size: 4,
})`
  margin-block-start: 2.5rem;
  &:first-child {
    margin-block-start: unset;
  }
`;

export const MarkdownH2 = styled(Headline).attrs({
  asElement: 'h2',
  size: 4,
})`
  margin-block-start: 2.5rem;
  &:first-child {
    margin-block-start: unset;
  }
`;

export const MarkdownH3 = styled(Headline).attrs({
  asElement: 'h3',
  size: 3,
})`
  margin-block-start: 1rem;
  &:first-child {
    margin-block-start: unset;
  }
`;

export const MarkdownH4 = styled(Headline).attrs({
  asElement: 'h4',
  size: 2,
})`
  margin-block-start: 0.5rem;
  &:first-child {
    margin-block-start: unset;
  }
`;
