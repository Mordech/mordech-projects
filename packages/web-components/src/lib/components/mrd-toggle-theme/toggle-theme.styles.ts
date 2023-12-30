import { css } from 'lit';

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
