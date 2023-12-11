import { ThemeProvider, styled } from 'styled-components';
import Routes from 'routes/Routes';
import GlobalStyle from 'styles/GlobalStyle';
import { defalutTheme } from 'styles/theme';
import { themeColors } from 'styles/theme-colors';
import { useAppSelector } from 'store/hooks';

import MetaTags from 'MetaTags';
import FigureListPage from 'pages/FigureListPage';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import Notification from 'components/modals/Notification';
import ModalInput from 'components/modals/ModalInput';
import EditInputModal from 'components/modals/EditInputModal';
import Alert from 'components/modals/Alert';
import Confirm from 'components/modals/Confirm';
import useGetWindowWidth from 'hooks/useGetWindowWidth';

const App = () => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const alertState = useAppSelector((state) => state.modal.alertState);
  const confirmState = useAppSelector(
    (state) => state.modal.confirmState.isOpen
  );
  const tabletSize = 768;
  const { windowWidth } = useGetWindowWidth(tabletSize);
  const theme = {
    ...defalutTheme,
    colors: themeColors[paletteName],
  };

  return (
    <ThemeProvider theme={theme}>
      <MetaTags />
      <GlobalStyle />
      <MainWrapper>
        <MainContentWrapper>
          <Header />
          <Routes />
        </MainContentWrapper>
        {windowWidth >= tabletSize && (
          <FigureListView>
            <FigureListPage />
          </FigureListView>
        )}
      </MainWrapper>
      <Footer />
      <ModalInput />
      <EditInputModal />
      <Notification />
      {alertState && <Alert />}
      {confirmState && <Confirm />}
    </ThemeProvider>
  );
};

export default App;

const MainWrapper = styled.main`
  display: flex;
  min-width: ${({ theme }) => theme.size.mobile};
  width: 100%;
  height: 100vh;
`;

const FigureListView = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  overflow: auto;

  ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const MainContentWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
