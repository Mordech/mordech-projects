import { html, nothing } from 'lit-html';

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
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'error'],
      },
      table: {
        type: { summary: 'primary | secondary | success | error' },
        defaultValue: { summary: 'primary' },
      },
      description: 'Button color',
    },
    variant: {
      control: {
        type: 'select',
        options: ['fill', 'tonal', 'inverted', 'text'],
      },
      table: {
        type: { summary: 'fill | tonal | inverted | text' },
        defaultValue: { summary: 'fill' },
      },
      description: 'Button variant',
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'compact', 'tiny'],
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
      control: {
        type: 'select',
        options: ['default', 'round', 'pill'],
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
    slot: {
      control: 'text',
      description: 'Slot content. Defaults to empty slot',
      table: {
        type: { summary: 'HTMLElement' },
      },
    },
  },
};

export const Default = ({
  slot = `Hello World!`,
  size,
  radius,
  color,
  variant,
  disabled,
}: MrdButtonElement) =>
  html`<mrd-button
    size=${size || nothing}
    radius=${radius || nothing}
    color=${color || nothing}
    variant=${variant || nothing}
    .disabled=${disabled}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="currentColor"
    >
      <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
    </svg>
    ${slot}
  </mrd-button> `;
