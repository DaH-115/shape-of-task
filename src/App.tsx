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
import AddBtn from 'components/AddBtn';
import ModalInput from 'components/modals/ModalInput';
import EditInputModal from 'components/modals/EditInputModal';
import useGetwindowWidth from 'hooks/useGetwindowWidth';

const App = () => {
  const todoList = useAppSelector((state) => state.todoList.todoList);
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const restTodo = todoList.filter(
    (todo: { done: boolean }) => todo.done === false
  );
  const { windowWidth, tabletSize } = useGetwindowWidth();
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
          <TodoCountMessage>
            {restTodo.length
              ? `총 ${restTodo.length}개의 할 일이 있습니다`
              : '할 일이 없습니다'}
          </TodoCountMessage>
          <AddBtn />
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  overflow: auto;
`;

const TodoCountMessage = styled.div`
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
  border-top: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};
  border-bottom: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.9rem;
  }
`;
