import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    setupFiles: ['./setupTests.ts'],
    environment: 'jsdom',
  },
});
