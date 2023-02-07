import { colors } from '@mordech/tokens';
import { css as style, unsafeCSS } from 'lit';

export const createButtonStyle = style`
  --mrd-button-background: ${unsafeCSS(colors.background.surface)};
  --mrd-button-color: ${unsafeCSS(colors.background.onSurface)};
`;
