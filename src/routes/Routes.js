import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Message from '../layout/Message';
import FigureListPage from '../pages/FigureListPage';
import TodoListPage from '../pages/TodoListPage';
import useArrCheck from '../hooks/useArrCheck';

const RoutesFC = () => {
  const todoList = useSelector((state) => state.todoList.value);
  const arrCheck = useArrCheck();

  return (
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
  );
};

export default RoutesFC;
