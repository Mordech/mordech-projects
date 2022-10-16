import { css, FlattenSimpleInterpolation } from 'styled-components';

import { colors } from '../../abstracts';

import { ButtonVariants } from './types';

export const variantStyles: Record<ButtonVariants, FlattenSimpleInterpolation> =
  {
    primary: css`
      --background-color: ${colors.dark};
      --color: ${colors.lightest};
    `,
    outline: css`
      --background-color: transparent;
      --color: ${colors.dark};
      --border-color: var(--color);
    `,
    flat: css`
      --background-color: ${colors.light};
      --color: ${colors.dark};
    `,
  };

export default variantStyles;
