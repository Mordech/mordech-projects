import { colors } from '@mordech/tokens';
import { css, unsafeCSS } from 'lit';

export const buttonBase = css`
  :host {
    --mrd-button-color: ${unsafeCSS(colors.primary.onBase)};
    --mrd-button-background: ${unsafeCSS(colors.primary.base)};
  }

  .btn {
    position: relative;
    display: inline-flex;
    overflow: hidden;
    border: unset;
    padding: var(--mrd-button-padding, 0.75rem);
    line-height: 1.5;
    font-size: 1rem;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    align-items: center;
    justify-content: center;

    border-radius: var(--mrd-border-radius, 0.5rem);
    color: var(--mrd-button-color);
    background-color: var(--mrd-button-background);
  }

  [data-size='small'] {
    --mrd-button-padding: 0.5rem;
    font-size: var(--mrd-font-size-0);
  }

  [data-size='tiny'] {
    --mrd-button-padding: 0.25rem;
    font-size: var(--mrd-font-size-0);
  }

  [data-radius='round'] {
    --mrd-border-radius: 1rem;
  }

  [data-radius='round'][data-size='small'] {
    --mrd-border-radius: 0.75rem;
  }

  [data-radius='round'][data-size='tiny'] {
    --mrd-border-radius: 0.65rem;
  }

  [data-radius='pill'] {
    --mrd-border-radius: 99px;
  }

  .slot {
    display: flex;
    align-items: center;
    padding-inline: 0.25rem;
  }

  ::slotted(svg) {
    flex-shrink: 0;
    width: var(--mrd-icon-size, 1.5rem);
    height: var(--mrd-icon-size, 1.5rem);
  }

  [data-size='small'] ::slotted(svg),
  [data-size='tiny'] ::slotted(svg) {
    --mrd-icon-size: 1.25rem;
  }

  .btn:hover {
    background-color: var(
      --mrd-button-hover-background,
      var(--mrd-button-background)
    );

    --mrd-button-hover-opacity: 0.08;
  }

  .btn:active {
    background-color: var(
      --mrd-button-active-background,
      var(--mrd-button-background)
    );

    --mrd-button-hover-opacity: 0.12;
  }

  .btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--mrd-button-hover-background, currentColor);
    opacity: var(--mrd-button-hover-opacity, 0);
    transition: opacity 200ms ease-in-out;
  }
`;
