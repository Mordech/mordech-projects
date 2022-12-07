import React, { FC } from 'react';
import { Footer as FooterComponent, Typography } from '@mordech/components';
import { colors } from '@mordech/tokens';

import { links } from '../../data/links';

export const Footer: FC = () => (
  <FooterComponent links={links}>
    <Typography color={colors.primary.on}>
      Designed and developed with ❤️ by Elad Mizrahi
    </Typography>
  </FooterComponent>
);
