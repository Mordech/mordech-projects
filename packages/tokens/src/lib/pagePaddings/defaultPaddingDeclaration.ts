import { breakpoints } from '../breakpoints';
import { css } from '../utils';

import { pagePaddings } from './pagePaddings';

export const defaultPaddingDeclaration = css`
  :root {
    --mrd-default-padding: ${pagePaddings.sm};
  }

  ${breakpoints.sm} {
    :root {
      --mrd-default-padding: ${pagePaddings.md};
    }
  }

  ${breakpoints.lg} {
    :root {
      --mrd-default-padding: ${pagePaddings.lg};
    }
  }
`;
