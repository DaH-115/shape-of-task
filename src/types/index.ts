export type { ShapeName, TaskTypes, TaskListState } from "@/types/task";

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}
