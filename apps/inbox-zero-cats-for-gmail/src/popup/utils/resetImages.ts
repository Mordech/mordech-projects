import browser from 'webextension-polyfill';

import { defaultCatImages } from '../../data/defaultCatImages';
import { renderContent } from '../index';

export const resetImages = async () =>
  browser.storage.local
    .set({ catImageUrls: defaultCatImages })
    .then(() => renderContent())
    .catch((error) => {
      error;
    });
