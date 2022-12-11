/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require('esbuild');
const { readFileSync, copyFileSync, mkdirSync } = require('fs');
const { join } = require('path');

const root = process.cwd();
const manifestPath = `${root}/src/manifest.json`;

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const scripts = manifest.content_scripts[0].js;

/**
 * @param {string} path
 * @param {'outDir' | 'entryPoint'} direction
 */
const path = (direction, path) =>
  join(root, direction === 'outDir' ? 'dist' : 'src', path);

scripts.forEach(
  (/** @type {any} */ script, /** @type {string | number} */ index) => {
    scripts[index] = path('entryPoint', script);
  }
);

const cssFiles = manifest.content_scripts[0].css;
cssFiles.forEach(
  (/** @type {any} */ cssFile, /** @type {string | number} */ index) => {
    cssFiles[index] = path('entryPoint', cssFile);
  }
);

/**@type {(import('esbuild').BuildOptions['loader'])} */
const loaders = {
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
    bundle: false,
    minify: false,
    sourcemap: false,
    format: 'cjs',
    outdir: join(root, 'dist'),
    loader: loaders,
    target: ['chrome58', 'firefox57'],
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
    outdir: `${root}/dist/popup/`,
    loader: loaders,
    target: ['chrome58', 'firefox57'],
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
    outdir: path('outDir', 'options'),
    loader: loaders,
    target: ['chrome58', 'firefox57'],
  }).then(() => {
    console.log('    \x1b[32m✔\x1b[0m Options bundle complete');
  });

  (async () => {
    const images = Object.values(manifest.icons);

    mkdirSync(path('outDir', 'images'), { recursive: true });

    images.forEach((image) => {
      copyFileSync(path('entryPoint', image), path('outDir', image));
    });
    copyFileSync(manifestPath, path('outDir', 'manifest.json'));
  })().then(() => {
    console.log('    \x1b[32m✔\x1b[0m Copied static assets');
  });
  return Promise.all([main, popup, options]);
}

bundleExtension().finally(() => {
  // make green
  console.log('\x1b[32m');
  console.log('🎉  Extension built successfully');
  console.log('\x1b[0m');
});
