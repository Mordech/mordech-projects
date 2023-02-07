import { UiPaintStyle } from '../../types';

export function getPaints(paintStyles: PaintStyle[]) {
  paintStyles = paintStyles.filter((paintStyle) => {
    const { paints } = paintStyle;

    if (!paints.length) return false;
    if (paints.length > 1) return false;
    if (paints[0].type !== 'SOLID') return false;
    return true;
  });

  if (!paintStyles.length) return;

  return paintStyles
    .map((paintStyle) => {
      const { paints } = paintStyle;
      if (paints[0].type !== 'SOLID') return;
      const { id, name } = paintStyle;
      const { r, g, b } = paints[0].color;

      return {
        id,
        name,
        color: {
          r: r * 255,
          g: g * 255,
          b: b * 255,
        },
      };
    })
    .filter(
      (paintStyle): paintStyle is UiPaintStyle => paintStyle !== undefined
    ) satisfies UiPaintStyle[];
}
