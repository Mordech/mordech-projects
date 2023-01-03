import fs from 'fs';
import path from 'path';

import { tokensCss } from '../src/lib/styles/tokensCss';

import { formatOutput } from './utils/formatOutput';
const jsonOutputDir = './src/lib/declarations/';
const jsonOutputPath = path.join(jsonOutputDir, 'variables.json');

export function toJson() {
  const output = JSON.stringify(tokensCss);
  fs.mkdirSync(jsonOutputDir, { recursive: true });
  fs.writeFileSync(
    jsonOutputPath,
    formatOutput({ input: output, parser: 'json' })
  );
}

toJson();
