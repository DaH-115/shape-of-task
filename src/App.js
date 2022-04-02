import styled, { ThemeProvider } from 'styled-components';
import { defalutTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import Wrapper from './layout/Wrapper';
import AddButton from './components/AddButton';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 90vh;
`;

function App() {
  return (
    <ThemeProvider theme={defalutTheme}>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <MainContent>
          <Main></Main>
          <AddButton />
        </MainContent>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
