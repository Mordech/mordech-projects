import { ArticleSpotlight, Main } from '@mordech/components';
import React, { FC } from 'react';
import { articleSpotlightData } from './data';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: FC<HomeProps> = () => (
  <Main>
    {articleSpotlightData.map((articleProps) => (
      <ArticleSpotlight key={articleProps.headline} {...articleProps} />
    ))}
  </Main>
);

export default Home;
