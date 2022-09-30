import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { defalutTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './layout/Header';
import Main from './layout/Main';
import FlexWrapper from './layout/FlexWrapper';
import Wrapper from './layout/Wrapper';
import Footer from './layout/Footer';
import AddButton from './components/AddButton';
import TodoListPage from './assets/pages/TodoListPage';
import FigureListPage from './assets/pages/FigureListPage';
import { useEffect } from 'react';

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('todoList')) || []
  );

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

  return (
    <ThemeProvider theme={defalutTheme}>
      <GlobalStyle />
      <Header />
      <FlexWrapper>
        <Wrapper>
          <Main>
            <Routes>
              <Route
                path='/'
                element={
                  <TodoListPage
                    todoList={todoList}
                    onToggleTodo={onToggleTodoHandler}
                    onRemoveTodo={onRemoveTodoHandler}
                  />
                }
              />
              <Route
                path='/figure-list'
                element={<FigureListPage todoList={todoList} />}
              />
            </Routes>
          </Main>
          <AddButton todoList={todoList} onAddTodo={onAddTodoHandler} />
        </Wrapper>
        <Main display='desktop'>
          <FigureListPage todoList={todoList} />
        </Main>
      </FlexWrapper>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
