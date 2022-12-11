import { defaultCatTitles } from '../data/index.js';
import { renderContent } from '../index.js';
import browser from 'webextension-polyfill';

export const resetTitles = async () =>
  browser.storage.local
    .set({ catTitles: defaultCatTitles })
    .then(() => renderContent())
    .catch((error) => {
      error;
    });
