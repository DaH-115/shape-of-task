import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useArrCheck from '../hooks/useArrCheck';

import Main from '../layout/Main';
import MessageBox from '../layout/MessageBox';
import TodoListPage from '../pages/TodoListPage';
import FigureListPage from '../pages/FigureListPage';

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
              <MessageBox messgae='할 일을 정리해 보세요.😊' />
            ) : (
              <TodoListPage />
            )
          }
        />
        <Route
          path='/figure-list'
          element={
            arrCheck === undefined ? (
              <MessageBox messgae='가끔은 여백도 괜찮아요.😌' />
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
