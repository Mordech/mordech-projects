/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
import { updateJson } from '@nrwl/devkit';
import { execSync } from 'child_process';
import { config } from 'dotenv';
import { readdir, writeFileSync } from 'fs';
import { FsTree } from 'nx/src/generators/tree';
import { Manifest } from 'webextension-polyfill';

type WebExtensionManifest = Manifest.WebExtensionManifest & {
  $schema?: string;
};

type Browser = 'chrome' | 'firefox';

config();

const tree = new FsTree(process.cwd(), true);

updateManifest('chrome');
updateManifest('firefox');

console.log(`\x1b[36m
    /\\_/\\
   ( o.o )
    > ^ <
\x1b[0m`);
console.log('🐱  ZOMG! Your extension is built!');
console.log('\x1b[32m');
getExtensionFolder('firefox');
getExtensionFolder('chrome');

function replaceTsWithJs(manifest: WebExtensionManifest) {
  const content_scripts = manifest.content_scripts;
  if (!content_scripts) return manifest;

  const scripts = content_scripts[0].js;

  if (scripts && manifest.content_scripts) {
    scripts.forEach((script, index) => {
      scripts[index] = script.replace(/\.ts$/, '.js');
    });

    manifest.content_scripts[0].js = scripts;
  }

  return manifest;
}

function updateManifest(browser: Browser) {
  const { browserEmoji, browserName } = getBrowserDetails(browser);
  console.log(`${browserEmoji}  Building ${browserName} extension...`);

  updateJson(tree, 'src/manifest.json', (manifest: WebExtensionManifest) => {
    delete manifest.$schema;
    manifest = replaceTsWithJs(manifest);

    manifest.manifest_version = browser === 'firefox' ? 2 : 3;

    if (browser === 'firefox') {
      const geckoId = process.env.GECKO_ID;
      if (!geckoId)
        throw new Error(
          'You must set the GECKO_ID environment variable to build the Firefox extension.'
        );

      manifest.browser_action = manifest.action;
      delete manifest.action;
      manifest.browser_specific_settings = {
        gecko: {
          id: geckoId,
        },
      };
    }

    console.log('\x1b[2m'); // dim
    writeFileSync(`dist/manifest.json`, JSON.stringify(manifest, null, 2));
    execSync(`npx web-ext build -s ./dist/ -a ./build/${browser}/ -o`, {
      stdio: 'inherit',
    });
    console.log('\x1b[0m'); // reset
    return manifest;
  });
}

function getBrowserDetails(browser: Browser) {
  const browserName = browser.charAt(0).toUpperCase() + browser.slice(1);
  const browserEmoji = browser === 'firefox' ? '🦊' : '🌍';
  return { browserEmoji, browserName };
}

function getExtensionFolder(browser: Browser) {
  const { browserEmoji, browserName } = getBrowserDetails(browser);

  readdir(
    `build/${browser}/`,
    {
      withFileTypes: true,
    },
    (err, files) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(
        `${browserEmoji}  ${browserName} extension: /build/${browser}/${
          files[files.length - 1].name
        }`
      );
    }
  );
}
