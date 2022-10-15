import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Icon } from './Icon';
import { colors } from '../../abstracts';

export default {
  component: Icon,
  title: 'Components/Icon',
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
