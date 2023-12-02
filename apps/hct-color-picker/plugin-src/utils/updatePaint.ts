import {
  blueFromArgb,
  greenFromArgb,
  redFromArgb,
} from '@material/material-color-utilities';

import { UiPaintStyle } from '../../types';

import { applyPaint } from './applyPaint';

export async function updatePaint(
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

  const paint =
    figma.variables.getVariableById(paintStyle.id) ||
    figma.getLocalPaintStyles().find((style) => style.id === paintStyle.id);

  if (!paint) return;

  if (paint && 'paints' in paint) {
    paint.paints = [solidPaint as SolidPaint];
  } else {
    const { resolvedType } = paint;
    if (resolvedType !== 'COLOR') return;

    const mode = paintStyle.modeId;
    if (!mode) return;

    paint.setValueForMode(mode, solidPaint.color);
  }

  if (paintStyle.variableAlias) return;

  applyPaint(paint);
}
