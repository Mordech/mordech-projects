import { css } from '../utils';

import { pagePaddings } from './pagePaddings';

/**
 * Page padding variable
 * Returns a responsive padding declaration for the page
 *
 * Used in the context of a page only
 *
 * @example
 * .page {
 *   ${pagePadding}
 * }
 */
export const pagePadding = css`
  padding-inline-start: var(--mrd-default-padding, ${pagePaddings.sm});
  padding-inline-end: var(--mrd-default-padding, ${pagePaddings.sm});
`;
