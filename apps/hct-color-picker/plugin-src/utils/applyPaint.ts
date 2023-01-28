export function applyPaint(paintStyle: PaintStyle | SolidPaint) {
  figma.currentPage.selection.forEach((node) => {
    if ('fills' in node) {
      if ('id' in paintStyle) {
        node.fillStyleId = paintStyle.id;
      }

      if (paintStyle.type === 'SOLID') {
        node.fills = [paintStyle as SolidPaint];
      }
    }
  });
}
