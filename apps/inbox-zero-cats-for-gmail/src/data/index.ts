import { defaultCatImages } from './defaultCatImages';
import { defaultDogImages } from './defaultDogImages';
import { defaultNatureImages } from './defaultNatureImages';
import { defaultArtImages } from './defaultArtImages';

export { defaultCatImages } from './defaultCatImages';
export { defaultCatSubtitle } from './defaultCatSubtitle';
export { defaultCatTitles } from './defaultCatTitles';
export { defaultDogImages } from './defaultDogImages';
export { defaultNatureImages } from './defaultNatureImages';
export { defaultArtImages } from './defaultArtImages';

export type PackKey = 'cats' | 'dogs' | 'nature' | 'art';

export const getPack = (key: PackKey): string[] => {
  switch (key) {
    case 'cats':
      return defaultCatImages;
    case 'dogs':
      return defaultDogImages;
    case 'nature':
      return defaultNatureImages;
    case 'art':
      return defaultArtImages;
  }
};
