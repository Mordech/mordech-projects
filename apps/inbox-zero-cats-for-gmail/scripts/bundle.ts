/* eslint-disable no-console */
import { build, BuildOptions } from 'esbuild';
import { copyFileSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const manifestPath = `${root}/src/manifest.json`;

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

const scripts = manifest.content_scripts[0].js;

const path = (direction: 'outDir' | 'entryPoint', path: string) =>
  join(root, direction === 'outDir' ? 'dist' : 'src', path);

scripts.forEach((script: string, index: string | number) => {
  scripts[index] = script.replace('js', 'ts') && path('entryPoint', script);
});

const cssFiles = manifest.content_scripts[0].css;
cssFiles.forEach((cssFile: string, index: string | number) => {
  cssFiles[index] = path('entryPoint', cssFile);
});

const loaders: BuildOptions['loader'] = {
  '.woff2': 'file',
  '.css': 'css',
  '.html': 'copy',
  '.png': 'file',
  '.svg': 'file',
  '.json': 'json',
};

console.log('🚀  Bundling extension...');
console.log('');
async function bundleExtension() {
  // build all extension scripts and css
  const main = build({
    entryPoints: [...scripts, ...cssFiles],
    bundle: true,
    minify: true,
    sourcemap: true,
    treeShaking: true,
    format: 'cjs',
    outdir: join(root, 'dist'),
    loader: loaders,
    target: ['chrome58', 'firefox57'],
    watch: process.argv.includes('--watch'),
  }).then(() => {
    console.log('    \x1b[32m✔\x1b[0m Scripts and CSS bundle complete');
  });

  // TODO: build from manifest.json instead of hardcoding
  // build popup
  const popup = build({
    entryPoints: [
      path('entryPoint', 'popup/index.html'),
      path('entryPoint', 'popup/index.css'),
      path('entryPoint', 'popup/index.js'),
    ],
    bundle: true,
    minify: true,
    splitting: true,
    format: 'esm',
    sourcemap: true,
    treeShaking: true,
    outdir: `${root}/dist/popup/`,
    loader: loaders,
    target: ['chrome58', 'firefox57'],
    watch: process.argv.includes('--watch'),
  }).then(() => {
    console.log('    \x1b[32m✔\x1b[0m Popup bundle complete');
  });

  // build options
  const options = build({
    entryPoints: [
      path('entryPoint', 'options/index.html'),
      path('entryPoint', 'options/index.css'),
    ],
    bundle: true,
    minify: true,
    sourcemap: true,
    treeShaking: true,
    outdir: path('outDir', 'options'),
    loader: loaders,
    target: ['chrome58', 'firefox57'],
    watch: process.argv.includes('--watch'),
  }).then(() => {
    console.log('    \x1b[32m✔\x1b[0m Options bundle complete');
  });

  (async () => {
    const images = Object.values(manifest.icons);

    mkdirSync(path('outDir', 'images'), { recursive: true });

    images.forEach((image: unknown) => {
      copyFileSync(
        path('entryPoint', image as string),
        path('outDir', image as string)
      );
    });
    copyFileSync(manifestPath, path('outDir', 'manifest.json'));
  })().then(() => {
    console.log('    \x1b[32m✔\x1b[0m Copied static assets');
  });
  return Promise.all([main, popup, options]);
}

bundleExtension()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    // make green
    console.log('\x1b[32m');
    console.log('🎉  Extension built successfully');
    console.log('\x1b[0m');
  });
