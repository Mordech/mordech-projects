import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '../../Footer';
import { Typography } from '../../../Typography';
import { colors, pagePadding } from '../../../../abstracts';
import styled from 'styled-components';
import { links } from '../data/links';
import ArticleSpotlightStories from '../../../ArticleSpotlight/ArticleSpotlight.stories';
import { ArticleSpotlight } from '../../../ArticleSpotlight';
import { Container, PlaceholderContent } from './story.styles';

export default {
  component: Footer,
  title: 'Layouts/Footer',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Container>
    <PlaceholderContent />
    <PlaceholderContent />

    <Footer {...args}>
      <Typography color={colors.lightest}>
        Designed and developed with ❤️ by Elad Mizrahi
      </Typography>
    </Footer>
  </Container>
);

const TemplateWithoutPlaceholder: ComponentStory<typeof Footer> = (args) => (
  <Container>
    <Footer {...args}>
      <Typography color={colors.lightest}>
        Designed and developed with ❤️ by Elad Mizrahi
      </Typography>
    </Footer>
  </Container>
);

export const Primary = TemplateWithoutPlaceholder.bind({});
Primary.args = {
  links: links,
};

export const InContext = Template.bind({});
InContext.args = {
  links: links,
};

export const WithoutLinks = Template.bind({});
WithoutLinks.args = {
  links: [],
};
