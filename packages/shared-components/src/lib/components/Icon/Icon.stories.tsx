import React from 'react';
import { Meta, Story } from '@storybook/react';

import { colors } from '../../abstracts';

import { Icon } from './Icon';

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

const Template: Story = (args) => <Icon icon={'linkedin'} {...args} />;

export const Default = Template.bind({});
Default.args = { iconName: 'linkedin', size: '2rem' };
