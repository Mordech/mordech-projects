import { breakpoints, colors, transitions } from '@mordech/tokens';
import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  z-index: 1;
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: ${colors.background.base};
  min-height: 5.25rem;
  text-align: center;

  /* Creates a full bleed background */
  box-shadow: 0 0 0 100vmax ${colors.background.base};
  clip-path: inset(-1px -100vmax);

  ${breakpoints.sm} {
    position: sticky;
    top: 0;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

export const LogoLink = styled.a`
  &:hover {
    filter: brightness(1.45);

    @media (prefers-color-scheme: dark) {
      filter: brightness(0.8);
    }
  }

  &:active {
    filter: brightness(1);
  }

  outline: solid 2px transparent;
  border-radius: 2px;
  transition:
    all 250ms ease,
    outline-offset ${transitions.bounce};
  transition-delay: outline-color 10ms;

  &:focus-visible {
    opacity: 1;
    outline: solid 2px ${colors.primary.base};
    outline-offset: 4px;
  }
`;
