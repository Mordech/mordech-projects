import styled from 'styled-components';

import { breakpoints, colors, pagePadding, Row } from '../../abstracts/';

export const StickyNav = styled.nav.attrs({ 'aria-label': 'Social links' })`
  &:empty {
    display: none;
  }
  pointer-events: none;

  ${breakpoints.mdMin} {
    position: sticky;
    bottom: 0;
    left: 0;
  }
`;

export const IconLink = styled.a`
  pointer-events: auto;
  outline-width: 2px;
  opacity: 0.5;
  transition: opacity 250ms ease-in-out;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.8;
  }

  outline-color: transparent;
  outline-style: solid;
  border-radius: 2px;

  transition: all 250ms ease, outline-offset var(--bounce-transition);
  transition-delay: outline-color 10ms;

  &:focus-visible {
    opacity: 1;

    outline-style: solid;
    outline-color: ${colors.dark};
    outline-offset: 4px;
    outline-width: 2px;
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
  min-width: var(--default-padding);
  max-width: unset;
  align-items: center;
  justify-content: center;
  background-color: ${colors.dark};

  /* Creates a full bleed background */
  box-shadow: 0 0 0 100vmax ${colors.dark};
  clip-path: inset(-1px -100vmax);

  & > * {
    color: ${colors.lightest};
  }

  ${breakpoints.mdMin} {
    gap: 0.5rem;
    padding: 1.5rem 2rem;

    @media (pointer: coarse) {
      gap: 0.75rem;
    }

    background-color: unset;
    flex-direction: column;
    max-width: min-content;

    & > * {
      color: ${colors.dark};
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
  background-color: ${colors.dark};
  min-height: var(--default-padding);
  text-align: center;

  ${pagePadding}
  /* Creates a full bleed background */
  box-shadow: 0 0 0 100vmax ${colors.dark};
  clip-path: inset(-1px -100vmax -100vmax);
`;
