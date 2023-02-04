import React from 'react';
import { Column, Headline, Markdown } from '@mordech/react-components';

import { ScrollDownButton } from '../ScrollDownButton';

import { HeroContainer, ParagraphContainer } from './HeroHeader.styles';
import { WelcomeVideo } from './WelcomeVideo';

const WELCOME_MESSAGE = `Welcome!  \nI'm **Elad Mizrahi**`;
const ABOUT_ME = `a passionate **Product Designer & UX engineer**.

I combine my experience and knowledge in product design and front-end 
development to design and develop clever components that make designers 
and developers work better together.

I'm part of the **open-source guild**, **UX research** initiatives, 
and the **growth team** at Soluto.`;

export const HeroHeader = () => (
  <HeroContainer>
    <ParagraphContainer>
      <Headline size={5} asElement="h1">
        <Markdown asFragment>{WELCOME_MESSAGE}</Markdown>
      </Headline>
      <Markdown>{ABOUT_ME}</Markdown>
    </ParagraphContainer>
    <Column>
      <WelcomeVideo />
    </Column>
    <ScrollDownButton />
  </HeroContainer>
);
