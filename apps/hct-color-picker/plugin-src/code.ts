import { Hct } from '@material/material-color-utilities';
import { Theme } from '@mordech/tokens';

import { PluginMessage } from '../types';

import {
  createPaintStyle,
  debounce,
  getPaints,
  postMessage,
  updatePaint,
  updateSelection,
} from './utils';

figma.showUI(__html__, { width: 450, height: 548 });
figma.currentPage.selection = [];

const paintStyles = figma.getLocalPaintStyles();

const uiSizes: Record<string, [number, number]> = {
  small: [450, 600],
  medium: [450, 652],
};

postMessage({
  type: 'paints',
  paints: getPaints(paintStyles),
});

paintStyles.length
  ? figma.ui.resize(...uiSizes.medium)
  : figma.ui.resize(...uiSizes.small);

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

    paintStyles.length
      ? figma.ui.resize(...uiSizes.medium)
      : figma.ui.resize(...uiSizes.small);
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
      debounce(updatePaint(msg.data.selectedColor, msg.data.argb), 100);
      break;

    case 'save-theme':
      figma.clientStorage.setAsync('theme', msg.data);
      break;

    case 'get-color':
      figma.clientStorage.getAsync('color').then((color: Hct | undefined) => {
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
