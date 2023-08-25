import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 20px;
    color: #141414;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    letter-spacing: -0.1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  
  body {
     /* scrollbar */
     overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    background: inherit; 
    border:none; 
    box-shadow:none; 
    border-radius:0; 
    padding:0; 
    overflow:visible; 
    cursor:pointer;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }
`;

export default GlobalStyle;
