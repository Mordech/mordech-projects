import React from 'react';
import { colors, fontFamilies, fontSizes, fontWeights } from '@mordech/tokens';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { GlobalStyle } from '../../abstracts';
import { removeCommaWhiteSpace, removeWhiteSpace } from '../../utils';

import {
  Code,
  Headline,
  InlineCode,
  Paragraph,
  Span,
  Strong,
  Subheading,
} from './shorthands';
import { Typography } from './Typography';

describe('Typography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Typography asElement="span" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render visible for sr only', async () => {
    const { baseElement, getByTestId } = render(
      <main>
        <Typography data-testid="styled-text" srOnly asElement="em">
          Visible only to screen readers
        </Typography>
      </main>
    );
    expect(await axe(baseElement)).toHaveNoViolations();
    expect(await getByTestId('styled-text')).toHaveStyle('position: absolute;');
  });
  it('should render styles correctly', async () => {
    const { baseElement, getByText } = render(
      <>
        <GlobalStyle />
        <main>
          <Headline asElement="h1" size={3}>
            I have different preset sizes
          </Headline>
          <Subheading>And subheadings</Subheading>
          <Code>Code is a variant</Code>
          <Paragraph>
            and I can be a paragraph <InlineCode>or inline code</InlineCode>{' '}
            too, and you{' '}
            <Span asElement="em" weight="bold">
              emphasize{' '}
            </Span>
            parts of me.
          </Paragraph>
        </main>
      </>
    );
    expect(await axe(baseElement)).toHaveNoViolations();
    expect(
      await getByText(/.*I have different preset sizes*./)
    ).toHaveStyleRule('font-size', 'var(--mrd-font-size-3,2.25rem)');
    expect(await getByText(/.*Code is a variant*./)).toHaveStyleRule(
      'font-family',
      removeCommaWhiteSpace(fontFamilies['code'])
    );
    expect(await getByText(/.*And subheadings*./)).toHaveStyle(
      'line-height: 1.25;'
    );
    expect(await getByText(/.*or inline code.*/)).toHaveStyle(
      `background-color: ${colors.background.base};`
    );
    expect(
      await getByText(/.*and I can be a paragraph too, and you*./)
    ).toHaveStyleRule('font-size', removeWhiteSpace(fontSizes[1]));
    expect(await getByText(/.*emphasize*./)).toHaveStyleRule(
      'font-weight',
      removeWhiteSpace(fontWeights.bold)
    );
  });

  it('should not have any violations, or styling issues', async () => {
    const { baseElement, getByLabelText } = render(
      <main>
        <section title="Hello World">
          <Headline size={4} aria-label="Hello World" asElement="h1">
            Hello World
          </Headline>
        </section>
        <section title="Secondary Headline">
          <Headline size={4} aria-label="Secondary Headline" asElement="h2">
            Secondary Headline
          </Headline>
          <Headline
            size={2}
            weight="bold"
            aria-label="Sub Headline"
            fontFamily="sans"
            asElement="h3"
          >
            Sub Headline
          </Headline>
        </section>
      </main>
    );
    expect(await axe(baseElement)).toHaveNoViolations();
    expect(getByLabelText('Hello World')).toHaveStyleRule(
      'font-size',
      'var(--mrd-font-size-4,3rem)'
    );
    expect(getByLabelText('Secondary Headline')).toHaveStyleRule(
      'font-size',
      'var(--mrd-font-size-4,3rem)'
    );
    expect(getByLabelText('Sub Headline')).toHaveStyleRule(
      'font-size',
      'var(--mrd-font-size-2,1.5rem)'
    );
    expect(getByLabelText('Sub Headline')).toHaveStyleRule(
      'font-weight',
      'var(--mrd-font-weight-bold,700)'
    );
  });
  it('should inherit line-height from parent', async () => {
    const { baseElement, getByText } = render(
      <main>
        <Headline asElement="h1" size={3}>
          I have <Strong>different</Strong> preset sizes
        </Headline>
        <Subheading>And subheadings</Subheading>
        <Code>Code is a variant</Code>
        <Paragraph>
          and I can be a paragraph <InlineCode>or inline code</InlineCode> too,
          and you{' '}
          <Span asElement="em" weight="bold">
            emphasize{' '}
          </Span>
          parts of me.
        </Paragraph>
      </main>
    );
    expect(await axe(baseElement)).toHaveNoViolations();
    expect(await getByText(/.*preset sizes*./)).toHaveStyleRule(
      'line-height',
      '1.15'
    );
    expect(await getByText('different')).toHaveStyleRule(
      'line-height',
      'inherit'
    );
    expect(await getByText(/.*Code is a variant*./)).toHaveStyleRule(
      'line-height',
      '1.5'
    );
    expect(await getByText(/.*And subheadings*./)).toHaveStyleRule(
      'line-height',
      '1.25'
    );
    expect(await getByText(/.*or inline code.*/)).toHaveStyleRule(
      'line-height',
      'inherit'
    );
    expect(
      await getByText(/.*and I can be a paragraph too, and you*./)
    ).toHaveStyle('line-height: 1.5;');
    expect(await getByText(/.*emphasize*./)).toHaveStyleRule(
      'line-height',
      'inherit'
    );
  });
});
