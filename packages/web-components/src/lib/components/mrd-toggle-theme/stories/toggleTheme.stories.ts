import { html } from 'lit-html';

import { MrdToggleThemeElement } from '..';

export default {
  title: 'Atoms/mrd-toggle-theme',
  component: 'mrd-toggle-theme',
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'Toggle theme between light and dark mode',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'compact', 'tiny'],
      },
      description: 'The size of the toggle button',
      table: {
        type: { summary: 'default | compact | tiny' },
        defaultValue: { summary: 'default' },
      },
    },
    saveToStorage: {
      control: 'boolean',
      description: 'Save theme to local storage',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
};

const Template = ({ saveToStorage, disabled, size }: MrdToggleThemeElement) =>
  html`<mrd-toggle-theme
    .saveToStorage=${saveToStorage}
    .disabled=${disabled}
    size=${size}
  />`;
export const Default = Template.bind({
  saveToStorage: false,
});
