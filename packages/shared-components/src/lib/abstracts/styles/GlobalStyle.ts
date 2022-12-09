import { colors, fontFamilies, fontSizes, fontWeights } from '@mordech/tokens';
import { createGlobalStyle } from 'styled-components';

import '@mordech/tokens/css';
import '../icons/style.css';

// TODO: create a generic global style css file in @mordech/tokens
export const GlobalStyle = createGlobalStyle`
  :root {
    --bounce-transition: 250ms cubic-bezier(0.65, -1.63, 0.28, 2.72);
    font-size: ${fontSizes[1]};
    font-weight: ${fontWeights['regular']};
    line-height: 1.25;
    scroll-behavior: smooth;
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
    background: ${colors.background.base};
    color: ${colors.background.on};
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
      outline-color: ${colors.primary.base};
      outline-width: 2px;

      outline-offset: 4px;
    }
  }
`;

export default GlobalStyle;
