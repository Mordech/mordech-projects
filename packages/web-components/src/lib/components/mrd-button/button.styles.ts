import { css } from 'lit';

export const buttonBase = css`
  .btn {
    position: relative;
    display: inline-flex;
    overflow: hidden;
    border: unset;

    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    line-height: 1;
    font-family: var(
      --mrd-u-button-font-family,
      var(--mrd-button-font-family, inherit)
    );
    padding: var(--mrd-button-padding, 0.75rem);
    font-size: var(
      --mrd-u-button-font-size,
      var(--mrd-button-font-size, var(--mrd-font-size-1))
    );
    cursor: pointer;
    transition: all 200ms ease-in-out;
    align-items: center;
    justify-content: center;

    border-radius: var(--mrd-border-radius, 0.5rem);
    color: var(--mrd-button-color);
    background-color: var(--mrd-button-background);

    &[data-size='compact'] {
      --mrd-button-padding: 0.5rem;
      --mrd-button-font-size: var(--mrd-font-size-0);
    }

    &[data-size='tiny'] {
      --mrd-button-padding: 0.25rem;
      --mrd-button-font-size: var(--mrd-font-size-0);
    }

    &[data-radius='round'] {
      --mrd-border-radius: 1rem;
    }

    &[data-radius='round'][data-size='compact'] {
      --mrd-border-radius: 0.75rem;
    }

    &[data-radius='round'][data-size='tiny'] {
      --mrd-border-radius: 0.65rem;
    }

    &[data-radius='pill'] {
      --mrd-border-radius: 99px;
    }

    &:hover {
      background-color: var(
        --mrd-button-hover-background,
        var(--mrd-button-background)
      );

      --mrd-button-hover-opacity: 0.08;
    }

    &:active {
      background-color: var(
        --mrd-button-active-background,
        var(--mrd-button-background)
      );

      --mrd-button-hover-opacity: 0.12;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: var(--mrd-button-hover-overlay-color, currentColor);
      opacity: var(--mrd-button-hover-opacity, 0);
      transition: opacity 200ms ease-in-out;
    }

    &:disabled {
      cursor: not-allowed;
      --mrd-button-hover-overlay-color: transparent;
    }
  }

  .slot {
    display: flex;
    align-items: center;
    vertical-align: middle;
    padding-inline: 0.25rem;
    min-height: var(
      --mrd-u-button-text-min-height,
      var(--mrd-u-button-icon-size, var(--mrd-button-icon-size, 1.5rem))
    );
  }

  ::slotted(svg) {
    flex-shrink: 0;
    width: var(
      --mrd-u-button-text-min-height,
      var(--mrd-u-button-icon-size, var(--mrd-button-icon-size, 1.5rem))
    );
    height: var(
      --mrd-u-button-text-min-height,
      var(--mrd-u-button-icon-size, var(--mrd-button-icon-size, 1.5rem))
    );
  }

  [data-size='compact'],
  [data-size='tiny'] {
    -mrd-u-button-text-min-height: 1.25rem;
  }
`;
