import { ThemeProvider, styled } from 'styled-components';
import Routes from 'routes/Routes';
import GlobalStyle from 'styles/GlobalStyle';
import { defalutTheme } from 'styles/theme';
import { themeColors } from 'styles/theme-colors';
import { useAppSelector } from 'store/hooks';

import useGetWindowWidth from 'hooks/useGetWindowWidth';
import MetaTags from 'MetaTags';
import FigureListPage from 'pages/FigureListPage';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import AddBtn from 'components/AddBtn';
import Notification from 'components/modals/Notification';
import ModalInput from 'components/modals/ModalInput';
import EditInputModal from 'components/modals/EditInputModal';
import Alert from 'components/modals/Alert';
import Confirm from 'components/modals/Confirm';

const App = () => {
  const todoList = useAppSelector((state) => state.todoList.todoList);
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const alertState = useAppSelector((state) => state.modal.alertState);
  const confirmState = useAppSelector(
    (state) => state.modal.confirmState.isOpen
  );
  const restTodo = todoList.filter(
    (todo: { done: boolean }) => todo.done === false
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
      <AllWrapper>
        <MainContentWrapper>
          <Header />
          <MainContent>
            <Routes />
          </MainContent>
          <ContentBottom>
            <TodoCountMessage>{restTodo.length}</TodoCountMessage>
            <AddBtn />
          </ContentBottom>
        </MainContentWrapper>
        {windowWidth >= tabletSize && (
          <FigureListView>
            <FigureListPage />
          </FigureListView>
        )}
      </AllWrapper>
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

const AllWrapper = styled.main`
  display: flex;
  min-width: ${({ theme }) => theme.size.mobile};
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
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  overflow: auto;
`;

const ContentBottom = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1.2rem;

  display: flex;
  align-items: center;

  font-size: 1.2rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
  }
`;

const TodoCountMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.8rem;
  height: 2.8rem;

  font-weight: 700;
  text-align: center;
  line-height: 2.8rem;

  padding-right: 0.1rem;

  color: ${({ theme }) => theme.colors.important};
  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 50%;

  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.3);
`;
