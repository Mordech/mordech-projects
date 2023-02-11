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

const Template = ({ saveToStorage }: MrdToggleThemeElement) =>
  html`<mrd-toggle-theme .saveToStorage=${saveToStorage} />`;
export const Default = Template.bind({
  saveToStorage: false,
});