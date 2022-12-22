/**
 * Transitions
 * @example
 * .transition {
 *   transition: all ${transitions.default};
 * }
 * // transition: all 0.3s ease-in-out;
 */
export const transitions = {
  default: '0.3s ease-in-out',
  fast: '0.2s ease-in-out',
  slow: '0.5s ease-in-out',
  bounce: '250ms cubic-bezier(0.65, -1.63, 0.28, 2.72)',
  none: 'none',
};
