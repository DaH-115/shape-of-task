import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defalutTheme } from './styles/theme';
import useResize from './hook/useResize';

import GlobalStyle from './styles/GlobalStyle';
import Header from './layout/Header';
import Main from './layout/Main';
import FlexWrapper from './layout/FlexWrapper';
import Wrapper from './layout/Wrapper';
import Footer from './layout/Footer';
import AddButton from './components/AddButton';
import TodoListPage from './pages/TodoListPage';
import FigureListPage from './pages/FigureListPage';
import Message from './components/Message';
import MetaTags from './MetaTags';

function App() {
  const todoList = useSelector((state) => state.todoList.value);
  const [capture, setCapture] = useState(false);
  const navigate = useNavigate();
  const windowWidth = useResize();
  const desktopSize = 1024;

  useEffect(() => {
    windowWidth >= desktopSize && navigate('/');
  }, [navigate, windowWidth]);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  // ✔️ 투두가 존재하지 않을 때 메세지를 보여줍니다.
  const todoArr = todoList.map((item) => item.done);
  const arrCheck = todoArr.find((item) => item === true);

  return (
    <ThemeProvider theme={defalutTheme}>
      <MetaTags titleText='main' />
      <GlobalStyle />
      <Header onCapture={setCapture} />
      <FlexWrapper>
        <Wrapper>
          <Main>
            <Routes>
              <Route
                path='/'
                element={
                  !todoList.length ? (
                    <Message>
                      할 일을 정리해 보세요.
                      <br />
                      하지만 가끔은 여유도 중요하죠.
                    </Message>
                  ) : (
                    <TodoListPage todoList={todoList} />
                  )
                }
              />
              <Route
                path='/figure-list'
                element={
                  arrCheck === undefined ? (
                    <Message>가끔은 여백도 괜찮아요.</Message>
                  ) : (
                    <FigureListPage
                      todoList={todoList}
                      capture={capture}
                      onClose={setCapture}
                    />
                  )
                }
              />
            </Routes>
          </Main>
          <AddButton todoList={todoList} />
        </Wrapper>
        {/* DESKTOP SIZE */}

        {windowWidth >= desktopSize && (
          <Main>
            {arrCheck === undefined ? (
              <Message>가끔은 여백도 괜찮아요.</Message>
            ) : (
              <FigureListPage
                todoList={todoList}
                capture={capture}
                onClose={setCapture}
              />
            )}
          </Main>
        )}
      </FlexWrapper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
