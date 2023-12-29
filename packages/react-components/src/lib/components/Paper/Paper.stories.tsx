import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import { Typography } from '../Typography';

import { Paper } from './Paper';
import { PaperProps } from './types';

export default {
  component: Paper,
  title: 'Atoms/Paper',
} as Meta;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 18rem;
  gap: 0.5rem;
  padding: 1rem;
`;

const Template: Story<PaperProps> = (args) => (
  <Paper {...args}>
    <Container>
      <Typography variant="headline" size={3} asElement="h1">
        I'm a Paper component!
      </Typography>
      <Typography asElement="p">
        Paper is a component that provides a simple way to create surfaces that
        contain a set of related components.
      </Typography>
      <Typography asElement="p">
        It can be used to create cards, dialogs, and more.
      </Typography>
    </Container>
  </Paper>
);

export const Primary = Template.bind({});
Primary.args = { asElement: 'div' };
