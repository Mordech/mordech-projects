import { colors, elevation } from '../../abstracts';

import { PaperVariants, StyledPaperProps } from './types';

export const paperVariantProps: Record<PaperVariants, StyledPaperProps> = {
  elevation: {
    borderColor: 'transparent',
    boxShadow: elevation[0],
    backgroundColor: colors.background.base,
  },
  outlined: {
    borderColor: colors.background.surface,
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  fill: {
    borderColor: 'transparent',
    boxShadow: 'none',
    backgroundColor: colors.background.surface,
  },
};
