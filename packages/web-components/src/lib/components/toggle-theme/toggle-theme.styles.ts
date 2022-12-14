import { colors } from '@mordech/tokens';
import { css, unsafeCSS } from 'lit';

export const toggleThemeBase = css`
  :host {
    --mrd-border-radius: 99px;
    --mrd-button-color: ${unsafeCSS(colors.background.on)};
    --mrd-button-background: ${unsafeCSS(colors.background.base)};
    --mrd-button-hover-background: ${unsafeCSS(colors.background.surface)};
    --mrd-button-active-background: ${unsafeCSS(colors.background.surface)};
    --mrd-button-padding: 0.5rem;
  }

  .btn {
    min-width: unset;
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
