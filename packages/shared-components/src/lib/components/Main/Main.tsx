import styled from 'styled-components';
import { breakpoints } from '../../abstracts';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 18vw, 20rem);

  padding-inline: 1rem;
  margin-inline: auto;

  ${breakpoints.xsMin} {
    padding-inline: 2rem;
  }

  ${breakpoints.mdMin} {
    padding-inline: 5.25rem;
  }
`;
