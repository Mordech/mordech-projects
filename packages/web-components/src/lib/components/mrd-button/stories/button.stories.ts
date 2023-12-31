import { html } from 'lit-html';

import { MrdButtonElement } from '..';

export default {
  title: 'Atoms/mrd-button',
  component: 'mrd-button',
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'A simple button',
      },
    },
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'error'],
      control: {
        type: 'select',
      },
      table: {
        type: { summary: 'primary | secondary | success | error' },
        defaultValue: { summary: 'primary' },
      },
      description: 'Button color',
    },
    variant: {
      options: ['fill', 'tonal', 'inverted', 'text'],
      control: {
        type: 'select',
      },
      table: {
        type: { summary: 'fill | tonal | inverted | text' },
        defaultValue: { summary: 'fill' },
      },
      description: 'Button variant',
    },
    size: {
      options: ['default', 'compact', 'tiny'],
      control: {
        type: 'select',
        table: {
          type: { summary: 'default | round | pill' },
          defaultValue: { summary: 'default' },
        },
      },
      description: 'Button size',
      table: {
        type: { summary: 'default | compact | tiny' },
        defaultValue: { summary: 'default' },
      },
    },
    radius: {
      options: ['default', 'round', 'pill'],
      control: {
        type: 'select',
      },
      description: 'Button radius',
      table: {
        type: { summary: 'default | round | pill' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Button disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    as: {
      options: ['button', 'a'],
      control: {
        type: 'select',
      },
      description: 'Button element',
      table: {
        type: { summary: 'button | a' },
        defaultValue: { summary: 'button' },
      },
    },
    slot: {},
  },
};

const Template = ({
  slot,
  size,
  radius,
  color,
  variant,
  disabled,
  as,
}: MrdButtonElement) => html`
  <mrd-button
    .size=${size}
    .radius=${radius}
    .color=${color}
    .variant=${variant}
    .disabled=${disabled}
    .as=${as}
  >
    ${slot}
  </mrd-button>
`;

export const Default = Template.bind({});

Default.args = {
  slot: 'Hello World',
  size: 'default',
  radius: 'default',
  color: 'primary',
  variant: 'fill',
  disabled: false,
  as: 'button',
};

export const Compact = Template.bind({});

Compact.args = {
  ...Default.args,
  slot: html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="currentcolor"
    >
      <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
    </svg>
    Hello World
  `,
  size: 'compact',
};

export const Tiny = Template.bind({});

Tiny.args = {
  ...Compact.args,
  size: 'tiny',
};

export const Round = Template.bind({});

Round.args = {
  ...Compact.args,
  radius: 'round',
};

export const Pill = Template.bind({});

Pill.args = {
  ...Compact.args,
  radius: 'pill',
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Compact.args,
  color: 'secondary',
};

export const Success = Template.bind({});

Success.args = {
  ...Compact.args,
  color: 'success',
};

export const Error = Template.bind({});

Error.args = {
  ...Compact.args,
  color: 'error',
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...Compact.args,
  disabled: true,
};

export const AsAnchor = Template.bind({});

AsAnchor.args = {
  ...Compact.args,
  as: 'a',
};

export const IconEnd = Template.bind({});

IconEnd.args = {
  ...Default.args,
  slot: html`
    Hello World
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="currentcolor"
      slot="icon-end"
    >
      <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
    </svg>
  `,
};

export const NoText = Template.bind({});

NoText.args = {
  ...Default.args,
  slot: html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="currentcolor"
      slot="icon-start"
    >
      <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
    </svg>
  `,
};

export const Tonal = Template.bind({});

Tonal.args = {
  ...Default.args,
  variant: 'tonal',
};

export const Text = Template.bind({});

Text.args = {
  ...Default.args,
  variant: 'text',
};

export const InvertedSecondary = Template.bind({});

InvertedSecondary.args = {
  ...Default.args,
  variant: 'inverted',
  color: 'secondary',
};
