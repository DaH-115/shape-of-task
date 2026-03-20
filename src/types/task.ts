export type ShapeName = 'circle' | 'square' | 'triangle';

// 도형 옵션 (단일 소스)
export const SHAPE_OPTIONS: { shape: ShapeName; desc: string; priority: number }[] = [
  { shape: 'triangle', desc: 'Important', priority: 1 },
  { shape: 'square', desc: 'Remember', priority: 2 },
  { shape: 'circle', desc: 'Anytime', priority: 3 },
];

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
  editingTask: TaskTypes | null;
}
