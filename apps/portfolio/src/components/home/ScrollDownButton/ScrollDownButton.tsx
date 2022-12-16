import React from 'react';
import { breakpoints } from '@mordech/tokens';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ArrowSVG from '../../../images/arrow.svg';

export const Arrow = styled(ArrowSVG)`
  @media (prefers-reduced-motion: no-preference) {
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(0);
      }
    }

    animation: bounce 1s infinite;

    &:hover {
      @keyframes wiggle {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(5deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }

      animation: wiggle 0.5s infinite;
    }
  }
`;

export const ScrollDownContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-inline: var(--mrd-default-padding);
  padding-block: 4rem;

  transition: opacity 300ms ease-in-out;
  @media (prefers-reduced-motion: no-preference) {
    @keyframes fade-in {
      0% {
        opacity: 0;
        transform: translateY(-10rem);
      }
      90% {
        opacity: 0;
        transform: translateY(4rem);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    animation: fade-in 3.7s ease-out;
  }
  /* Hide on mobile */
  visibility: hidden;
  opacity: 0;

  ${breakpoints.lg} {
    visibility: visible;
    opacity: 1;
  }
`;

export const ScrollDownButton = () => (
  <ScrollDownContainer>
    <Link aria-label="Scroll down to the main content" to="#main-content">
      <Arrow />
    </Link>
  </ScrollDownContainer>
);
