import { useState, useEffect } from 'react';
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
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  );
  const [capture, setCapture] = useState(false);
  const navigate = useNavigate();
  const windowWidth = useResize();

  useEffect(() => {
    windowWidth >= 1024 && navigate('/');
  }, [navigate, windowWidth]);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const onAddTodoHandler = (todoItem) => {
    setTodoList((prevTodoList) => [...prevTodoList, todoItem]);
  };

  const onToggleTodoHandler = (id) => {
    const newTodoItme = todoList.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    setTodoList(newTodoItme);
  };

  const onRemoveTodoHandler = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);

    setTodoList(newTodoList);
  };

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
                    <TodoListPage
                      todoList={todoList}
                      onToggleTodo={onToggleTodoHandler}
                      onRemoveTodo={onRemoveTodoHandler}
                    />
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
                      onCapture={setCapture}
                    />
                  )
                }
              />
            </Routes>
          </Main>
          <AddButton todoList={todoList} onAddTodo={onAddTodoHandler} />
        </Wrapper>
        {/* DESKTOP SIZE */}
        {windowWidth >= 1024 && (
          <Main>
            {arrCheck === undefined ? (
              <Message>가끔은 여백도 괜찮아요.</Message>
            ) : (
              <FigureListPage
                todoList={todoList}
                capture={capture}
                onCapture={setCapture}
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
