import {
  blueFromArgb,
  greenFromArgb,
  redFromArgb,
} from '@material/material-color-utilities';

import { UiPaintStyle } from '../../types';

import { applyPaint } from './applyPaint';

export function updatePaint(
  paintStyle: UiPaintStyle | undefined,
  argb: number
) {
  const solidPaint: SolidPaint = {
    type: 'SOLID',
    color: {
      r: redFromArgb(argb) / 255,
      g: greenFromArgb(argb) / 255,
      b: blueFromArgb(argb) / 255,
    },
  };

  if (!paintStyle) return applyPaint(solidPaint);

  const paint = figma
    .getLocalPaintStyles()
    .find((style) => style.id === paintStyle.id);

  if (!paint) return;
  paint.paints = [solidPaint as SolidPaint];

  applyPaint(paint);
}
