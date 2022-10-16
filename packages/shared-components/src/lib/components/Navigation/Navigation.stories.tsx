import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navigation } from './Navigation';

export default {
  component: Navigation,
  title: 'Navigation',
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
