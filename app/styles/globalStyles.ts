import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    /* ----------
    SPACING VARIABLES
    ---------- */
    --spacing-0: 8px;
    --spacing-1: 16px;
    --spacing-2: 24px;
    --spacing-3: 32px;
    --spacing-4: 40px;
    --spacing-5: 48px;
    --spacing-6: 56px;
    --spacing-7: 64px;
    --spacing-8: 72px;
    --spacing-9: 80px;
    --spacing-10: 88px;
    --spacing-11: 96px;
    --spacing-12: 104px;
    /* ----------
    COLOR PALETTE
    ---------- */
    --color-cream: hsl(30, 53%, 93%);
    --color-brown: hsl(6, 38%, 44%);
    --color-brown-dark: hsl(6, 33%, 34%);
    --color-brown-darkest: hsl(6, 38%, 24%);
    --color-green: hsl(64, 35%, 39%);
    --color-green-dark: hsl(64, 30%, 29%);
    --color-green-darkest: hsl(64, 35%, 19%);
    --color-pink: hsl(352, 72%, 86%);
    --color-yellow: hsl(46, 100%, 50%);
    --color-orange: hsl(13, 95%, 60%);

    /* ----------
    BASE TYPOGRAPHY RULES
    ---------- */
    --font-weight-black: 900;
    --font-weight-bold: 700;
    --font-weight-semi-bold: 600;
    --font-weight-medium: 500;
    --font-weight-regular: 400;
    --font-weight-light: 300;
    --font-weight-extra-light: 200;
    --font-family-primary: "Spectral", "sans‑serif";
    --font-family-secondary: "Open Sans", "Segoe UI", "Apple SD Gothic Neo", "Lucida Grande", "Lucida Sans Unicode", "sans‑serif";
    --font-family-code: "Source Code Pro", "Fira Mono", "monospace";
  }
  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
    font-family: system-ui, sans-serif;
    background-color: var(--color-cream);
    color: var(--color-brown-dark);
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  * {
    &:focus {
      outline: none;
      border-radius: 2px;
      box-shadow: 0 0 0 2px var(--color-orange);
    }
  }
  #root {
    isolation: isolate;
  }
`;
