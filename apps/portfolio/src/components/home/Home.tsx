import {
  ArticleSpotlight,
  colors,
  Column,
  Footer,
  Headline,
  Main,
  Markdown,
  Typography,
} from '@mordech/components';
import React, { FC } from 'react';
import { articleData } from '../../data';
import { WelcomeVideo } from './WelcomeVideo';
import { HeroHeader, ParagraphContainer } from './home.styles';
import { links } from '../../data/links';

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
        <Headline size={5} asElement={'h1'}>
          <Markdown asFragment>{WELCOME_MESSAGE}</Markdown>
        </Headline>
        <Markdown>{ABOUT_ME}</Markdown>
      </ParagraphContainer>
      <Column>
        <WelcomeVideo />
      </Column>
    </HeroHeader>
    <Main>
      {articleData.map((articleProps) => (
        <ArticleSpotlight key={articleProps.headline} {...articleProps} />
      ))}
    </Main>
    <Footer links={links}>
      <Typography color={colors.lightest}>
        Designed and developed with ❤️ by Elad Mizrahi
      </Typography>
    </Footer>
  </>
);
