import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';
// TODO write tests
describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Footer>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Footer>
    );
    expect(baseElement).toBeTruthy();
  });
});
