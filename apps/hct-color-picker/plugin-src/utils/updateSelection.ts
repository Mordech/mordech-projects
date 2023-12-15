import { postMessage } from '../utils/postMessage';

interface GetRootVariableObjectProps {
  selection: SceneNode;
  variable: Variable;
  variableAlias?: boolean;
}

function getRootVariableObject({
  selection,
  variable,
  variableAlias,
}: GetRootVariableObjectProps) {
  const variableCollectionId = variable.variableCollectionId;
  const modeId = selection.resolvedVariableModes[variableCollectionId];
  const variableValue = variable.valuesByMode[modeId];

  if (typeof variableValue === 'object') {
    const { id } = variable;

    if (!('type' in variableValue)) {
      return { id, modeId, variableValue, variableAlias };
    }

    if (variableValue.type === 'VARIABLE_ALIAS') {
      variableAlias = true;

      const variable = figma.variables.getVariableById(variableValue.id);

      if (!variable) return;

      return getRootVariableObject({
        selection,
        variable,
        variableAlias,
      });
    }
  }
}

export function updateSelection() {
  if (!figma.currentPage.selection.length) {
    return postMessage({ type: 'selection', selection: undefined });
  }

  if (figma.currentPage.selection.length > 1) return;

  const selection = figma.currentPage.selection[0];

  if (!selection) return;

  if ('fillStyleId' in selection) {
    const fills = selection.fills as Paint[];

    if (!fills.length) return;

    if (fills[0].type !== 'SOLID') return;

    const { r, g, b } = fills[0].color;

    const selectionVariableId = selection.boundVariables?.fills?.[0].id;

    const variable =
      selectionVariableId &&
      figma.variables.getVariableById(selectionVariableId);

    const variableObject =
      variable && getRootVariableObject({ selection, variable });

    const color = {
      r: r * 255,
      g: g * 255,
      b: b * 255,
    };

    const selectionFillsId = selection.fillStyleId.toString();

    const { id } = variableObject || { id: selectionFillsId };

    const { modeId, variableAlias } = variableObject || {};

    return postMessage({
      type: 'selection',
      selection: {
        id,
        modeId,
        color,
        variableAlias,
      },
    });
  }
}
