import { defaultCatImages } from './defaultCatImages';
import { defaultCatSubtitle } from './defaultCatSubtitle';
import { defaultCatTitles } from './defaultCatTitles';
import { defaultDogImages } from './defaultDogImages';
import { defaultDogSubtitle } from './defaultDogSubtitle';
import { defaultDogTitles } from './defaultDogTitles';
import { defaultNatureImages } from './defaultNatureImages';
import { defaultNatureSubtitle } from './defaultNatureSubtitle';
import { defaultNatureTitles } from './defaultNatureTitles';

export { defaultCatImages } from './defaultCatImages';
export { defaultCatSubtitle } from './defaultCatSubtitle';
export { defaultCatTitles } from './defaultCatTitles';
export { defaultDogImages } from './defaultDogImages';
export { defaultDogSubtitle } from './defaultDogSubtitle';
export { defaultDogTitles } from './defaultDogTitles';
export { defaultNatureImages } from './defaultNatureImages';
export { defaultNatureSubtitle } from './defaultNatureSubtitle';
export { defaultNatureTitles } from './defaultNatureTitles';

export type PackKey = 'cats' | 'dogs' | 'nature';

interface Pack {
  images: string[];
  titles: string[];
  subtitle: string;
}

const PACKS: Record<PackKey, Pack> = {
  cats: {
    images: defaultCatImages,
    titles: defaultCatTitles,
    subtitle: defaultCatSubtitle,
  },
  dogs: {
    images: defaultDogImages,
    titles: defaultDogTitles,
    subtitle: defaultDogSubtitle,
  },
  nature: {
    images: defaultNatureImages,
    titles: defaultNatureTitles,
    subtitle: defaultNatureSubtitle,
  },
};

export const getPack = (key: PackKey): Pack => PACKS[key];
