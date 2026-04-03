import { build, BuildOptions } from 'esbuild';

const root = process.cwd();

const entryPoints = [
  `${root}/src/lib/index.ts`,
  `${root}/src/lib/declarations/index.ts`,
  `${root}/src/lib/utils/index.ts`,
];

build({
  entryPoints: entryPoints,
  bundle: true,
  platform: 'browser',
  outdir: `${root}/dist`,
  minify: true,
  sourcemap: true,
  target: ['es2019'],
  treeShaking: true,
  format: 'esm',
  splitting: true,
}).catch(() => process.exit(1));
