import React, { FC } from 'react';
import type { HeadFC } from 'gatsby';
import { Home } from './index/';
import { GlobalStyle } from '@mordech/components';

export const IndexPage: FC = () => (
  <>
    <GlobalStyle />
    <Home />;
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Elad Mizrahi — Portfolio</title>;
