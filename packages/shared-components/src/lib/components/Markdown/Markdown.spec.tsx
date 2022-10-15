import React from 'react';
import { render } from '@testing-library/react';

import { Markdown } from './Markdown';
import { explanationText } from './story/consts';
import { axe } from 'jest-axe';
// TODO write tests

describe('Markdown', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<Markdown>{explanationText}</Markdown>);
    expect(baseElement).toBeTruthy();
    expect(await axe(baseElement)).toHaveNoViolations;
  });
});
