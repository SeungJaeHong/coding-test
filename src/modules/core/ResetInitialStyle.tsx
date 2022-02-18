import { createGlobalStyle } from 'styled-components';

export const ResetInitialStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  img,
  form,
  label,
  article,
  aside,
  figure,
  figcaption,
  header,
  section,
  article {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    color: #000000;
    text-align: left;
    direction: ltr;
    font-family: -apple-system, 'Apple SD Gothic Neo', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    line-height: 1.43;
    min-width: 320px;
  }

  img,
  input,
  button {
    max-width: 100%;
  }

  button,
  input {
    color: inherit;
    font: inherit;
    margin: 0;
    border: 0;
    padding: 0;
    color: inherit;
    direction: ltr;
    font-family: inherit;
  }

  button {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: visible;
    text-transform: none;
    -webkit-appearance: button;
    cursor: pointer;
  }

  button[disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  img {
    -webkit-user-drag: none;
  }

  html {
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
`;
