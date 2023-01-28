import { postMessage } from '../utils/postMessage';

export function updateSelection() {
  if (!figma.currentPage.selection.length) {
    postMessage({ type: 'selection', selection: undefined });
    return;
  }

  if (figma.currentPage.selection.length > 1) return;
  const selection = figma.currentPage.selection[0];
  if (!selection) return;
  if ('fillStyleId' in selection) {
    const fills = selection.fills as Paint[];
    if (!fills.length) return;
    if (fills[0].type !== 'SOLID') return;
    const { r, g, b } = fills[0].color;

    const color = {
      r: r * 255,
      g: g * 255,
      b: b * 255,
    };

    const id = selection.fillStyleId.toString();

    postMessage({
      type: 'selection',
      selection: {
        id,
        color,
      },
    });
  }
}
