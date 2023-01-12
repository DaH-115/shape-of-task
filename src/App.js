import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { defalutTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import FlexWrapper from './styles/FlexWrapper';
import Wrapper from './styles/Wrapper';
import MainRoutes from './routes/Routes';
import { commonColors, themeColors } from './styles/theme-color';

import MetaTags from './MetaTags';
import Header from './layout/Header';
import Footer from './layout/Footer';
import AddBtn from './components/AddBtn';
import FigureListMain from './components/FigureListMain';

function App() {
  const paletteName = useSelector((state) => state.themeChange.paletteName);

  return (
    <ThemeProvider
      theme={{
        ...defalutTheme,
        commonColors,
        colors: themeColors[paletteName],
      }}
    >
      <MetaTags />
      <GlobalStyle />
      <Header />
      <FlexWrapper>
        <Wrapper>
          <MainRoutes />
          <AddBtn />
        </Wrapper>
        {/* DESKTOP SIZE ONLY */}
        <FigureListMain />
      </FlexWrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
