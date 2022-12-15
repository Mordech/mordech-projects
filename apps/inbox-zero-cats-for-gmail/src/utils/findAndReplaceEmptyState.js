import { createCatEmptyState } from '../components/createCatEmptyState';

/**
 * @param {string} selector
 * @param {string} text
 */
export const findAndReplaceEmptyState = (selector, text) => {
  document.querySelectorAll(selector).forEach((element) => {
    if (
      (element.firstElementChild?.textContent?.includes(text) &&
        !element.parentElement?.querySelector('.cat-container')) ||
      (element.textContent?.includes(text) &&
        !element.querySelector('.cat-container'))
    ) {
      return createCatEmptyState(element.firstElementChild || element);
    }
  });
};
