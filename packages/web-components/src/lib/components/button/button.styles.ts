import { colors } from '@mordech/tokens';
import { css, unsafeCSS } from 'lit';

export const buttonBase = css`
  :host {
    --mrd-button-color: ${unsafeCSS(colors.primary.on)};
    --mrd-button-background: ${unsafeCSS(colors.primary.base)};
  }

  .btn {
    display: inline-flex;
    border: unset;
    padding: var(--mrd-button-padding, 0.5rem 1rem);
    min-width: 5rem;
    min-height: 3rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    border-radius: var(--mrd-border-radius, 0.5rem);
    color: var(--mrd-button-color);
    background-color: var(--mrd-button-background);
  }

  .btn:hover {
    background-color: var(
      --mrd-button-hover-background,
      var(--mrd-button-background)
    );
    filter: brightness(1.5);
  }

  .btn:active {
    background-color: var(
      --mrd-button-active-background,
      var(--mrd-button-background)
    );
    filter: brightness(0.9);
  }
`;
