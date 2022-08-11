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

function App() {
  const [todoList, setTodoList] = useState([]);

  const onAddTodoHandler = (todoItem) => {
    setTodoList((prevTodoList) => [...prevTodoList, todoItem]);
  };

  const onToggleTodoHandler = (id) => {
    const newTodoItme = todoList.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );

    setTodoList(newTodoItme);
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
        <Main>
          <FigureListPage todoList={todoList} />
        </Main>
      </FlexWrapper>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
