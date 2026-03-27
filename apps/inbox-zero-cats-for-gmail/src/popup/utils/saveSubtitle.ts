import browser from 'webextension-polyfill';

import { renderContent } from '../index';

export const saveSubtitle = (value: string) =>
  browser.storage.local
    .set({ catSubtitle: value })
    .then(() => renderContent())
    .catch((error) => {
      error;
    });
