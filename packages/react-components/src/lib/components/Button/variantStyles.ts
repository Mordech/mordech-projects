import { colors } from '@mordech/tokens';
import { css, RuleSet } from 'styled-components';

import { ButtonVariants } from './types';

export const variantStyles: Record<ButtonVariants, RuleSet> = {
  primary: css`
    --mrd-btn-background-color: ${colors.primary.base};
    --mrd-btn-color: ${colors.primary.onBase};
  `,
  outline: css`
    --mrd-btn-background-color: transparent;
    --mrd-btn-color: ${colors.primary.base};
    --mrd-btn-border-color: var(--mrd-btn-color);
  `,
  flat: css`
    --mrd-btn-background-color: ${colors.background.surface};
    --mrd-btn-color: ${colors.background.onSurface};
  `,
};

export default variantStyles;
