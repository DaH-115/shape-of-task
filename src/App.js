import { ThemeProvider } from 'styled-components';
import { defalutTheme } from './styles/theme';

import AddButton from './components/AddButton';
import FigureListMain from './components/FigureListMain';
import GlobalStyle from './styles/GlobalStyle';
import FlexWrapper from './styles/FlexWrapper';
import Wrapper from './styles/Wrapper';
import RoutesFC from './routes/Routes';
import Header from './layout/Header';
import { Main } from './layout/Main';
import Footer from './layout/Footer';
import MetaTags from './MetaTags';

function App() {
  return (
    <ThemeProvider theme={defalutTheme}>
      <MetaTags titleText='main' />
      <GlobalStyle />
      <Header />
      <FlexWrapper>
        <Wrapper>
          <Main>
            <RoutesFC />
          </Main>
          <AddButton />
        </Wrapper>
        {/* DESKTOP SIZE ONLY */}
        <FigureListMain />
      </FlexWrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
