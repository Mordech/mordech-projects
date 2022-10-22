import React, { FC } from 'react';
import type { HeadFC } from 'gatsby';

import { Home } from '../components/home';

export const IndexPage: FC = () => (
  <>
    <Home />
  </>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Elad Mizrahi — Portfolio</title>;
