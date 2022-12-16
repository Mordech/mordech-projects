import fs from 'fs';
import path from 'path';

import { tokensCss } from '../src/lib/styles/tokensCss';
const cssOutputDir = './src/lib/styles/';
const cssOutputPath = path.join(cssOutputDir, 'tokens.css');

export function toStyleSheet() {
  fs.mkdirSync(cssOutputDir, { recursive: true });
  fs.writeFileSync(cssOutputPath, tokensCss);
}

toStyleSheet();
