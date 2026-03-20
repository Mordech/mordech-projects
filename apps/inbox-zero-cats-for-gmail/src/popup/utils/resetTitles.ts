import browser from 'webextension-polyfill';

import { defaultCatSubtitle, defaultCatTitles } from '../../data';

export const resetTitles = async (): Promise<void> => {
  await browser.storage.local
    .set({ catTitles: defaultCatTitles, catSubtitle: defaultCatSubtitle })
    .catch((error) => {
      console.error('[resetTitles] Storage error:', error);
    });
};
