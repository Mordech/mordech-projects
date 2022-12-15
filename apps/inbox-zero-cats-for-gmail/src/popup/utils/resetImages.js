import browser from 'webextension-polyfill';

import { defaultCatImages } from '../../data/defaultCatImages.js';
import { renderContent } from '../index.js';

export const resetImages = async () =>
  browser.storage.local
    .set({ catImageUrls: defaultCatImages })
    .then(() => renderContent())
    .catch((error) => {
      error;
    });
