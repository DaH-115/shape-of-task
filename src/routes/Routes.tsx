import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import TaskListPage from 'pages/taskListPage';
import ShapeListPage from 'pages/shapeListPage';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/task-list' element={<TaskListPage />} />
      <Route path='/shape-list' element={<ShapeListPage />} />
      <Route path='/*' element={<MainPage />} />
    </Routes>
  );
};

export default RoutesComponent;
