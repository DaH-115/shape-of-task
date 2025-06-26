export type { ShapeName, TaskTypes, TaskListState } from './task';

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}
