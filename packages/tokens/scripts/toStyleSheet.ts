import fs from 'fs';
import path from 'path';

import { tokensCss } from '../src/lib/styles/tokensCss';

import { formatOutput } from './utils/formatOutput';
const cssOutputDir = './src/lib/styles/';
const cssOutputPath = path.join(cssOutputDir, 'tokens.css');

export async function toStyleSheet() {
  fs.mkdirSync(cssOutputDir, { recursive: true });
  fs.writeFileSync(
    cssOutputPath,
    await formatOutput({ input: tokensCss, parser: 'css' }),
  );
}

toStyleSheet();
