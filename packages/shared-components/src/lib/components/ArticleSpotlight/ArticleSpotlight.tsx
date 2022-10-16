import React, { FC } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { Button } from '../Button';
import { Markdown } from '../Markdown';
import { Paper } from '../Paper';
import { Headline } from '../Typography';
import {
  Container,
  Content,
  Description,
  Thumbnail,
  ThumbnailAnchor,
} from './ArticleSpotlight.styles';

export interface ArticleSpotlightProps {
  thumbnailSrc: string | ReactElement;
  headline: string;
  description: string;
  callToAction?: string;
  href: string;
}

export const ArticleSpotlight: FC<ArticleSpotlightProps> = ({
  callToAction = 'view project',
  href,
  headline,
  description,
  thumbnailSrc,
}) => (
  <Container as="article">
    <ThumbnailAnchor href={href}>
      <Paper variant="outlined">
        {typeof thumbnailSrc === 'string' ? (
          <Thumbnail loading="lazy" alt="" src={thumbnailSrc} />
        ) : (
          thumbnailSrc
        )}
      </Paper>
    </ThumbnailAnchor>
    <Content>
      <Description>
        <Headline asElement="h2" size={3}>
          <Markdown asFragment>{headline}</Markdown>
        </Headline>
        <Markdown>{description}</Markdown>
      </Description>
      <Button href={href} variant="flat" asElement="a">
        {callToAction}
      </Button>
    </Content>
  </Container>
);
