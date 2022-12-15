/* eslint-disable @typescript-eslint/no-var-requires */
import { updateJson } from '@nrwl/devkit';
import { execSync } from 'child_process';
import { config } from 'dotenv';
import { readdir, writeFileSync } from 'fs';
import { FsTree } from 'nx/src/generators/tree';

config();

const tree = new FsTree(process.cwd(), true);

(async function () {
  console.log('🦊  Building Firefox extension...');
  console.log('\x1b[2m');
  updateJson(tree, 'src/manifest.json', (manifest) => {
    const geckoId = process.env.GECKO_ID;
    if (!geckoId)
      throw new Error(
        'You must set the GECKO_ID environment variable to build the Firefox extension.'
      );

    manifest.manifest_version = 2;
    manifest.browser_action = manifest.action;
    delete manifest.action;
    delete manifest.$schema;
    manifest.browser_specific_settings = {
      gecko: {
        id: geckoId,
      },
    };
    writeFileSync('dist/manifest.json', JSON.stringify(manifest, null, 2));
    execSync('npx web-ext build -s ./dist -a ./build/firefox/ -o', {
      stdio: 'inherit',
    });
    return manifest;
  });
})();

(async function () {
  console.log('\x1b[0m');
  console.log('🌎  Building Chrome extension...');
  console.log('\x1b[2m');
  await updateJson(tree, 'src/manifest.json', (manifest) => {
    delete manifest.$schema;
    writeFileSync('dist/manifest.json', JSON.stringify(manifest, null, 2));
    execSync('npx web-ext build -s ./dist -a ./build/chrome/ -o', {
      stdio: 'inherit',
    });
    return manifest;
  });
})();
console.log(`\x1b[36m
    /\\_/\\
   ( o.o )
    > ^ <
\x1b[0m`);
console.log('🐱  ZOMG! Your extension is built!');
console.log('\x1b[32m');
readdir(
  'build/chrome/',
  {
    withFileTypes: true,
  },
  (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(
      `🌎  Chrome extension: /build/chrome/${files[files.length - 1].name}`
    );
  }
);

readdir(
  'build/firefox/',
  {
    withFileTypes: true,
  },
  (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(
      `🦊  Firefox extension: /build/firefox/${files[files.length - 1].name}`
    );
    console.log('');
  }
);
