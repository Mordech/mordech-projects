import { createGlobalStyle } from 'styled-components';

import { breakpoints } from '../breakpoints';
import { colors } from '../colors';
import { fontFamilies, fontSizes, fontWeights } from '../typography';

import '../icons/style.css';
import './fonts.css';
import './reset.css';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bounce-transition: 250ms cubic-bezier(0.65, -1.63, 0.28, 2.72);
    font-size: ${fontSizes[1]};
    font-weight: ${fontWeights['regular']};
    line-height: 1.25;
    scroll-behavior: smooth;

    --default-padding: 1rem;
    ${breakpoints.xsMin} {
      --default-padding: 2rem;
    }
    ${breakpoints.mdMin} {
      --default-padding: 5.25rem;
    }
  }

  * {
    font-family: ${fontFamilies['sans']};
  }

  body {
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    min-height: 100%;
    width: 100%;
    background: ${colors['lightest']};
    color: ${colors['dark']};
    max-width: 128rem;
  }

  code {
    font-family: ${fontFamilies['code']};
  }

  a,
  link,
  button {
    &:focus-visible {
      outline-style: solid;
      outline-color: ${colors['dark']};
      outline-width: 2px;

      outline-offset: 4px;
    }
  }
`;

export default GlobalStyle;
