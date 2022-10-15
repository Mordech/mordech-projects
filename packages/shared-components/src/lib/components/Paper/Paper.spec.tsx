import React from 'react';
import { render } from '@testing-library/react';

import { Paper } from './Paper';
// TODO write tests

describe('Paper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Paper />);
    expect(baseElement).toBeTruthy();
  });
});
