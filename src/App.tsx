import { lazy, Suspense, useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useAppSelector } from 'store/hooks';
import GlobalStyle from 'styles/global-style';
import { defaultTheme } from 'styles/theme-device';
import { themeColors } from 'styles/theme-colors';
import RoutesComponent from 'routes/Routes';
import Header from 'layout/header';
import Footer from 'layout/footer';
import { ErrorAlert } from 'components/modals';
import MainPage from 'pages/MainPage';
import { useBreakpoint } from 'hooks';
import Loading from 'layout/Loading';

const TaskListPage = lazy(() => import('pages/taskListPage'));
const ShapeListPage = lazy(() => import('pages/shapeListPage'));

const App = () => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const theme = useMemo(
    () => ({
      ...defaultTheme,
      colors: themeColors[paletteName],
    }),
    [paletteName]
  );
  const { isAboveBreakpoint: isDesktop } = useBreakpoint({ breakpoint: 768 });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
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

const DesktopContainer = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
  gap: 1rem;
  min-width: 768px; /* 최소 너비를 줄여서 가로 스크롤 방지 */
  padding: 1rem;

  ${({ theme }) => theme.device.md} {
    display: flex;
  }
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: ${({ theme }) => theme.size.mobile};
  flex: 1;
  min-height: 0; /* flexbox에서 overflow 처리를 위해 필요 */

  ${({ theme }) => theme.device.md} {
    display: none;
  }
`;
