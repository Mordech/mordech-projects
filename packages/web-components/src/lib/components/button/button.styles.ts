import { css } from 'lit';

export const buttonBase = css`
  .btn {
    --mrd-border-radius: 0.5rem;
    --mrd-button-color: var(--mrd-color-primary-on);
    --mrd-button-background: var(--mrd-color-primary-base);
    --mrd-button-hover-background: var(--mrd-color-primary-base);
    --mrd-button-active-background: var(--mrd-color-primary-base);

    display: inline-flex;
    border: unset;
    padding: 0.5rem 1rem;
    min-width: 5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    border-radius: var(--mrd-border-radius);
    color: var(--mrd-button-color);
    background-color: var(--mrd-button-background);
  }
  .btn:hover {
    background-color: var(--mrd-button-hover-background);
    filter: brightness(1.5);
  }
  .btn:active {
    background-color: var(--mrd-button-active-background);
    filter: brightness(0.9);
  }
`;
