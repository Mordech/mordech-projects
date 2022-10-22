import React, { FC } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Button, Navigation as NavigationComponent } from '@mordech/components';

import resume from '../../images/resume/elad-mizrahi-cv-c.pdf';
import logoAnimation from '../../lottie/logo.lottie.json';

const Logo = () => <Player autoplay loop src={logoAnimation} />;

export const Navigation: FC = () => (
  <NavigationComponent logo={<Logo />}>
    <Button startIcon="download" variant="outline" asElement="a" href={resume}>
      resume
    </Button>
  </NavigationComponent>
);
