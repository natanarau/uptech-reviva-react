import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
  @font-face {
    font-family: Arboria;
    font-style: normal;
    font-display: swap;
    src: url(https://midia.fotos-riachuelo.com.br/spa-storefront/public/fonts/arboria-medium.woff) format('woff')
  }
  html {
    font-family: 'Arboria', sans-serif;
    font-size: 62.5%;
  }
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  * {
    margin: 0;
    padding: 0;
  }
  a {
    color: #261E1E;
    text-decoration: none;
  }
`