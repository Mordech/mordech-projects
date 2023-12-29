import { colors } from '@mordech/tokens';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from '../../../Typography';
import { Footer } from '../../Footer';
import { links } from '../data/links';

import { Container, PlaceholderContent } from './story.styles';

export default {
  component: Footer,
  title: 'Organisms/Footer',
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Container>
    <PlaceholderContent />
    <PlaceholderContent />

    <Footer {...args}>
      <Typography color={colors.primary.onBase}>
        Designed and developed with{' '}
        <span aria-label="heart emoji" role="img">
          ❤️
        </span>{' '}
        by Elad Mizrahi
      </Typography>
    </Footer>
  </Container>
);

const TemplateWithoutPlaceholder: ComponentStory<typeof Footer> = (args) => (
  <Container>
    <Footer {...args}>
      <Typography color={colors.primary.onBase}>
        Designed and developed with{' '}
        <span aria-label="heart emoji" role="img">
          ❤️
        </span>{' '}
        by Elad Mizrahi
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
