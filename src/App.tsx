import { ThemeProvider, styled } from 'styled-components';
import { defalutTheme } from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';
import Routes from 'routes/Routes';
import { commonColors, themeColors } from 'styles/theme-color';
import { useAppSelector } from 'store/hooks';

import MetaTags from 'MetaTags';
import AddBtn from 'components/AddBtn';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import FigureListPage from 'pages/FigureListPage';

const App = () => {
  const paletteName = useAppSelector((state) => state.themeChange.paletteName);
  const todoList = useAppSelector((state) => state.todoList.todoList);
  const restTodo = todoList.filter(
    (todo: { done: boolean }) => todo.done === false
  );

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
      <AllWrapper>
        <Wrapper>
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
        </Wrapper>
        <RWrapper>
          <FigureListPage />
        </RWrapper>
      </AllWrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;

const AllWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const RWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  overflow: auto;
`;

const TodoCountMessage = styled.div`
  font-size: 1.2rem;
  padding: 1rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.9rem;
  }
`;
