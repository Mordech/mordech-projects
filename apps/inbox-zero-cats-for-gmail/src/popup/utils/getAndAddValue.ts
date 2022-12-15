import browser from 'webextension-polyfill';

import { DataKeys } from '../@types/index';
import { renderContent } from '../index';

export const getAndAddValue = (category: DataKeys, value: string) =>
  browser.storage.local
    .get(category)
    .then((result) => {
      const values = result[category] || [];
      values.unshift(value);
      browser.storage.local
        .set({ [category]: values })
        .then(() => renderContent())
        .catch((error) => {
          error;
        });
    })
    .catch((error) => {
      error;
    });
