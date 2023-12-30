import { pagePadding } from '@mordech/tokens';
import styled, { CSSProperties } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex: 1;
  justify-content: stretch;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 18vw, 18rem);
  margin-inline: auto;

  ${pagePadding}
`;

interface RowProps {
  gap?: CSSProperties['gap'];
}

export const Row = styled.div<RowProps>`
  display: flex;
  gap: ${({ gap }) => gap || '0.5rem'};
`;

export const Column = styled(Row)`
  flex-direction: column;
`;
