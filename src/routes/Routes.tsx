import { Routes, Route } from 'react-router-dom';

import TodoListPage from '../pages/TodoListPage';
// import FigureListPage from '../pages/FigureListPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<TodoListPage />} />
      {/* <Route path='/figure-list' element={<FigureListPage />} /> */}
    </Routes>
  );
};

export default MainRoutes;
