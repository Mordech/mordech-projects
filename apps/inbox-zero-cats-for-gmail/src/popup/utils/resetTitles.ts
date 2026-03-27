import browser from 'webextension-polyfill';

import { defaultCatSubtitle, getPack, PackKey } from '../../data';

export const resetTitles = async (): Promise<void> => {
  const { activePack } = await browser.storage.local
    .get('activePack')
    .catch(() => ({ activePack: undefined }));

  const validPacks: PackKey[] = ['cats', 'dogs', 'nature'];
  const resolvedPack: PackKey = validPacks.includes(activePack as PackKey)
    ? (activePack as PackKey)
    : 'cats';

  const { titles, subtitle } = getPack(resolvedPack);
  const catTitles = titles.map((text) => ({ text }));
  const catSubtitle = subtitle ?? defaultCatSubtitle;

  await browser.storage.local.set({ catTitles, catSubtitle }).catch((error) => {
    console.error('[resetTitles] Storage error:', error);
  });
};
