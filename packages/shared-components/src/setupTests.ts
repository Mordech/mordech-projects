import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

afterEach(() => {
  jest.clearAllMocks();
});
