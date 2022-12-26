import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useArrCheck from '../hooks/useArrCheck';

import Message from '../layout/Message';
import { Main } from '../layout/Main';
import FigureListPage from '../pages/FigureListPage';
import TodoListPage from '../pages/TodoListPage';

const MainRoutes = () => {
  const todoList = useSelector((state) => state.todoList.value);
  const arrCheck = useArrCheck();

  return (
    <Main>
      <Routes>
        <Route
          path='/'
          element={
            !todoList.length ? (
              <Message>할 일을 정리해 보세요.😊</Message>
            ) : (
              <TodoListPage />
            )
          }
        />
        <Route
          path='/figure-list'
          element={
            arrCheck === undefined ? (
              <Message>가끔은 여백도 괜찮아요.😌</Message>
            ) : (
              <FigureListPage />
            )
          }
        />
      </Routes>
    </Main>
  );
};

export default MainRoutes;
