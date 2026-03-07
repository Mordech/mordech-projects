import { litStyleLoader } from '@mordech/vite-lit-loader';
import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const components = Object.fromEntries(
  readdirSync(path.join(__dirname, 'src/lib/components'))
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
  plugins: [
    litStyleLoader(),
    dts({
      entryRoot: './src/lib',
    }),
    tsconfigPaths(),
  ],
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
