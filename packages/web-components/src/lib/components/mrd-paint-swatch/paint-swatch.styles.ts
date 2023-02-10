import { colors } from '@mordech/tokens';
import { css, unsafeCSS } from 'lit';

export const paintSwatchBase = css`
  .swatch {
    height: var(--mrd-paint-swatch-size, 3rem);
    width: var(--mrd-paint-swatch-size, 3rem);
    background-color: currentColor;
    border-width: 1px;
    border-style: solid;
    border-color: ${unsafeCSS(colors.background.surface)};
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .swatch:hover,
  .swatch:focus-visible,
  .swatch[data-active='true'] {
    border-width: 2px;
    border-style: solid;
    opacity: 1;
  }

  .swatch[data-active='true'] {
    border-color: ${unsafeCSS(colors.primary.base)};
  }

  .swatch:hover,
  .swatch:focus-visible {
    border-width: 3px;
  }

  .swatch:active {
    outline-offset: unset;
    transform: scale(0.9);
  }
`;
