import browser from 'webextension-polyfill';

import { getPack, PackKey } from '../../data';

export const resetImages = async (): Promise<void> => {
  const { activePack } = await browser.storage.local
    .get('activePack')
    .catch(() => ({ activePack: undefined }));

  const validPacks: PackKey[] = ['cats', 'dogs', 'nature', 'art'];
  const resolvedPack: PackKey = validPacks.includes(activePack as PackKey)
    ? (activePack as PackKey)
    : 'cats';
  const pack = getPack(resolvedPack);

  await browser.storage.local
    .set({ catImageUrls: pack })
    .catch((error) => {
      console.error('[resetImages] Storage error:', error);
    });
};
