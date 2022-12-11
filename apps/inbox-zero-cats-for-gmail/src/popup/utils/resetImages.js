import { defaultCatImages } from '../data/index.js';
import { renderContent } from '../index.js';
import browser from 'webextension-polyfill';

export const resetImages = async () =>
  browser.storage.local
    .set({ catImageUrls: defaultCatImages })
    .then(() => renderContent())
    .catch((error) => {
      error;
    });
