import { Routes, Route } from 'react-router-dom';

import Main from '../layout/Main';
import TodoListPage from '../pages/TodoListPage';
import FigureListPage from '../pages/FigureListPage';

const MainRoutes = () => {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<TodoListPage />} />
        <Route path='/figure-list' element={<FigureListPage />} />
      </Routes>
    </Main>
  );
};

export default MainRoutes;
