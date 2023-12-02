export function getAllStylesAndVariables() {
  return [
    ...figma.getLocalPaintStyles(),
    ...figma.variables.getLocalVariables('COLOR'),
  ];
}
