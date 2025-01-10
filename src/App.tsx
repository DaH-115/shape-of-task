import { lazy, Suspense, useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useAppSelector } from 'store/hooks';
import GlobalStyle from 'styles/global-style';
import { defaultTheme } from 'styles/theme-device';
import { themeColors } from 'styles/theme-colors';
import RoutesComponent from 'routes/Routes';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import ErrorAlert from 'components/modals/ErrorAlert';
import MainPage from 'pages/MainPage';
import { useBreakpoint } from 'hooks/useBreakpoint';
import Loading from 'layout/Loading';

const TaskListPage = lazy(() => import('pages/TaskListPage'));
const ShapeListPage = lazy(() => import('pages/ShapeListPage'));

const App = () => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const theme = useMemo(
    () => ({
      ...defaultTheme,
      colors: themeColors[paletteName],
    }),
    [paletteName]
  );
  const isDesktop = useBreakpoint(768);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {isDesktop ? (
        <DesktopContainer>
          <MainPage />
          <Suspense fallback={<Loading />}>
            <TaskListPage />
            <ShapeListPage />
          </Suspense>
        </DesktopContainer>
      ) : (
        <MobileContainer>
          <RoutesComponent />
        </MobileContainer>
      )}
      <Footer />
      <ErrorAlert />
    </ThemeProvider>
  );
};

export default App;

const DesktopContainer = styled.div`
  display: none;

  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.commonColors.light_gray};

  ${({ theme }) => theme.device.tablet} {
    display: flex;
  }
`;

const MobileContainer = styled.div`
  display: block;
  width: 100%;
  height: 100dvh;

  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
