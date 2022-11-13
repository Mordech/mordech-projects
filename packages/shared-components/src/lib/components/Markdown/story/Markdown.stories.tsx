import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled from 'styled-components';

import { Paper } from '../../Paper';
import { Markdown } from '../Markdown';

import { explanationText } from './consts';

export default {
  component: Markdown,
  title: 'Atoms/Markdown',
} as ComponentMeta<typeof Markdown>;

const StyledPaper = styled(Paper).attrs({ variant: 'outlined' })`
  padding: 2rem;
`;

const Template: ComponentStory<typeof Markdown> = (args) => (
  <StyledPaper>
    <Markdown {...args} />
  </StyledPaper>
);

export const Primary = Template.bind({});
Primary.args = {
  children: explanationText,
};
