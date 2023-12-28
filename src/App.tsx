import styled, { ThemeProvider } from 'styled-components';
import { useAppSelector } from 'store/hooks';
import GlobalStyle from 'styles/GlobalStyle';
import { defalutTheme } from 'styles/theme';
import { themeColors } from 'styles/theme-colors';

import Header from 'layout/Header';
import RoutesComponent from 'routes/Routes';
import Footer from 'layout/Footer';
import ErrorAlert from 'components/modals/ErrorAlert';

const App = () => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const theme = {
    ...defalutTheme,
    colors: themeColors[paletteName],
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <RoutesComponent />
      </Container>
      <Footer />
      <ErrorAlert />
    </ThemeProvider>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  overflow-y: scroll;
`;
