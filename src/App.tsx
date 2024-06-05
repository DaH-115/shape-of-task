import styled, { ThemeProvider } from 'styled-components';
import { useAppSelector } from 'store/hooks';
import GlobalStyle from 'styles/GlobalStyle';
import { defalutTheme } from 'styles/theme';
import { themeColors } from 'styles/theme-colors';
import RoutesComponent from 'routes/Routes';

import Header from 'layout/Header';
import Footer from 'layout/Footer';
import ErrorAlert from 'components/modals/ErrorAlert';

import MainPage from 'pages/MainPage';
import TaskListPage from 'pages/TaskListPage';
import ShapeListPage from 'pages/ShapeListPage';

const App = () => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const theme = {
    ...defalutTheme,
    colors: themeColors[paletteName],
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <DesktopContainer>
        <MainPage />
        <TaskListPage />
        <ShapeListPage />
      </DesktopContainer>
      <MobileContainer>
        <RoutesComponent />
      </MobileContainer>
      <Footer />
      <ErrorAlert />
    </ThemeProvider>
  );
};

export default App;

const DesktopContainer = styled.div`
  display: none;

  ${({ theme }) => theme.device.tablet} {
    display: flex;
    width: 100%;
    height: 100dvh;
    background-color: ${({ theme }) => theme.commonColors.light_gray};
  }
`;

const MobileContainer = styled.div`
  display: block;

  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
