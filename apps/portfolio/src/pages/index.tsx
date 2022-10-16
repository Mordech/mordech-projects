import React, { FC } from 'react';
import { GlobalStyle } from '@mordech/components';
import type { HeadFC } from 'gatsby';

import { Home } from '../components/home';

export const IndexPage: FC = () => (
  <>
    <GlobalStyle />
    <Home />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Elad Mizrahi — Portfolio</title>;
