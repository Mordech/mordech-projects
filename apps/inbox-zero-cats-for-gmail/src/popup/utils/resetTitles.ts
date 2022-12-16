import browser from 'webextension-polyfill';

import { defaultCatTitles } from '../../data/defaultCatTitles';
import { renderContent } from '../index';

export const resetTitles = async () =>
  browser.storage.local
    .set({ catTitles: defaultCatTitles })
    .then(() => renderContent())
    .catch((error) => {
      error;
    });
