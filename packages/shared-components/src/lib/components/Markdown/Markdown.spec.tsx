import React from 'react';
import { render } from '@testing-library/react';

import { Markdown } from './Markdown';

describe('Markdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Markdown>dsa</Markdown>);
    expect(baseElement).toBeTruthy();
  });
});
