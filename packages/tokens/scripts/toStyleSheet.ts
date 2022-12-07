import fs from 'fs';
import path from 'path';

import { colorTheme } from '../src/lib/colors';
import { elevation } from '../src/lib/elevation';
import { fontFamilies, fontSizes, fontWeights } from '../src/lib/typography';
import { Token, tokensToCssVars } from '../src/lib/utils/tokensToCssVars';

const cssOutputDir = './src/lib/styles/';
const cssOutputPath = path.join(cssOutputDir, 'tokens.css');

export async function toStyleSheet() {
  const tokens = `
    [data-theme='light'],
    :root {
      ${tokensToCssVars(colorTheme.light, 'color')}
      ${tokensToCssVars(fontFamilies, 'font-family')}
      ${tokensToCssVars(fontSizes, 'font-size')}
      ${tokensToCssVars(fontWeights, 'font-weight')}
      ${tokensToCssVars(elevation, 'elevation')}
    }

    @media (prefers-color-scheme: dark) {
      [data-theme='prefers'] {
        ${tokensToCssVars(colorTheme.dark as unknown as Token, 'color')}
      }
    }

    [data-theme='dark'] {
      ${tokensToCssVars(colorTheme.dark as unknown as Token, 'color')}
    }
  `;

  fs.mkdirSync(cssOutputDir, { recursive: true });
  fs.writeFileSync(cssOutputPath, tokens);
}

toStyleSheet();
