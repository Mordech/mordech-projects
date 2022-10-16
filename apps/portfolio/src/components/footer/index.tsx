import React, { FC } from 'react';
import { links } from '../../data/links';
import {
  colors,
  Footer as FooterComponent,
  Typography,
} from '@mordech/components';

export const Footer: FC = () => (
  <FooterComponent links={links}>
    <Typography color={colors.lightest}>
      Designed and developed with ❤️ by Elad Mizrahi
    </Typography>
  </FooterComponent>
);
