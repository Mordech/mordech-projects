import { colors, elevation, transitions } from '@mordech/tokens';
import { css, unsafeCSS } from 'lit';

const thumb = css`
  appearance: none;
  cursor: grab;

  width: var(--mrd-thumb-size, 1rem);
  height: var(--mrd-thumb-size, 1rem);

  border: var(--mrd-range-border, unset);
  border-radius: 1rem;
  background-color: var(
    --mrd-thumb-color,
    var(--mrd-range-color, ${unsafeCSS(colors.primary.base)})
  );
  transition: transform ${unsafeCSS(transitions.default)};
`;

const thumbHover = css`
  transform: scale(2);
  box-shadow: ${unsafeCSS(elevation[0])};
`;

const thumbActive = css`
  cursor: grabbing;
`;

const track = css`
  cursor: pointer;
  margin-block: 0.5rem;
  appearance: none;
  border: var(--mrd-range-border, unset);
  background: linear-gradient(
    90deg,
    var(--mrd-range-color, ${unsafeCSS(colors.primary.base)})
      var(--mrd-range, 50%),
    ${unsafeCSS(colors.background.surface)} var(--mrd-range, 50%)
  );
  height: 0.5rem;
  border-radius: 1rem;
`;

export const rangeBase = css`
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  input[type='range'] {
    ${track}
    opacity: 0.9;
  }

  input[type='range']:hover,
  input[type='range']:focus {
    opacity: 1;
  }

  input[type='range']:focus-visible {
    outline-offset: 0.375rem;
  }

  input[type='range']::-webkit-slider-thumb {
    ${thumb}
  }

  input[type='range']::-webkit-slider-thumb:hover {
    ${thumbHover}
  }

  input[type='range']::-moz-range-thumb {
    ${thumb}
  }

  input[type='range']::-moz-range-thumb:hover {
    ${thumbHover}
  }

  input[type='range']::-ms-thumb {
    ${thumb}
  }

  input[type='range']::-ms-thumb:hover {
    ${thumbHover}
  }

  input[type='range']:active::-webkit-slider-thumb {
    ${thumbActive}
  }

  input[type='range']:active::-moz-range-thumb {
    ${thumbActive}
  }

  input[type='range']:active::-ms-thumb {
    ${thumbActive}
  }
`;

export const slotContainer = css`
  .slot-container {
    display: flex;
    border-radius: 4px;
  }
`;
