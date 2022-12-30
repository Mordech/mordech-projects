import { build, BuildOptions } from 'esbuild';

const root = process.cwd();

const entryPoints = [
  `${root}/src/lib/index.ts`,
  `${root}/src/lib/declarations/index.ts`,
  `${root}/src/lib/utils/index.ts`,
];

const baseConfig: BuildOptions = {
  entryPoints: entryPoints,
  bundle: true,
  platform: 'browser',
  outdir: `${root}/dist`,
  minify: true,
  sourcemap: true,
  target: ['es2019'],
  treeShaking: true,
};

build({
  ...baseConfig,
  format: 'esm',
  splitting: true,
  outExtension: { '.js': '.mjs' },
}).catch(() => process.exit(1));

build({
  ...baseConfig,
  format: 'cjs',
}).catch(() => process.exit(1));
