import { createGlobalStyle } from 'styled-components';
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
`;

export default GlobalStyle;
