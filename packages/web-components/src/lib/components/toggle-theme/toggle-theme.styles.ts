import { css } from 'lit';

export const toggleThemeBase = css`
  .btn {
    --mrd-border-radius: 99px;
    --mrd-button-color: var(--mrd-color-background-on);
    --mrd-button-background: var(--mrd-color-background-base);
    --mrd-button-hover-background: var(--mrd-color-background-surface);
    --mrd-button-active-background: var(--mrd-color-background-surface);

    min-width: unset;
    padding: 8px;
  }
  .btn:hover {
    filter: unset;
  }

  .btn:active {
    filter: unset;
  }
`;

export const toggleThemeIcon = css`
  svg {
    width: var(--mrd-icon-size, 24px);
    height: var(--mrd-icon-size, 24px);
  }
  #mrd-mask,
  #mrd-sun {
    transform-origin: center;
    transition: transform 600ms ease-out 150ms;
  }

  #mrd-sun,
  .light #mrd-sun {
    transform: rotate(360deg);
  }

  .dark #mrd-sun {
    transform: rotate(0deg);
  }

  #mrd-mask,
  .light #mrd-mask {
    transform: translateX(0);
  }

  .dark #mrd-mask {
    transform: translateX(-7px);
  }
`;
