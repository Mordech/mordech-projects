import React from 'react';
import { render } from '@testing-library/react';

import { ArticleSpotlight } from './ArticleSpotlight';

describe('ArticleSpotlight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ArticleSpotlight
        thumbnailSrc={''}
        headline={''}
        description={''}
        callToAction={''}
        href={''}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
