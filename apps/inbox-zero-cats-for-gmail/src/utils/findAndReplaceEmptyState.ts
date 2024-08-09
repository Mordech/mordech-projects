import {
  createCatEmptyState,
  MOUNTED_INDICATION,
} from '../components/createCatEmptyState';

export const findAndReplaceEmptyState = (selector: string) => {
  document.querySelectorAll(selector).forEach((element) => {
    if (element.textContent?.includes(MOUNTED_INDICATION)) return;
    if (!(window.location.hash === '#inbox')) return;

    return window.requestAnimationFrame(() => {
      createCatEmptyState(element.firstElementChild || element);
    });
  });
};
