import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleSpotlight } from './ArticleSpotlight';
import { Main } from '..';

export default {
  component: ArticleSpotlight,
  title: 'Layouts/ArticleSpotlight',
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
  headline: '**Lorem Ipsum dollor:** Fusce at dolor sed nunc',
  description: `Quas explicabo a ad. Ut commodi est *iusto eaque et reiciendis* ullam fugiat. Ex inventore fuga.

  Neque porro quisquam est qui dolorem **ipsum quia dolor** sit amet, consectetur, adipisci velit.`,
  thumbnailSrc: 'https://source.unsplash.com/random/1600x900?cat',
};
