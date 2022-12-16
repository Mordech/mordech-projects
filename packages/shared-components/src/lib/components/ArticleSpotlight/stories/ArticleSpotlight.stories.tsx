import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Main } from '../../../abstracts';
import { ArticleSpotlight } from '../ArticleSpotlight';

import thumbnail from './thumbnail.jpg';

export default {
  component: ArticleSpotlight,
  title: 'Organisms/ArticleSpotlight',
} as ComponentMeta<typeof ArticleSpotlight>;

const Template: ComponentStory<typeof ArticleSpotlight> = (args) => (
  <Main>
    <ArticleSpotlight {...args} />
    <ArticleSpotlight {...args} />
  </Main>
);

export const Primary = Template.bind({});
Primary.args = {
  href: '#',
  headline: '**Lorem Ipsum dollor:** Fusce dolor sed nunc',
  description: `Quas explicabo a ad. Ut commodi est *iusto eaque et reiciendis* ullam fugiat. Ex inventore fuga.

  Neque porro quisquam est qui dolorem **ipsum quia dolor** sit amet, consectetur, adipisci velit.`,
  thumbnailSrc: thumbnail,
};
