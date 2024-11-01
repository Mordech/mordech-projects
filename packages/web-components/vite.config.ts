import { litStyleLoader } from '@mordech/vite-lit-loader';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { readdirSync } from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const cwd = process.cwd();

const components = Object.fromEntries(
  readdirSync(path.join(cwd, 'packages/web-components/src/lib/components'))
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
    nxViteTsPaths(),
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
