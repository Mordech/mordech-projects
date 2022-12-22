export const variables = `
  [data-theme='light'],
  :root {
    --mrd-color-primary-base: #272931;--mrd-color-primary-on: #F9F9F9;--mrd-color-primary-container: #EEEFF2;--mrd-color-primary-onContainer: #272931;--mrd-color-secondary-base: #0F38BD;--mrd-color-secondary-on: #FAFBFF;--mrd-color-secondary-container: #D0DAFB;--mrd-color-secondary-onContainer: #040E2F;--mrd-color-success-base: #26643F;--mrd-color-success-on: #F4FBF7;--mrd-color-success-container: #DAF1E3;--mrd-color-success-onContainer: #1C4A2F;--mrd-color-error-base: #BD0F29;--mrd-color-error-on: #FFFAFB;--mrd-color-error-container: #FCD9DE;--mrd-color-error-onContainer: #2F040A;--mrd-color-background-base: #F9F9F9;--mrd-color-background-on: #272931;--mrd-color-background-surface: #E6E8EC;--mrd-color-background-onSurface: #272931;--mrd-color-highlight-yellow: #F7FF9A;--mrd-color-highlight-pink: #FF9AF7;--mrd-color-highlight-green: #9AFF9A;--mrd-color-highlight-neutral: #E6E8EC;--mrd-color-disabled-base: #E6E8EC;--mrd-color-disabled-on: #43434C;--mrd-color-disabled-container: #D4D7DE;--mrd-color-disabled-onContainer: #858594;
    --mrd-font-family-sans: 'DM Sans',sans-serif;--mrd-font-family-serif: 'Eczar',serif;--mrd-font-family-code: 'JetBrains Mono',monospace;--mrd-font-family-ui: 'Mona Sans',sans-serif;--mrd-font-family-inherit: inherit;
    --mrd-font-size-0: 0.875rem;--mrd-font-size-1: 1rem;--mrd-font-size-2: 1.5rem;--mrd-font-size-3: 2.25rem;--mrd-font-size-4: 3rem;--mrd-font-size-5: 3.375rem;--mrd-font-size-inherit: inherit;
    --mrd-font-weight-regular: 400;--mrd-font-weight-medium: 500;--mrd-font-weight-bold: 700;
    --mrd-elevation-0: 0 1px 3px 0 rgba(0, 0, 0, 0.07),
  0 4px 7px 0 rgba(0, 0, 0, 0.06),
  0 7px 12px 0 rgba(0, 0, 0, 0.04),
  0 12px 21.44px 0 rgba(0, 0, 0, 0.04);
    --mrd-screen-size-sm: 37.5rem;--mrd-screen-size-md: 56.5625rem;--mrd-screen-size-lg: 77.5rem;--mrd-screen-size-xl: 90rem;
    --mrd-transition-default: 0.3s ease-in-out;--mrd-transition-fast: 0.2s ease-in-out;--mrd-transition-slow: 0.5s ease-in-out;--mrd-transition-bounce: 250ms cubic-bezier(0.65, -1.63, 0.28, 2.72);--mrd-transition-none: none;
  }

  
  :root {
    --mrd-default-padding: 1.5rem;
  }

  @media screen and (min-width: 600px) {
    :root {
      --mrd-default-padding: 2rem;
    }
  }

  @media screen and (min-width: 1240px) {
    :root {
      --mrd-default-padding: 5.25rem;
    }
  }


  /* Dark theme is under a flag */
    @media (prefers-color-scheme: dark) {
    [data-theme='prefers'] {
      --mrd-color-primary-base: #F9F9F9;--mrd-color-primary-on: #272931;--mrd-color-primary-container: #17181C;--mrd-color-primary-onContainer: #E6E8EC;--mrd-color-secondary-base: #A1B5F7;--mrd-color-secondary-on: #081C5E;--mrd-color-secondary-container: #0C2A8D;--mrd-color-secondary-onContainer: #D0DAFB;--mrd-color-success-base: #EDF8F1;--mrd-color-success-on: #0E2517;--mrd-color-success-container: #1C4A2F;--mrd-color-success-onContainer: #DAF1E3;--mrd-color-error-base: #F37285;--mrd-color-error-on: #5E0815;--mrd-color-error-container: #8D0C1F;--mrd-color-error-onContainer: #FCD9DE;--mrd-color-background-base: #17181C;--mrd-color-background-on: #EEEFF2;--mrd-color-background-surface: #272931;--mrd-color-background-onSurface: #E6E8EC;--mrd-color-highlight-yellow: #525807;--mrd-color-highlight-pink: #520752;--mrd-color-highlight-green: #075207;--mrd-color-highlight-neutral: #272931;--mrd-color-disabled-base: #272931;--mrd-color-disabled-on: #D4D7DE;--mrd-color-disabled-container: #43434C;--mrd-color-disabled-onContainer: #858594;
    }
  }

  [data-theme='dark'] {
    --mrd-color-primary-base: #F9F9F9;--mrd-color-primary-on: #272931;--mrd-color-primary-container: #17181C;--mrd-color-primary-onContainer: #E6E8EC;--mrd-color-secondary-base: #A1B5F7;--mrd-color-secondary-on: #081C5E;--mrd-color-secondary-container: #0C2A8D;--mrd-color-secondary-onContainer: #D0DAFB;--mrd-color-success-base: #EDF8F1;--mrd-color-success-on: #0E2517;--mrd-color-success-container: #1C4A2F;--mrd-color-success-onContainer: #DAF1E3;--mrd-color-error-base: #F37285;--mrd-color-error-on: #5E0815;--mrd-color-error-container: #8D0C1F;--mrd-color-error-onContainer: #FCD9DE;--mrd-color-background-base: #17181C;--mrd-color-background-on: #EEEFF2;--mrd-color-background-surface: #272931;--mrd-color-background-onSurface: #E6E8EC;--mrd-color-highlight-yellow: #525807;--mrd-color-highlight-pink: #520752;--mrd-color-highlight-green: #075207;--mrd-color-highlight-neutral: #272931;--mrd-color-disabled-base: #272931;--mrd-color-disabled-on: #D4D7DE;--mrd-color-disabled-container: #43434C;--mrd-color-disabled-onContainer: #858594;
  }
`;
