import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

/* 폰트 */
const fontFamilyBase = `'Roboto', 'Pretendard', -apple-system, BlinkMacSystemFont,
  'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
  'Helvetica Neue', sans-serif`;

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --font-family-base: ${fontFamilyBase};
  }

  /* reset에 없는 box-sizing만 추가 (reset은 margin/padding을 요소별로 처리) */
  * {
    box-sizing: border-box;
  }

  html {
    font-family: var(--font-family-base);
    letter-spacing: -0.05rem;
    font-size: 16px; /* 1rem = 16px */
    color: #121212;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* 스크롤바 완전히 숨기기 */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
  }

  html ::-webkit-scrollbar {
    display: none; /* Chrome/Safari/Webkit 브라우저 */
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button,
  input,
  select,
  textarea {
    font-family: var(--font-family-base);
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

  address {
    font-style: normal;
  }
`;

export default GlobalStyle;
