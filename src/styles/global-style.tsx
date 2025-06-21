import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    letter-spacing: -0.05rem;
    font-size: 20px; /* 1rem = 20px로 계산 용이성 */
    color: #141414;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    font-family: 'Roboto', 'Pretendard', -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    letter-spacing: -0.05rem;
    background-color: transparent;
    border: 0;

    &:focus {
      outline: 2px solid #007acc;
      outline-offset: 2px;
    }

    &:focus:not(:focus-visible) {
      outline: none;
    }
  }

  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }

  a,
  button {
    cursor: pointer;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }

  /* 스크롤바 완전히 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */

  ::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Webkit 브라우저 */
  }
`;

export default GlobalStyle;
