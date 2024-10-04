import { html } from 'lit-html';

import { MrdPainSwatchElement } from '../paint-swatch';

export default {
  title: 'Atoms/mrd-paint-swatch',
  component: 'mrd-paint-swatch',
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
  },
};

export const Default = ({ color, name, active }: MrdPainSwatchElement) => html`
  <mrd-paint-swatch .color=${color} .name=${name} .active=${active}>
  </mrd-paint-swatch>
`;

Default.args = {
  color: 'pink',
  name: 'black',
  active: false,
};
