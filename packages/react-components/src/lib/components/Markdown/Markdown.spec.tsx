import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { explanationText } from './story/consts';
import { Markdown } from './Markdown';

describe('Markdown', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Markdown>{explanationText}</Markdown>);
    expect(baseElement).toBeTruthy();
  });

  it('should render a paragraph', async () => {
    const { getByText } = render(<Markdown>{explanationText}</Markdown>);
    expect(getByText("Hey! I'm a markdown component")).toBeInstanceOf(
      HTMLHeadingElement,
    );
    expect(getByText('you')).toBeInstanceOf(HTMLAnchorElement);
    expect(getByText('// code block example')).toBeInstanceOf(HTMLElement);
    expect(getByText(/My purpose is to help/)).toBeInstanceOf(
      HTMLParagraphElement,
    );
    expect(getByText("I'm a list item")).toBeInstanceOf(HTMLLIElement);
  });

  it('should not have any accessibility violations', async () => {
    const { baseElement } = render(
      <main>
        <Markdown>{explanationText}</Markdown>
      </main>,
    );
    expect(await axe(baseElement)).toHaveNoViolations();
  });
});
