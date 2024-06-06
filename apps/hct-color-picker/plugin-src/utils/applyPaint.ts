export function applyPaint(paintStyle: PaintStyle | SolidPaint | Variable) {
  figma.currentPage.selection.forEach(async (node) => {
    if ('fills' in node) {
      if ('resolvedType' in paintStyle) {
        const variable = paintStyle;

        if (!(variable.resolvedType === 'COLOR')) return;

        const fills = node.fills as Paint[];

        if (!fills.length) return;

        if (fills[0].type !== 'SOLID') return;

        node.fills = [
          figma.variables.setBoundVariableForPaint(fills[0], 'color', variable),
        ];
      }

      if ('id' in paintStyle) {
        await node.setFillStyleIdAsync(paintStyle.id);
      }

      if ('type' in paintStyle && paintStyle.type === 'SOLID') {
        node.fills = [paintStyle as SolidPaint];
      }
    }
  });
}
