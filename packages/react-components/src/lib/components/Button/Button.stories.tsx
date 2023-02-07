import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Atoms/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <header>
    <Button tabIndex={0} title="button example" {...args}>
      button example
    </Button>
  </header>
);

const StyledUl = styled.ul`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonRow: Story<ButtonProps> = (args) => (
  <header>
    <StyledUl aria-label="button examples">
      <li>
        <Button tabIndex={1} title="primary" {...args}>
          primary
        </Button>
      </li>
      <li>
        <Button tabIndex={2} variant="outline" title="outline" {...args}>
          outline
        </Button>
      </li>
      <li>
        <Button
          tabIndex={3}
          endIcon="download"
          variant="flat"
          title="flat"
          {...args}
        >
          flat
        </Button>
      </li>
    </StyledUl>
  </header>
);

export const Icon = Template.bind({});
Icon.args = {
  variant: 'primary',
  disabled: false,
  startIcon: 'download',
  endIcon: undefined,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  disabled: false,
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat',
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  disabled: false,
};

export const All = ButtonRow.bind({});
