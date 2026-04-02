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
  color: 'rgba(255, 192, 203, 1)',
  name: 'opaque pink',
  active: false,
};

export const PinkWithAlpha = ({
  color,
  name,
  active,
}: MrdPainSwatchElement) => html`
  <mrd-paint-swatch .color=${color} .name=${name} .active=${active}>
  </mrd-paint-swatch>
`;

PinkWithAlpha.args = {
  color: 'rgba(255, 192, 203, 0.4)',
  name: 'pink 40%',
  active: false,
};

export const HexWithAlpha = ({
  color,
  name,
  active,
}: MrdPainSwatchElement) => html`
  <mrd-paint-swatch .color=${color} .name=${name} .active=${active}>
  </mrd-paint-swatch>
`;

HexWithAlpha.args = {
  color: '#FF80C066',
  name: 'hex alpha',
  active: false,
};

export const RgbaAlpha = ({
  color,
  name,
  active,
}: MrdPainSwatchElement) => html`
  <mrd-paint-swatch .color=${color} .name=${name} .active=${active}>
  </mrd-paint-swatch>
`;

RgbaAlpha.args = {
  color: 'rgba(100, 0, 255, 0.6)',
  name: 'purple 60%',
  active: false,
};
