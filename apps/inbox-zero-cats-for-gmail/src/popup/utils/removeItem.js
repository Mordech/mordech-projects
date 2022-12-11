import { renderContent } from '../index.js';
import browser from 'webextension-polyfill';

/**
 * @typedef {import('../@types/index.js').Data} Data
 */

/**
 * @param {keyof Data} category
 * @param {string} item
 * @param {string[]} itemList
 */
export const removeItem = (category, itemList, item) => {
  const values = itemList;
  if (values.length !== 1) {
    // remove all instances of random image
    if (item.endsWith('mrd-spotlight')) {
      values
        .filter((image) => image.endsWith('mrd-random'))
        .forEach((image) => {
          removeFromArray(image);
        });
    }
    removeFromArray(item);
    return browser.storage.local
      .set({ [category]: values })
      .then(() => renderContent())
      .catch((error) => {
        error;
      });
  }

  /**
   * @param {string} currentItem
   */
  function removeFromArray(currentItem) {
    const index = values.indexOf(currentItem);
    if (index > -1) {
      values.splice(index, 1);
    }
  }
};
