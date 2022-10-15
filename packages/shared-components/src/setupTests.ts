import { vitest, afterEach } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

expect.extend(toHaveNoViolations);

afterEach(() => {
  vitest.clearAllMocks();
});
