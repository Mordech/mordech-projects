import { svg } from 'lit-html';

export const toggleThemeIcon = svg`<svg alt="toggle theme icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
  .mrd-element {
    fill: var(--color-primary-base, #000);
  }

  #mrd-sun, #mrd-sun {
    transform-origin: center;
    transition: transform 600ms ease-out 150ms;
  }
  
  #mrd-sun,
  [data-theme='light'] #mrd-sun {
    transform: rotate(360deg);
  }

  [data-theme='dark'] #mrd-sun {
    transform: rotate(0deg);
  }

  #mrd-mask,
  [data-theme='light'] #mrd-mask {
    transform: translateX(0);
  }

  [data-theme='dark'] #mrd-mask {
    transform: translateX(-7px);
  }

  </style>
  <path class="mrd-element" id="mrd-sun" d="M12 23.3L8.64995 20H3.99995V15.35L0.699951 12L3.99995 8.65001V4.00001H8.64995L12 0.700012L15.35 4.00001H20V8.65001L23.2999 12L20 15.35V20H15.35L12 23.3ZM12 19C15.8659 19 19 15.866 19 12V12C19 8.13402 15.8659 5.00001 12 5.00001V5.00001C8.13396 5.00001 4.99995 8.13402 4.99995 12V12C4.99995 15.866 8.13396 19 12 19V19Z" fill="black"/>
  <mask id="circleClip">
    <circle cx="12" cy="12" r="5" fill="white" mask="url(#circleClip)" />
    <circle id="mrd-mask" cx="8" cy="11" r="4" fill="black" />
  </mask>
  <circle class="mrd-element" cx="12" cy="12" r="5" mask="url(#circleClip)" />
</svg>`;
