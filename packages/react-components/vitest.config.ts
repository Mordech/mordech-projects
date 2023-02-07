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
    cache: {
      dir: '../../node_modules/.vitest',
    },
    setupFiles: './setupTests.ts',
    environment: 'jsdom',
  },
});
