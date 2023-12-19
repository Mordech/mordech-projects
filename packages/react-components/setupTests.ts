import { toHaveNoViolations } from 'jest-axe';
import { afterEach, expect, vitest } from 'vitest';

import '@testing-library/jest-dom';
import 'jest-styled-components';

expect.extend(toHaveNoViolations);

afterEach(() => {
  vitest.clearAllMocks();
});
