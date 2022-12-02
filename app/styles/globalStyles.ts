import { createGlobalStyle } from "styled-components";

import Boska from "~/styles/fonts/Boska-Variable.woff2";
import Supreme from "~/styles/fonts/Supreme-Variable.woff2";

import TopMobileBlob from "~/assets/top-blob-mobile.svg";
import BottomMobileBlob from "~/assets/bottom-blob-mobile.svg";
import TopTabletBlob from "~/assets/top-blob-tablet.svg";
import BottomTabletBlob from "~/assets/bottom-blob-tablet.svg";
import TopDesktopBlob from "~/assets/top-blob-desktop.svg";
import BottomDesktopBlob from "~/assets/bottom-blob-desktop.svg";

export default createGlobalStyle`
  @font-face {
    font-family: "Boska";
    src: url(${Boska}) format("woff2");
  }
  @font-face {
    font-family: "Supreme";
    src: url(${Supreme}) format("woff2");
  }
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
    --color-cream: hsl(30, 53%, 93%); //#f7ede4
    --color-cream-light: hsl(30, 50%, 96%); //
    --color-brown: hsl(6, 38%, 44%); // #9b4e46
    --color-brown-light: hsl(6, 33%, 54%); // #b06b63
    --color-brown-light-transparent: hsla(6,  33%, 54%, 0.3); //
    --color-brown-dark: hsl(6, 33%, 34%);  // #73403a
    --color-brown-darkest: hsl(6, 38%, 24%); // #542b26
    --color-green-lightest: hsl(64, 44%, 59%); // 
    --color-green: hsl(64, 35%, 39%); // #828641
    --color-green-dark: hsl(64, 30%, 29%); // #5d6034
    --color-green-darkest: hsl(64, 35%, 19%); // #3f411f
    --color-pink: hsl(352, 72%, 86%); //#f5c2c8
    --color-yellow: hsl(46, 100%, 50%); // #ffc400
    --color-orange: hsl(13, 95%, 60%); // #fa6238
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
    --font-family-primary: "Boska", "Spectral", "serif";
    --font-family-secondary: "Supreme", "Open Sans", "Segoe UI", "Apple SD Gothic Neo", "Lucida Grande", "Lucida Sans Unicode", "sans‑serif";
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
  * :focus {
    outline: var(--outline);
  }
  html {
    background-color: var(--color-cream);
    background-image: url(${TopMobileBlob}), url(${BottomMobileBlob});
    background-position: top right, bottom left;
    background-size: 100%;
    background-repeat: no-repeat;
    
    @media screen and (min-width: 500px) {
      background-image: url(${TopTabletBlob}), url(${BottomTabletBlob});
    }
    @media screen and (min-width: 1100px) {
      background-image: url(${TopDesktopBlob}), url(${BottomDesktopBlob});
    }
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-size: ${20 / 16}rem;
    font-family: var(--font-family-secondary);
    color: var(--color-brown-dark);
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

  p {
    margin-bottom: 8px;
  }
  
  #root {
    isolation: isolate;
  }
`;
