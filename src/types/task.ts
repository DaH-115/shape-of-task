export type ShapeName = 'circle' | 'square' | 'triangle';

export interface TaskTypes {
  id: string;
  date: string;
  text: string;
  shape: ShapeName;
  priority: number;
  priorityDesc: string;
  done: boolean;
}

export interface TaskListState {
  taskList: TaskTypes[];
  selectedTaskId: string;
  editingTask: TaskTypes;
}
