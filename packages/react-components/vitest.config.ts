import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],
  test: {
    globals: true,
    setupFiles: './setupTests.ts',
    environment: 'jsdom',
  },
});
