import browser from 'webextension-polyfill';

import { defaultCatTitles } from '../data/index.js';
import { renderContent } from '../index.js';

export const resetTitles = async () =>
  browser.storage.local
    .set({ catTitles: defaultCatTitles })
    .then(() => renderContent())
    .catch((error) => {
      error;
    });
