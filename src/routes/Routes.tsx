import { Routes, Route } from 'react-router-dom';
import TaskListPage from 'pages/TaskListPage';
import MainPage from 'pages/MainPage';
import ShapeListPage from 'pages/ShapeListPage';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/task-list' element={<TaskListPage />} />
      <Route path='/shape-list' element={<ShapeListPage />} />
    </Routes>
  );
};

export default RoutesComponent;
