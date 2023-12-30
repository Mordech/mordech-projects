import { breakpoints } from '@mordech/tokens';
import styled from 'styled-components';

import { Section } from '../../abstracts';
import { Paper } from '../Paper';

export const Container = styled(Section)`
  flex-direction: column;
  width: fit-content;
  gap: 1.5rem;
  margin-inline: auto;
  max-width: 89rem;

  ${breakpoints.md} {
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

    ${breakpoints.md} {
      max-height: 35rem;
      min-width: 21rem;
      min-height: 21rem;
    }
  }
`;

export const Content = styled.div`
  --mrd-width: 23rem;
  --mrd-total-width: calc(var(--mrd-width) + var(--mrd-padding-inline, 0rem));

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-inline: var(--mrd-padding-inline);
  max-width: var(--mrd-total-width);
  gap: 2rem;

  ${breakpoints.md} {
    --mrd-padding-inline: 2rem;
  }

  ${breakpoints.lg} {
    --mrd-padding-inline: 3rem;

    min-width: var(--mrd-total-width);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThumbnailAnchor = styled.a`
  display: flex;
`;
