import { ThemeProvider } from 'styled-components';
import { defalutTheme } from './styles/theme';

import MetaTags from './MetaTags';
import Header from './layout/Header';
import Footer from './layout/Footer';
import AddButton from './components/AddButton';
import FigureListMain from './components/FigureListMain';
import GlobalStyle from './styles/GlobalStyle';
import FlexWrapper from './styles/FlexWrapper';
import Wrapper from './styles/Wrapper';
import MainRoutes from './routes/Routes';

function App() {
  return (
    <ThemeProvider theme={defalutTheme}>
      <MetaTags />
      <GlobalStyle />
      <Header />
      <FlexWrapper>
        <Wrapper>
          <MainRoutes />
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
