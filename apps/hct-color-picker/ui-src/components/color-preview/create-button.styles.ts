import { colors } from '@mordech/tokens';
import { css, unsafeCSS } from 'lit';

export const createButtonStyle = css`
  --mrd-button-background: ${unsafeCSS(colors.background.surface)};
  --mrd-button-color: ${unsafeCSS(colors.background.onSurface)};
`;
