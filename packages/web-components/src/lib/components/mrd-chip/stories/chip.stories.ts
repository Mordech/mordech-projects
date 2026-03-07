import { html } from 'lit-html';

import { MrdChipElement } from '../chip';

export default {
  title: 'Atoms/mrd-chip',
  component: 'mrd-chip',
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component:
          'A pill-shaped label used to represent metadata, filters, or tags.',
      },
    },
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'error'],
      control: { type: 'select' },
      table: {
        type: { summary: 'primary | secondary | success | error' },
        defaultValue: { summary: 'primary' },
      },
      description: 'Chip color variant',
    },
    variant: {
      options: ['default', 'interactive', 'clearable'],
      control: { type: 'select' },
      table: {
        type: { summary: 'default | interactive | clearable' },
        defaultValue: { summary: 'default' },
      },
      description:
        'Chip behaviour: default (static label), interactive (clickable), or clearable (shows remove button)',
    },
    slot: {},
  },
};

export const Default = ({
  slot,
  color,
  variant,
}: MrdChipElement & { slot: string }) => html`
  <mrd-chip .color=${color} .variant=${variant}> ${slot} </mrd-chip>
`;

Default.args = {
  slot: 'Label',
  color: 'primary',
  variant: 'default',
};

export const Interactive = Default.bind({});

Interactive.args = {
  ...Default.args,
  variant: 'interactive',
};

export const Clearable = Default.bind({});

Clearable.args = {
  ...Default.args,
  variant: 'clearable',
};

export const WithIconStart = ({ color, variant }: MrdChipElement) => html`
  <mrd-chip .color=${color} .variant=${variant}>
    <svg
      slot="icon-start"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
      />
    </svg>
    Label
  </mrd-chip>
`;

WithIconStart.args = {
  color: 'primary',
  variant: 'default',
};

export const Secondary = Default.bind({});

Secondary.args = {
  ...Default.args,
  color: 'secondary',
};

export const Success = Default.bind({});

Success.args = {
  ...Default.args,
  color: 'success',
};

export const Error = Default.bind({});

Error.args = {
  ...Default.args,
  color: 'error',
};

export const ClearableImplementation = () => {
  const chips = ['React', 'TypeScript', 'Lit', 'Web Components'];

  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.gap = '0.5rem';
  container.style.flexWrap = 'wrap';

  const render = (items: string[]) => {
    container.innerHTML = '';
    items.forEach((label) => {
      const chip = document.createElement('mrd-chip') as MrdChipElement;
      chip.variant = 'clearable';
      chip.textContent = label;
      chip.addEventListener('mrd-chip-clear', () => {
        const updated = items.filter((i) => i !== label);
        render(updated);
      });
      container.appendChild(chip);
    });
  };

  render(chips);
  return container;
};
