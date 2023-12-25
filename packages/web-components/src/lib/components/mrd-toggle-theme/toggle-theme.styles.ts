import { colors } from '@mordech/tokens';
import { css, unsafeCSS } from 'lit';

export const toggleThemeBase = css`
  mrd-button {
    --mrd-border-radius: 99px;
    --mrd-button-color: ${unsafeCSS(colors.background.onBase)};
    --mrd-button-background: ${unsafeCSS(colors.background.base)};
    --mrd-button-padding: 0.5rem;
  }
  mrd-button::part(button) {
    min-width: unset;
    min-height: unset;
  }

  mrd-button::part(button):hover {
    filter: unset;
  }

  mrd-button::part(button):active {
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
