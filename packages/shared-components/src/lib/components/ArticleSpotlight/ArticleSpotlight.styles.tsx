import styled from 'styled-components';

import { breakpoints, Section } from '../../abstracts';
import { Paper } from '../Paper';

export const Container = styled(Section)`
  flex-direction: column;
  width: fit-content;
  gap: 1.5rem;
  margin-inline: auto;
  max-width: 89rem;

  ${breakpoints.smMin} {
    gap: 3rem;
    justify-content: flex-end;
    flex-direction: row;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

export const ThumbnailContainer = styled(Paper)`
  img {
    display: flex;
    height: 100%;
    object-fit: cover;
    object-position: 0% 0%;
    z-index: -1;

    ${breakpoints.smMin} {
      max-height: 35rem;
      min-width: 21rem;
      min-height: 21rem;
    }
  }
`;

export const Content = styled.div`
  --width: 23rem;
  --total-width: calc(var(--width) + var(--padding-inline, 0rem));

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline: var(--padding-inline);
  max-width: var(--total-width);
  gap: 2rem;

  ${breakpoints.smMin} {
    --padding-inline: 2rem;
  }

  ${breakpoints.mdMin} {
    --padding-inline: 3rem;
    min-width: var(--total-width);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThumbnailAnchor = styled.a`
  display: flex;
`;
