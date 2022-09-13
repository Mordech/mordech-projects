import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { Paper } from '../Paper';
import { Markdown } from './Markdown';

export default {
  component: Markdown,
  title: 'Components/Markdown',
} as ComponentMeta<typeof Markdown>;

const StyledPaper = styled(Paper).attrs({ variant: 'outlined' })`
  padding: 2rem;
`;

const Template: ComponentStory<typeof Markdown> = (args) => (
  <StyledPaper>
    <Markdown {...args} />
  </StyledPaper>
);

const explanationText = `
  # Hey! I'm a markdown component

  My purpose is to help write texts inside \`React components\`
  I can *highligh* text make it **bold**!

  ## This is another title

  All using \`React Markdown\`.
  
  You can use the \`asFragment\` If [you]() want to replace paragraphs with fragment.

  \`\`\`
    // code block example
  \`\`\`
  \`\`\`
    const foo = (bar) => bar + 1;
  \`\`\`

  ### Todos
  - Custom link
  - Custom UL
  - Create tests
`;

export const Primary = Template.bind({});
Primary.args = {
  children: explanationText,
};
