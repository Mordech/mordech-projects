import { Hct } from '@material/material-color-utilities';
import type { Theme } from '@mordech/tokens';

import type { PluginMessage } from '../types';

import {
  createPaintStyle,
  debounce,
  extractValidStyles,
  getAllStylesAndVariables,
  postMessage,
  updatePaint,
  updateSelection,
} from './utils';

figma.showUI(__html__, { width: 340, height: 560 });
figma.currentPage.selection = [];

const uiSizes: Record<string, [number, number]> = {
  small: [340, 568],
  medium: [340, 618],
};

const stylesAndVariables = getAllStylesAndVariables();

postMessage({
  type: 'paints',
  paints: extractValidStyles(stylesAndVariables),
});

stylesAndVariables.length
  ? figma.ui.resize(...uiSizes.medium)
  : figma.ui.resize(...uiSizes.small);

figma.on('documentchange', (event) => {
  if (
    event.documentChanges.some(
      ({ type }) => type === 'STYLE_CREATE' || type === 'STYLE_DELETE'
    )
  ) {
    const stylesAndVariables = getAllStylesAndVariables();

    postMessage({
      type: 'paints',
      paints: extractValidStyles(stylesAndVariables),
    });

    stylesAndVariables.length
      ? figma.ui.resize(...uiSizes.medium)
      : figma.ui.resize(...uiSizes.small);

    updateSelection();
  }
});

figma.on('selectionchange', updateSelection);

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

setInterval(() => {
  const stylesAndVariables = getAllStylesAndVariables();

  postMessage({
    type: 'paints',
    paints: extractValidStyles(stylesAndVariables),
  });
}, 3000);
