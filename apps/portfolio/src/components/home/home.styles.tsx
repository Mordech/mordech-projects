import { breakpoints, Column, pagePadding, Section } from '@mordech/components';
import styled from 'styled-components';

export const HeroHeader = styled(Section).attrs({ as: 'header' })`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  margin-block-end: 8rem;

  ${pagePadding}
`;

export const ParagraphContainer = styled(Column)`
  align-self: flex-start;
  max-width: 27rem;

  ${breakpoints.smMin} {
    padding-block: clamp(2rem, 15vh, 14rem);
  }
`;
