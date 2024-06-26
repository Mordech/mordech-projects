import { Column, Section } from '@mordech/react-components';
import { breakpoints, pagePadding } from '@mordech/tokens';
import styled from 'styled-components';

export const HeroContainer = styled(Section).attrs({ as: 'header' })`
  position: relative;
  display: flex;
  min-height: calc(100vh - var(--mrd-default-padding));
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.75rem;

  ${pagePadding}
`;

export const ParagraphContainer = styled(Column)`
  align-self: flex-start;
  max-width: 27rem;
  margin-inline-end: auto;

  ${breakpoints.lg} {
    margin-inline: unset;
  }
  ${breakpoints.md} {
    padding-block: clamp(2rem, 15vh, 14rem);
  }
`;
