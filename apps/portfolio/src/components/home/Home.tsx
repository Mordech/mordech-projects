import {
  ArticleSpotlight,
  Column,
  Headline,
  Main,
  Markdown,
  Section,
} from '@mordech/components';
import React, { FC } from 'react';
import NotFoundPage from '../../pages/404';
import { articleSpotlightData } from './data';
import { WelcomeVideo } from './WelcomeVideo';
import { HeroHeader, ParagraphContainer } from './home.styles';

const WELCOME_MESSAGE = `Welcome!  \nI'm **Elad Mizrahi**`;
const ABOUT_ME = `a passionate **Product Designer & UX engineer**.

I combine my experience and knowledge in product design and front-end 
development to design and develop clever components that make designers 
and developers work better together.

I'm part of the **open-source guild**, **UX research** initiatives, 
and the **growth team** at Soluto.`;

export const Home: FC = () => (
  <>
    <HeroHeader>
      <ParagraphContainer>
        <Headline size={5} as={'h1'}>
          <Markdown asFragment>{WELCOME_MESSAGE}</Markdown>
        </Headline>
        <Markdown>{ABOUT_ME}</Markdown>
      </ParagraphContainer>
      <Column>
        <WelcomeVideo />
      </Column>
    </HeroHeader>
    <Main>
      {articleSpotlightData.map((articleProps) => (
        <ArticleSpotlight key={articleProps.headline} {...articleProps} />
      ))}
    </Main>
  </>
);
