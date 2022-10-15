import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '../Footer';
import { Typography } from '../../Typography';
import { colors } from '../../../abstracts';
import styled from 'styled-components';
import { links } from './data/links';

export default {
  component: Footer,
  title: 'Layouts/Footer',
} as ComponentMeta<typeof Footer>;

const Container = styled.div`
  width: 90vw;
`;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Container>
    <Footer {...args}>
      <Typography color={colors.lightest}>
        Designed and developed with ❤️ by Elad Mizrahi
      </Typography>
    </Footer>
  </Container>
);

export const Primary = Template.bind({});
Primary.args = {
  links: links,
};
