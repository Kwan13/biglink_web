import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --black: #000000;
    --white: #ffffff;

    --gray-50: #f6f7fb;
    --gray-55: #ebecf0;
    --gray-60: #dfdfdf;
    --gray-100: #d4d4d4;
    --gray-300: #a6a6a6;
    --gray-400: #8f8f8f;

    --success: #6bff95;
    --warn: #ff8541;
    --error: #e95252;

    --black-alt: #0e1317;

    --blue-50: #6cc8fc;
  }

  body {
    background-color: var(--gray-50);
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 16px "K2D-Regular", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
