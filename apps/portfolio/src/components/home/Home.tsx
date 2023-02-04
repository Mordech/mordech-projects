import React, { FC } from 'react';
import { ArticleSpotlight, Main } from '@mordech/react-components';
import styled from 'styled-components';

import { articleData } from '../../data';

import { HeroHeader } from './HeroHeader';

export const HomeMain = styled(Main)`
  /* Buffer for the header */
  padding-block-start: 8rem;
`;

export const Home: FC = () => (
  <>
    <HeroHeader />
    <HomeMain id="main-content">
      {articleData.map((articleProps) => (
        <ArticleSpotlight key={articleProps.headline} {...articleProps} />
      ))}
    </HomeMain>
  </>
);
