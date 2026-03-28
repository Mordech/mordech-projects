import {
  alphaFromArgb,
  blueFromArgb,
  greenFromArgb,
  Hct,
  redFromArgb,
} from '@material/material-color-utilities';

import { applyPaint } from './applyPaint';

export function createPaintStyle(argb: number) {
  const opacity = alphaFromArgb(argb) / 255;

  const color: RGB = {
    r: redFromArgb(argb) / 255,
    g: greenFromArgb(argb) / 255,
    b: blueFromArgb(argb) / 255,
  };

  const hct = Hct.fromInt(argb);
  const alphaPercent = Math.round(opacity * 100);

  const name =
    alphaPercent < 100
      ? `hct(${hct.hue.toFixed()}, ${hct.chroma.toFixed()}, ${hct.tone.toFixed()}, ${alphaPercent}%)`
      : `hct(${hct.hue.toFixed()}, ${hct.chroma.toFixed()}, ${hct.tone.toFixed()})`;

  const paintStyle = figma.createPaintStyle();
  paintStyle.name = name;
  paintStyle.paints = [
    {
      type: 'SOLID',
      color,
      opacity,
    },
  ];

  applyPaint(paintStyle);

  return paintStyle;
}
