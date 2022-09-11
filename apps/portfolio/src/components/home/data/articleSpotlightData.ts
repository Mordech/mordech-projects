import { ArticleSpotlightProps } from '@mordech/components';
import voluImage from '../../../images/thumbnails/volu.png';
import moneynetImage from '../../../images/thumbnails/moneynet.png';
import jingaImage from '../../../images/thumbnails/jinga.png';
import comicsappImage from '../../../images/thumbnails/comicsapp.png';

export const articleSpotlightData: ArticleSpotlightProps[] = [
  {
    href: '/volu',
    headline: '**Volu:** Mobile App & OS Design',
    description: `The Volu device blends tobacco and cannabis, or two strains of cannabis and produces up to six joints at a time.

I was part of all stages of the product — such as industrial design, development, and interface design.`,
    thumbnailSrc: voluImage,
  },
  {
    href: '/moneynet',
    headline: '**MoneyNet Israel:** Currency Converter',
    description: `The assignment was to invent a currency converter that can serve financial service providers as a professional tool.

In the process of making this currency converter, we created a unique converter suited for Financial Service Providers.`,
    thumbnailSrc: moneynetImage,
  },
  {
    href: '/comics',
    headline: '**Comics App:** Personal Project',
    description: `Maintaining an extensive comic book library on a tablet is a challenging task.

My brother — a software engineer, and I are creating a personal comic book reader that can be a better alternative to the ones on the market today.`,
    thumbnailSrc: comicsappImage,
  },
  {
    href: '/jinga',
    headline: '**Jinga Clothing:** Website & Outfit Customiser',
    description: `Jinga Clothing is a company that specialises in customised cycling clothing for teams and events.

Jinga commissioned us to create a new eCommerce website and customiser.`,
    thumbnailSrc: jingaImage,
  },
];
