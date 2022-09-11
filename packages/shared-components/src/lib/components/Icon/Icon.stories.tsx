import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Icon } from './Icon';
import { colors } from '../../abstracts';

export default {
  component: Icon,
  title: 'Atoms/Icon',
  argTypes: {
    iconColor: {
      control: {
        type: 'color',
        presetColors: Object.values(colors),
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Icon iconName={'linkedin'} {...args} />;

export const Default = Template.bind({});
Default.args = { iconName: 'linkedin', size: '2rem' };
