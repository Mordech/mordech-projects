import React, { FC } from 'react';
import {
  Button,
  Navigation as NavigationComponent,
} from '@mordech/react-components';

import Logo from '../../images/logo.svg';
import resume from '../../images/resume/elad-mizrahi-cv-c.pdf';

export const Navigation: FC = () => (
  <NavigationComponent logo={<Logo />}>
    <Button startIcon="download" variant="outline" asElement="a" href={resume}>
      resume
    </Button>
  </NavigationComponent>
);
