import styled, { ThemeProvider } from 'styled-components';

import { defalutTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import AddButton from './components/AddButton';
import { useState } from 'react';

const MainContent = styled.div`
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
  };

  return (
    <ThemeProvider theme={defalutTheme}>
      <GlobalStyle />
      <MainContent>
        <Header />
        <Main todoList={todoList} onToggleTodo={onToggleTodoHandler}></Main>
      </MainContent>
      <AddButton todoList={todoList} onAddTodo={onAddTodoHandler} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
