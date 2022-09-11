import styled from 'styled-components';
import { pagePadding } from './breakpoints';
import { gapSizes, GapSizes } from './typography';

export const Section = styled.section`
  display: flex;
  flex: 1;
  justify-content: stretch;
  padding: var(--project-padding);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 18vw, 20rem);

  margin-inline: auto;

  ${pagePadding}
`;

interface RowProps {
  gap?: GapSizes;
}

export const Row = styled.div<RowProps>`
  display: flex;
  gap: ${({ gap }) => gapSizes[gap ?? 0]};
`;

export const Column = styled(Row)`
  flex-direction: column;
`;
