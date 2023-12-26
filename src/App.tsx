import styled, { ThemeProvider } from 'styled-components';
import { useAppSelector } from 'store/hooks';
import GlobalStyle from 'styles/GlobalStyle';
import { defalutTheme } from 'styles/theme';
import { themeColors } from 'styles/theme-colors';

import MetaTags from 'MetaTags';
import NewHeader from 'layout/NewHeader';
import { MainPage } from 'pages/MainPage';
import Footer from 'layout/Footer';

const App = () => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const theme = {
    ...defalutTheme,
    colors: themeColors[paletteName],
  };

  return (
    <ThemeProvider theme={theme}>
      <MetaTags />
      <GlobalStyle />
      <Container>
        <NewHeader />
        <MainPage />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: 100dvh;
`;
