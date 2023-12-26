import { Routes, Route } from 'react-router-dom';
import TaskListPage from 'pages/TaskListPage';
import FigureListPage from 'pages/FigureListPage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<TaskListPage />} />
      <Route path='/figure-list' element={<FigureListPage />} />
    </Routes>
  );
};

export default MainRoutes;
