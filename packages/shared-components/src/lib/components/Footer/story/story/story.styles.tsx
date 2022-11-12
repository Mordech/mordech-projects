import styled from 'styled-components';

import { colors } from '../../../../abstracts';

export const PlaceholderContent = styled.main`
  box-sizing: border-box;
  background-color: ${colors.background.surface};
  min-height: 400px;
  margin-block-end: 1rem;
  margin-inline: var(--default-padding);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  width: calc(100vw - 2rem);
`;
