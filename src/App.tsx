import { useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useAppSelector } from '@/store/hooks';
import GlobalStyle from '@/styles/global-style';
import { defaultTheme } from '@/styles/theme-device';
import { themeColors } from '@/styles/theme-colors';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import ResponsiveLayout from '@/layout/ResponsiveLayout';
import { ErrorAlert } from '@/components/modals';

const App = () => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const theme = useMemo(
    () => ({
      ...defaultTheme,
      colors: themeColors[paletteName],
    }),
    [paletteName]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
          <ResponsiveLayout />
        </MainContent>
        <Footer />
      </AppContainer>
      <ErrorAlert />
    </ThemeProvider>
  );
};

export default App;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0; /* flexbox에서 overflow 처리를 위해 필요 */
`;
