import browser from 'webextension-polyfill';

import { Data } from '../@types/index';
import { renderContent } from '../index';

export const removeItem = (
  category: keyof Data,
  itemList: unknown[],
  item: unknown,
) => {
  const values = itemList;
  if (values.length !== 1) {
    // remove all instances of random image
    if (typeof item === 'string' && item.endsWith('mrd-spotlight')) {
      values
        .filter(
          (image) => typeof image === 'string' && image.endsWith('mrd-random'),
        )
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

  function removeFromArray(currentItem: unknown) {
    const index = values.indexOf(currentItem);
    if (index > -1) {
      values.splice(index, 1);
    }
  }
};
