import {
  argbFromHex,
  Hct,
  hexFromArgb,
} from '@material/material-color-utilities';
import { Range, ToggleTheme } from '@mordech/web-components';
import { html, render } from 'lit';

import '@mordech/web-components';

import './styles.scss';

type HctKeys = 'hue' | 'chroma' | 'tone';

const [hue, chroma, tone] = Object.values(getCurrentHct());

function createHueGradient() {
  const steps = 360;
  const gradient = [];

  for (let i = 0; i < steps; i++) {
    const color = Hct.from(i, 100, 55);
    gradient.push(hexFromArgb(color.toInt()));
  }

  return `linear-gradient(to right, ${gradient.join(',')})`;
}

function createChromaGradient(hue: number, tone: number) {
  const steps = 150;
  const gradient = [];

  for (let i = 0; i < steps; i++) {
    const color = Hct.from(hue, i, tone);
    gradient.push(hexFromArgb(color.toInt()));
  }

  return `linear-gradient(to right, ${gradient.join(',')})`;
}

function createToneGradient(hue: number, chrome: number) {
  const steps = 100;
  const gradient = [];

  for (let i = 0; i < steps; i++) {
    const color = Hct.from(hue, chrome, i);
    gradient.push(hexFromArgb(color.toInt()));
  }

  return `linear-gradient(to right, ${gradient.join(',')})`;
}

const app = html`<header>
    <h1>HCT Color Picker</h1>
    <mrd-toggle-theme
      @toggle-theme=${(e: { detail: { theme: ToggleTheme['theme'] } }) => {
        const [hue, chroma, tone] = Object.values(getCurrentHct());
        setThumbColor(
          hexFromArgb(Hct.from(hue, chroma, tone).toInt()),
          e.detail.theme
        );
      }}
    >
    </mrd-toggle-theme>
  </header>
  <input
    type="color"
    id="selected-color"
    name="selected-color"
    class="color-input"
    .value="${hexFromArgb(Hct.from(hue, chroma, tone).toInt())}"
    @input=${handleInput}
    @change=${(e: { target: { value: string } }) => {
      const { hue, chroma, tone } = Hct.fromInt(argbFromHex(e.target.value));
      saveHct({ hue: hue, chroma: chroma, tone: tone });
    }}
  />
  <div class="controller-container">
    <div>
      <label>Hue</label>
      <mrd-range
        id="mrd-hue"
        min="0"
        max="360"
        .value=${hue}
        @input=${handleRangeChange}
        style=${`--mrd-range-preview-background: ${createHueGradient()};`}
      >
      </mrd-range>
    </div>
    <div>
      <label>Chroma</label>
      <mrd-range
        id="mrd-chroma"
        min="1"
        max="150"
        .value=${chroma}
        @input=${handleRangeChange}
        style=${`--mrd-range-preview-background: ${createChromaGradient(
          hue,
          tone
        )};`}
      >
      </mrd-range>
    </div>
    <div>
      <label>Tone</label>
      <mrd-range
        id="mrd-tone"
        min="0"
        max="100"
        .value=${tone}
        @input=${handleRangeChange}
        style=${`--mrd-range-preview-background: ${createToneGradient(
          hue,
          chroma
        )};`}
      >
      </mrd-range>
    </div>
  </div> `;

render(app, document.body);

function handleInput(e: { target: { value: string } }) {
  const color = e.target.value;
  handleColorChange(color);
}

function applyColor(color: string) {
  document.body.style.setProperty('--mrd-range-color', color);
  setThumbColor(color);
}

function setThumbColor(color: string, theme?: ToggleTheme['theme']) {
  const thumbColor = Hct.fromInt(argbFromHex(color));
  const currentTheme = theme || localStorage.getItem('theme') || 'dark';
  const tone = currentTheme === 'dark' ? 75 : 35;
  thumbColor.tone = tone;
  document.body.style.setProperty(
    '--mrd-thumb-color',
    hexFromArgb(thumbColor.toInt())
  );
}

function handleColorChange(color: string) {
  const hctColor = Hct.fromInt(argbFromHex(color));
  const hue = document.getElementById('mrd-hue') as Range;
  const chroma = document.getElementById('mrd-chroma') as Range;

  const tone = document.getElementById('mrd-tone') as Range;

  hue.value = hctColor.hue;
  chroma.value = hctColor.chroma;
  tone.value = hctColor.tone;
  applyColor(color);

  applyChromaPreview(chroma, hue.value, tone.value);
  applyTonePreview(tone, hue.value, chroma.value);
}

function applyChromaPreview(chroma: Range, hue: number, tone: number) {
  chroma.style.setProperty(
    '--mrd-range-preview-background',
    createChromaGradient(hue, tone)
  );
}

function applyTonePreview(tone: Range, hue: number, chroma: number) {
  tone.style.setProperty(
    '--mrd-range-preview-background',
    createToneGradient(hue, chroma)
  );
}

function getCurrentHct() {
  const hctJson =
    localStorage.getItem('hct') || '{"hue":173,"chroma":150,"tone":70}';

  const hct = JSON.parse(hctJson) as {
    hue: number;
    chroma: number;
    tone: number;
  };

  const color = Hct.from(hct.hue, hct.chroma, hct.tone);
  applyColor(hexFromArgb(color.toInt()));
  return hct;
}

function saveHct(hct: { hue: number; chroma: number; tone: number }) {
  localStorage.setItem('hct', JSON.stringify(hct));
}

function handleRangeChange(e: Event) {
  const input = e.target as HTMLInputElement;
  const id = input.id.replace('mrd-', '') as HctKeys;

  const value = parseInt(input.value);

  saveHct({ ...getCurrentHct(), [id]: value });

  const [hue, chroma, tone] = Object.values(getCurrentHct());

  const color = hexFromArgb(Hct.from(hue, chroma, tone).toInt());

  applyChromaPreview(document.getElementById('mrd-chroma') as Range, hue, tone);
  applyTonePreview(document.getElementById('mrd-tone') as Range, hue, chroma);

  applyColor(color);
  const selectedColor = document.getElementById(
    'selected-color'
  ) as HTMLInputElement;
  selectedColor.value = color;
}
