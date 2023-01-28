import {
  blueFromArgb,
  greenFromArgb,
  Hct,
  redFromArgb,
} from '@material/material-color-utilities';
import { Theme } from '@mordech/tokens';

import { PluginMessage } from '../types';

import {
  applyPaint,
  getPaints,
  postMessage,
  updatePaint,
  updateSelection,
} from './utils';

figma.showUI(__html__, { width: 450, height: 540 });
figma.currentPage.selection = [];

const paintStyles = figma.getLocalPaintStyles();

postMessage({
  type: 'paints',
  paints: getPaints(paintStyles),
});

if (paintStyles.length) {
  figma.ui.resize(450, 670);
}

figma.on('documentchange', (event) => {
  if (
    event.documentChanges.some(
      (change) =>
        change.type === 'STYLE_CREATE' ||
        change.type === 'STYLE_DELETE' ||
        change.type === 'STYLE_PROPERTY_CHANGE'
    )
  ) {
    const paintStyles = figma.getLocalPaintStyles();
    postMessage({ type: 'paints', paints: getPaints(paintStyles) });
    if (paintStyles.length) {
      figma.ui.resize(450, 670);
    } else {
      figma.ui.resize(450, 540);
    }
  }

  if (event.documentChanges.some((change) => change.type === 'STYLE_CREATE')) {
    updateSelection();
  }
});

figma.on('selectionchange', () => updateSelection());

figma.ui.onmessage = (msg: PluginMessage) => {
  switch (msg.type) {
    case 'save-color':
      figma.clientStorage.setAsync('color', msg.data);
      break;

    case 'update-style':
      updatePaint(msg.data.selectedColor, msg.data.argb);
      break;

    case 'save-theme':
      figma.clientStorage.setAsync('theme', msg.data);
      break;

    case 'get-color':
      figma.clientStorage.getAsync('color').then((color: Hct) => {
        postMessage({ type: 'color-from-storage', color });
      });

      break;

    case 'get-theme':
      figma.clientStorage.getAsync('theme').then((theme: Theme) => {
        theme = theme || 'dark';
        postMessage({ type: 'stored-theme', theme });
      });
      break;

    case 'cancel':
      figma.closePlugin();
      break;

    case 'create-paint-style':
      createPaintStyle(msg.data.argb);
      break;

    default:
      break;
  }
};

async function createPaintStyle(argb: number) {
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
