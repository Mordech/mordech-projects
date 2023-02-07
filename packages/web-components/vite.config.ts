import { defineConfig, mergeConfig } from 'vite';
import { defineConfig as defineConfigTest } from 'vitest/config';
// https://vitejs.dev/config/
export default mergeConfig(
  defineConfig({
    build: {
      lib: {
        entry: 'src/index.ts',
        formats: ['es', 'cjs'],
        fileName: 'index',
      },
      rollupOptions: {
        external: /^lit/,
      },
    },
  }),
  defineConfigTest({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setupTests.ts',
    },
  })
);
