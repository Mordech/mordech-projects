import React, { FC } from 'react';
import {
  colors,
  Footer as FooterComponent,
  Typography,
} from '@mordech/components';

import { links } from '../../data/links';

export const Footer: FC = () => (
  <FooterComponent links={links}>
    <Typography color={colors.lightest}>
      Designed and developed with ❤️ by Elad Mizrahi
    </Typography>
  </FooterComponent>
);
