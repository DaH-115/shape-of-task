import { lazy } from 'react';

/** 페이지 lazy import - Routes, ResponsiveLayout에서 공통 사용 */
export const TaskListPage = lazy(() => import('./taskListPage'));
export const ShapeListPage = lazy(() => import('./shapeListPage'));
