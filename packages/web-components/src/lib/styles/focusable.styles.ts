import { colors } from '@mordech/tokens';
import { css, unsafeCSS } from 'lit';

export const focusableBase = css`
  summary:focus-visible,
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible,
  [role='button']:focus-visible,
  [role='radio']:focus-visible,
  [role='switch']:focus-visible,
  [role='link']:focus-visible,
  [role='checkbox']:focus-visible,
  [role='textbox']:focus-visible,
  [role='searchbox']:focus-visible,
  [role='slider']:focus-visible,
  [role='spinbutton']:focus-visible,
  [role='combobox']:focus-visible,
  [role='listbox']:focus-visible,
  [role='menuitem']:focus-visible,
  [role='menuitemcheckbox']:focus-visible,
  [role='menuitemradio']:focus-visible {
    outline-width: 2px;
    outline-style: solid;
    outline-color: ${unsafeCSS(colors.primary.base)};
  }

  button:focus-visible,
  a:focus-visible,
  [role='button']:focus-visible,
  [role='link']:focus-visible {
    outline-offset: 4px;
  }
`;
