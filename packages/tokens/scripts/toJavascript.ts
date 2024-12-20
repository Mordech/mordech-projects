import fs from 'fs';
import path from 'path';

import { tokensCss } from '../src/lib/styles/tokensCss';

import { formatOutput } from './utils/formatOutput';
const jsOutputDir = './src/lib/declarations/';
const jsOutputPath = path.join(jsOutputDir, 'variables.ts');
const indexOutputPath = path.join(jsOutputDir, 'index.ts');

export async function toJavascript() {
  const output = `export const variables = \`${tokensCss}\`;`;
  fs.mkdirSync(jsOutputDir, { recursive: true });
  fs.writeFileSync(
    jsOutputPath,
    await formatOutput({ input: output, parser: 'typescript' }),
  );
  const indexOutput = `export * from './variables';`;
  fs.writeFileSync(
    indexOutputPath,
    await formatOutput({ input: indexOutput, parser: 'typescript' }),
  );
}

toJavascript();
