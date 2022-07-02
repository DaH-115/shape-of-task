import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { defalutTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import AddButton from './components/AddButton';
import TodoListPage from './assets/pages/TodoListPage';
import FigureListPage from './assets/pages/FigureListPage';

const LayoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
`;

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
    console.log(todoList);
  };

  return (
    <ThemeProvider theme={defalutTheme}>
      <GlobalStyle />
      <LayoutContainer>
        <Header />
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
      </LayoutContainer>
      <AddButton todoList={todoList} onAddTodo={onAddTodoHandler} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
