import { css, FlattenSimpleInterpolation } from 'styled-components';

import { colors } from '../../abstracts';

import { ButtonVariants } from './types';

export const variantStyles: Record<ButtonVariants, FlattenSimpleInterpolation> =
  {
    primary: css`
      --background-color: ${colors.primary.base};
      --color: ${colors.primary.on};
    `,
    outline: css`
      --background-color: transparent;
      --color: ${colors.primary.base};
      --border-color: var(--color);
    `,
    flat: css`
      --background-color: ${colors.background.surface};
      --color: ${colors.background.onSurface};
    `,
  };

export default variantStyles;
