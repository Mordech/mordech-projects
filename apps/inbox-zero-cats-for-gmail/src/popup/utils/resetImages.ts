import browser from 'webextension-polyfill';

import { getPack, PackKey } from '../../data';

export const resetImages = async (): Promise<void> => {
  const { activePack } = await browser.storage.local
    .get('activePack')
    .catch(() => ({ activePack: undefined }));

  const validPacks: PackKey[] = ['cats', 'dogs', 'nature'];
  const resolvedPack: PackKey = validPacks.includes(activePack as PackKey)
    ? (activePack as PackKey)
    : 'cats';
  const { images } = getPack(resolvedPack);

  await browser.storage.local.set({ catImageUrls: images }).catch((error) => {
    console.error('[resetImages] Storage error:', error);
  });
};
