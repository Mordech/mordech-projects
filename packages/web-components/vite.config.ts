import { readdirSync } from 'fs';
import path from 'path';
import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { defineConfig as defineConfigTest } from 'vitest/config';

const components = Object.fromEntries(
  readdirSync('src/lib/components')
    .filter((name) => {
      return !name.endsWith('.ts');
    })
    .map((name) => {
      return [
        `components/${name}`,
        path.join('src/lib/components/', name, 'index.ts'),
      ];
    })
);

// https://vitejs.dev/config/
export default mergeConfig(
  defineConfig({
    plugins: [dts()],
    build: {
      outDir: 'dist',
      lib: {
        entry: {
          index: 'src/index.ts',
          ...components,
        },
        formats: ['es'],
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
