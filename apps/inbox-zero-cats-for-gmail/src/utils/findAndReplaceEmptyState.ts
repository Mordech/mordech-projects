import { createCatEmptyState } from '../components/createCatEmptyState';

export const findAndReplaceEmptyState = (selector: string, text: string) => {
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
