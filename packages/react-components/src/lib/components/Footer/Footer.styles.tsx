import { breakpoints, colors, pagePadding, transitions } from '@mordech/tokens';
import styled from 'styled-components';

import { Row } from '../../abstracts/';

export const StickyNav = styled.nav.attrs({ 'aria-label': 'Social links' })`
  &:empty {
    display: none;
  }

  pointer-events: none;

  ${breakpoints.lg} {
    position: sticky;
    bottom: 0;
    left: 0;
  }
`;

export const IconLink = styled.a`
  pointer-events: auto;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.8;
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

export const LinksContainer = styled(Row).attrs({
  as: 'ul',
})`
  &:empty {
    display: none;
  }

  margin-block-start: 2rem;
  padding-inline: 2rem;
  padding-block: 2.5rem 0.5rem;
  gap: 3rem;
  min-width: var(--mrd-default-padding);
  max-width: unset;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background.onBase};

  /* Creates a full bleed background */
  box-shadow: 0 0 0 100vmax ${colors.background.onBase};
  clip-path: inset(-1px -100vmax);

  & > * {
    color: ${colors.primary.onBase};
  }

  ${breakpoints.lg} {
    gap: 0.5rem;
    padding: 1.5rem 2rem;

    @media (pointer: coarse) {
      gap: 0.75rem;
    }

    background-color: unset;
    flex-direction: column;
    max-width: min-content;

    & > * {
      color: ${colors.primary.base};
    }

    /* Disables full bleed background in desktop */
    box-shadow: unset;
    clip-path: unset;
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  padding-block: 1rem;
  background-color: ${colors.background.onBase};
  min-height: var(--mrd-default-padding);
  text-align: center;

  /* Creates a full bleed background */
  box-shadow: 0 0 0 100vmax ${colors.background.onBase};
  clip-path: inset(-1px -100vmax -100vmax);

  ${pagePadding}
`;
