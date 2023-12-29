import { readdirSync } from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const components = Object.fromEntries(
  readdirSync('src/lib/components')
    .filter((name) => {
      return !name.endsWith('.ts');
    })
    .filter((name) => {
      return !name.startsWith('.');
    })
    .map((name) => {
      return [
        `components/${name}`,
        path.join('src/lib/components/', name, 'index.ts'),
      ];
    }),
);

export default defineConfig({
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
});
