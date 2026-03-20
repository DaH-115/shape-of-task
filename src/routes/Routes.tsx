import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import { Loading } from "@/components/common";
import { TaskListPage, ShapeListPage } from "@/pages";

const RoutesComponent = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/task-list" element={<TaskListPage />} />
        <Route path="/shape-list" element={<ShapeListPage />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesComponent;
