export async function getAllStylesAndVariables() {
  return [
    ...(await figma.getLocalPaintStylesAsync()),
    ...(await figma.variables.getLocalVariablesAsync('COLOR')),
  ];
}
