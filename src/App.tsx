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
      <Footer />
    </ThemeProvider>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

const TodoCountMessage = styled.div`
  font-size: 1.2rem;
  padding: 1rem;
`;
