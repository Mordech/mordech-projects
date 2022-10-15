import React from 'react';
import { render } from '@testing-library/react';

import { ArticleSpotlight } from './ArticleSpotlight';
import { axe } from 'jest-axe';

const sampleDescription = `Quas explicabo a ad. Ut commodi est *iusto eaque et reiciendis* ullam fugiat. Ex inventore fuga.
    
Neque porro quisquam est qui dolorem **ipsum quia dolor** sit amet, consectetur, adipisci velit.`;

describe('ArticleSpotlight', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(
      <ArticleSpotlight
        href="#"
        headline="**Lorem Ipsum dollor:** Fusce at dolor sed nunc"
        description={sampleDescription}
        thumbnailSrc="https://images.unsplash.com/photo-1615678815958-5910c6811c25?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0fHx8fHx8MTY2MjkyMzI4NQ&ixlib=rb-1.2.1&q=80&w=1600"
      />
    );
    expect(baseElement).toBeTruthy();
    expect(await axe(baseElement)).toHaveNoViolations;
  });
});
