import { toHaveNoViolations } from 'jest-axe';
import { afterEach, vitest } from 'vitest';

import '@testing-library/jest-dom/extend-expect';

expect.extend(toHaveNoViolations);

afterEach(() => {
  vitest.clearAllMocks();
});
