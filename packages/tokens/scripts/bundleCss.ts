import { build } from 'esbuild';
import { readdir } from 'fs';
import { join } from 'path';

const root = process.cwd();

const cssDir = join(root, 'src/lib', 'styles');
const outDir = join(root, 'dist', 'css');

readdir(cssDir, (err, files) => {
  if (err) throw err;

  const cssFiles = files.filter((file) => file.endsWith('.css'));
  build({
    entryPoints: cssFiles.map((file) => `${cssDir}/${file}`),
    bundle: true,
    outdir: outDir,
    minify: true,
    sourcemap: true,
    loader: {
      '.woff2': 'file',
    },
    target: 'es2015',
  }).catch(() => process.exit(1));
});
