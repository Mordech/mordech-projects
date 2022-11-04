import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { colors } from '../../abstracts';
import { defaultTypographyProps } from './props';
import {
  Code,
  Headline,
  Highlight,
  InlineCode,
  Paragraph,
  Strong,
} from './shorthands';
import { TypographyProps } from './types';
import { Typography } from './Typography';

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 33rem;
`;

const SubParagraphContainer = styled(ParagraphContainer)`
  gap: 0.25rem;
`;

export default {
  component: Typography,
  title: 'Atoms/Typography',
  argTypes: {
    size: {
      table: { defaultValue: { summary: defaultTypographyProps.size } },
      control: { type: 'range', min: 1, max: 5, step: 1 },
    },
    color: {
      table: { defaultValue: { summary: defaultTypographyProps.color } },
      control: {
        type: 'color',
        presetColors: Object.values(colors),
      },
    },
    variant: {},
    as: {
      table: {
        defaultValue: { summary: 'span' },
      },
    },
    weight: {
      table: { defaultValue: { summary: defaultTypographyProps.weight } },
    },
    lineHeight: {
      table: { defaultValue: { summary: defaultTypographyProps.lineHeight } },
    },
    fontFamily: {
      table: { defaultValue: { summary: defaultTypographyProps.fontFamily } },
    },
    align: {
      table: { defaultValue: { summary: defaultTypographyProps.align } },
    },
    whiteSpace: {
      table: { defaultValue: { summary: defaultTypographyProps.whiteSpace } },
    },
    highlight: {
      table: { defaultValue: { summary: defaultTypographyProps.highlight } },
      control: {
        type: 'color',
        presetColors: Object.values(colors),
      },
    },
    srOnly: {
      table: { defaultValue: { summary: defaultTypographyProps.srOnly } },
    },
  },
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <Typography asElement="span" {...args}>
    I'm a text component!
  </Typography>
);

const ParagraphTemplate: Story<TypographyProps> = (args) => (
  <ParagraphContainer>
    <SubParagraphContainer>
      <Headline size={4} asElement="h1" {...args}>
        Hey{' '}
        <span role="img" aria-label="Hand waving emoji">
          👋
        </span>
        , I'm a Typography component
      </Headline>
      <Paragraph {...args}>
        I can be a paragraph too, and you can make parts of me{' '}
        <Highlight {...args}>highlighted</Highlight> or
        <Strong {...args}> bold.</Strong>
      </Paragraph>
      <Paragraph {...args}>
        You can also write <InlineCode {...args}>inline code</InlineCode> like
        this.
      </Paragraph>
    </SubParagraphContainer>
    <SubParagraphContainer>
      <Code
        color="deep"
        {...args}
      >{`// a code block using the <code/> shorthand`}</Code>{' '}
      <Code {...args}>{`const foo = (bar) => bar >= 2;`}</Code>
    </SubParagraphContainer>

    <SubParagraphContainer>
      <Headline asElement="h2" size={3} {...args}>
        I can be a headline too
      </Headline>
      <Paragraph {...args}>
        I have preset sizes, and I am able to use semantic tags.
      </Paragraph>
    </SubParagraphContainer>
  </ParagraphContainer>
);

export const ParagraphExample = ParagraphTemplate.bind({});
ParagraphExample.args = {};

export const Line = Template.bind({});
Line.args = { ...defaultTypographyProps };
