import { html, svg, SVGTemplateResult } from 'lit-html';

import '../../mrd-button';
import '../text-field';

import { MrdTextFieldElement } from '../text-field';

const icon = svg`
  <svg
    height="32px"
    slot="placeholder-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9758 2.81818L7.71278 7.0915L11.9758 11.3648L16.2389 7.0915L11.9758 2.81818Z"
    />
    <path
      d="M16.6696 7.52313L12.4065 11.7964L16.6696 16.0698L20.9326 11.7964L16.6696 7.52313Z"
    />
    <path
      d="M2.93262 11.7964L7.19567 7.52313L11.4587 11.7964L7.19567 16.0698L2.93262 11.7964Z"
    />
    <path
      d="M11.9326 12.2715L7.66957 16.5449L11.9326 20.8182L16.1957 16.5449L11.9326 12.2715Z"
    />
  </svg>
`;

export default {
  title: 'Atoms/mrd-text-field',
  component: 'mrd-text-field',
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: 'A simple text field',
      },
    },
  },
  argTypes: {
    size: {
      options: ['default', 'compact', 'tiny'],
      control: {
        type: 'select',
        table: {
          type: { summary: 'default | round | pill' },
          defaultValue: { summary: 'default' },
        },
      },
      description: 'Field size',
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
      description: 'Field radius',
      table: {
        type: { summary: 'default | round | pill' },
        defaultValue: { summary: 'default' },
      },
    },
    label: {
      options: 'string',
      control: {
        type: 'text',
      },
      description:
        'The label of the field, by default will also be the `name` property',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      options: 'string',
      control: {
        type: 'text',
      },
      description: 'The placeholder text for the field',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    autocomplete: {
      options: 'AutoFill',
      control: {
        type: 'text',
      },
      description:
        'Lets developers specify what if any permission the user agent has to provide automated assistance in filling out form field values, as well as guidance to the browser as to the type of information expected in the field.',
      table: {
        type: { summary: 'AutoFill' },
      },
    },
    type: {
      options: [
        'number',
        'text',
        'email',
        'password',
        'search',
        'tel',
        'url',
        'textarea',
      ],
      control: {
        type: 'select',
      },
      description: 'The type of the field',
      table: {
        type: {
          summary:
            '"number" | "text" | "email" | "password" | "search" | "tel" | "url" | "textarea"',
        },
        defaultValue: { summary: 'text' },
      },
    },
    supportingText: {
      options: 'string',
      control: {
        type: 'text',
      },
      description:
        'Adds a supporting text in the bottom. Will act as `error-text` if not selected',
      table: {
        type: { summary: 'string' },
      },
    },
    errorText: {
      options: 'string',
      control: {
        type: 'text',
      },
      description: 'Adds a error text in the bottom. Only visible in error',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      options: 'string',
      control: {
        type: 'text',
      },
      description:
        'The initial value of the field. To get the current value use `currentValue`',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      options: 'string',
      control: {
        type: 'text',
      },
      description:
        'The name of the field, by default will also be the `name` property',
      table: {
        type: { summary: 'string' },
      },
    },
    required: {
      control: 'boolean',
      description:
        'Indicated if the field is required. Adds an asterisk in the label.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'TextField disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Used to indicate validation error',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    icon: {
      description:
        'The `placeholder-icon` slot is used to add an icon in the placeholder. To add an icon, add an element inside the text field with the attribute `slot="placeholder-icon"`',
      table: {
        type: { summary: 'slot' },
      },
    },
  },
};

type TextFieldStoryType = MrdTextFieldElement & {
  icon?: SVGTemplateResult;
};

export const Default = ({
  size,
  radius,
  error,
  label,
  name,
  required,
  supportingText,
  errorText,
  value,
  placeholder,
  autocomplete,
  type,
  disabled,
  dir,
  icon,
}: TextFieldStoryType) => html`
  <div
    style="display:flex; width: 300px; justify-content: stretch; flex-direction: column;"
  >
    <mrd-text-field
      size=${size}
      radius=${radius}
      supporting-text=${supportingText}
      error-text=${errorText}
      value=${value}
      placeholder=${placeholder}
      .autocomplete=${autocomplete}
      type=${type}
      ?required=${required}
      ?disabled=${disabled}
      .dir=${dir}
      .error=${error}
      .label=${label}
      .name=${name}
    >
      ${icon}
    </mrd-text-field>
  </div>
`;

Default.args = {
  label: 'Label',
  required: true,
  size: 'compact',
  placeholder: 'Hello world',
  supportingText: 'This is a supporting text',
  errorText: 'This is an error text',
  icon,
} as Partial<TextFieldStoryType>;

export const RightToLeft = Default.bind({});

RightToLeft.args = {
  dir: 'rtl',
  label: 'לייבל',
  required: true,
  size: 'default',
  placeholder: 'שלום עולם',
  supportingText: 'זהו טקסט עזרה',
  errorText: 'זהו טקסט הערה',
  icon,
};

export const Error = Default.bind({});

Error.args = {
  error: true,
  label: 'Label',
  required: true,
  size: 'compact',
  placeholder: 'Hello world',
  supportingText: 'This is a supporting text',
  errorText: 'This is an error text',
};

export const Password = Default.bind({});

Password.args = {
  label: 'Label',
  required: true,
  size: 'default',
  type: 'password',
  autocomplete: 'new-password',
  placeholder: 'Hello world',
  supportingText: 'This is a supporting text',
  errorText: 'This is an error text',
};

export const Compact = Default.bind({});

Compact.args = {
  label: 'Label',
  required: true,
  size: 'compact',
  type: 'password',
  autocomplete: 'new-password',
  placeholder: 'Hello world',
  supportingText: 'This is a supporting text',
  errorText: 'This is an error text',
};

export const Tiny = Default.bind({});

Tiny.args = {
  label: 'Label',
  required: true,
  size: 'tiny',
  type: 'password',
  autocomplete: 'new-password',
  placeholder: 'Hello world',
  supportingText: 'This is a supporting text',
  errorText: 'This is an error text',
};

export const Round = Default.bind({});

Round.args = {
  label: 'Label',
  radius: 'round',
  type: 'tel',
  autocomplete: 'tel',
  placeholder: 'Hello world',
  supportingText: 'This is a supporting text',
  errorText: 'This is an error text',
};

export const Pill = Default.bind({});

Pill.args = {
  label: 'Label',
  required: true,
  radius: 'pill',
  type: 'email',
  autocomplete: 'email',
  placeholder: 'Hello world',
  supportingText: 'This is a supporting text',
  errorText: 'This is an error text',
};
