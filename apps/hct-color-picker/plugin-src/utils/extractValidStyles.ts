import type { UiPaintStyle } from '../../types';

function isPaintStyle(paintStyle: PaintStyle | Variable) {
  if ('paints' in paintStyle) {
    const { paints } = paintStyle;

    if (!paints.length) return false;
    if (paints.length > 1) return false;
    if (paints[0].type !== 'SOLID') return false;

    return true;
  }

  return false;
}

function isColorVariable(paintStyle: PaintStyle | Variable) {
  if ('resolvedType' in paintStyle) {
    return paintStyle.resolvedType === 'COLOR' ? true : false;
  }
  return false;
}

function extractColor(
  paintStyle: PaintStyle | Variable,
): Variable | RGB | undefined {
  if ('paints' in paintStyle) {
    const { paints } = paintStyle;

    if (!paints.length) return;
    if (paints.length > 1) return;
    if (paints[0].type !== 'SOLID') return;

    return paints[0].color;
  } else {
    if (paintStyle.resolvedType !== 'COLOR') return;

    return paintStyle;
  }
}

export function extractValidStyles(
  paintStyles: (PaintStyle | Variable)[],
): UiPaintStyle[] | undefined {
  paintStyles.filter((paintStyle) => {
    isPaintStyle(paintStyle) || isColorVariable(paintStyle);
  });

  if (!paintStyles.length) return;
  return paintStyles
    .map((paintStyle) => {
      const paint = extractColor(paintStyle);
      if (!paint) return;

      if ('valuesByMode' in paint) {
        const { valuesByMode } = paint;

        const { id, name } = paintStyle;

        return Object.entries(valuesByMode)
          .map(([modeId, value]) => {
            if (!(typeof value === 'object')) return;
            if ('type' in value) return;
            if (!('r' in value)) return;

            const { r, g, b } = value as RGB;
            const alpha =
              'a' in value ? Math.round((value as RGBA).a * 100) : 100;

            return {
              id: id,
              modeId,
              name: name,
              color: {
                r: r * 255,
                g: g * 255,
                b: b * 255,
              },
              alpha,
            } satisfies UiPaintStyle;
          })
          .filter((paintStyle) => paintStyle !== undefined) as UiPaintStyle[];
      }

      const { id, name } = paintStyle;
      const { r, g, b } = paint;
      const paintOpacity =
        'paints' in paintStyle
          ? (paintStyle.paints[0] as SolidPaint).opacity ?? 1
          : 1;
      const alpha = Math.round(paintOpacity * 100);

      return {
        id,
        name,
        color: {
          r: r * 255,
          g: g * 255,
          b: b * 255,
        },
        alpha,
      } satisfies UiPaintStyle;
    })
    .flat()
    .filter((paintStyle) => paintStyle !== undefined) as UiPaintStyle[];
}
