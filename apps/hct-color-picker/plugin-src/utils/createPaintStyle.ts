import {
  blueFromArgb,
  greenFromArgb,
  Hct,
  redFromArgb,
} from '@material/material-color-utilities';

import { applyPaint } from '.';

export function createPaintStyle(argb: number) {
  const color: RGB = {
    r: redFromArgb(argb) / 255,
    g: greenFromArgb(argb) / 255,
    b: blueFromArgb(argb) / 255,
  };

  const hct = Hct.fromInt(argb);

  const name = `hct(${hct.hue.toFixed()}, ${hct.chroma.toFixed()}, ${hct.tone.toFixed()})`;

  const paintStyle = figma.createPaintStyle();
  paintStyle.name = name;
  paintStyle.paints = [
    {
      type: 'SOLID',
      color,
    },
  ];

  applyPaint(paintStyle);

  return paintStyle;
}
