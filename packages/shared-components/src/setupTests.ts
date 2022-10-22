import { toHaveNoViolations } from 'jest-axe';
import { afterEach, vitest } from 'vitest';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

expect.extend(toHaveNoViolations);

afterEach(() => {
  vitest.clearAllMocks();
});
