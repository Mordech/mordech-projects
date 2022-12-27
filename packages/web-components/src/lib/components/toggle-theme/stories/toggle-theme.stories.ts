//  create storybook web-components

import { html } from 'lit';

import '../toggle-theme';

import { ToggleTheme } from '../toggle-theme';

export default {
  title: 'Components/mrd-toggle-theme',
  component: 'mrd-toggle-theme',
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

const Template = ({ saveToStorage }: ToggleTheme) =>
  html`<mrd-toggle-theme .saveToStorage=${saveToStorage}></mrd-toggle-theme>`;
export const Default = Template.bind({});
