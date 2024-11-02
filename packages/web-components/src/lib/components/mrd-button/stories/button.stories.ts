/* eslint-disable @typescript-eslint/ban-ts-comment */
import { html } from 'lit-html';

import { MrdButtonElement } from '../button';

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

export const Default = ({
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

Default.args = {
  slot: 'Hello World',
  size: 'default',
  radius: 'default',
  color: 'primary',
  variant: 'fill',
  disabled: false,
  as: 'button',
};

export const Compact = Default.bind({});

Compact.args = {
  ...Default.args,
  // @ts-expect-error
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

export const Tiny = Default.bind({});

Tiny.args = {
  ...Compact.args,
  size: 'tiny',
};

export const Round = Default.bind({});

Round.args = {
  ...Compact.args,
  radius: 'round',
};

export const Pill = Default.bind({});

Pill.args = {
  ...Compact.args,
  radius: 'pill',
};

export const Secondary = Default.bind({});

Secondary.args = {
  ...Compact.args,
  color: 'secondary',
};

export const Success = Default.bind({});

Success.args = {
  ...Compact.args,
  color: 'success',
};

export const Error = Default.bind({});

Error.args = {
  ...Compact.args,
  color: 'error',
};

export const Disabled = Default.bind({});

Disabled.args = {
  ...Compact.args,
  disabled: true,
};

export const AsAnchor = Default.bind({});

AsAnchor.args = {
  ...Compact.args,
  as: 'a',
};

export const IconEnd = Default.bind({});

IconEnd.args = {
  ...Default.args,
  // @ts-expect-error
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

export const NoText = Default.bind({});

NoText.args = {
  ...Default.args,
  // @ts-expect-error
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

export const Tonal = Default.bind({});

Tonal.args = {
  ...Default.args,
  variant: 'tonal',
};

export const Text = Default.bind({});

Text.args = {
  ...Default.args,
  variant: 'text',
};

export const InvertedSecondary = Default.bind({});

InvertedSecondary.args = {
  ...Default.args,
  variant: 'inverted',
  color: 'secondary',
};
