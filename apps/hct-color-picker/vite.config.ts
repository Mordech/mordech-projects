import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  root: './ui-src',
  plugins: [viteSingleFile()],
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    outDir: '../dist',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
