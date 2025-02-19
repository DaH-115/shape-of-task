import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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

interface initialStateProps {
  taskList: TaskTypes[];
  selectedTodoId: string;
  editingTask: TaskTypes;
}

const storedValue = localStorage.getItem('taskList');
const parsedValue: TaskTypes[] = storedValue ? JSON.parse(storedValue) : [];

const initialState: initialStateProps = {
  taskList: parsedValue,
  selectedTodoId: '',
  editingTask: {} as TaskTypes,
};

const setItemHandler = (taskList: TaskTypes[]) => {
  localStorage.setItem('taskList', JSON.stringify(taskList));
};

const taskListSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskTypes>) => {
      state.taskList = [...state.taskList, action.payload];
      setItemHandler(state.taskList);
    },
    removeTask: (state) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== state.selectedTodoId
      );
      setItemHandler(state.taskList);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const selectedId = action.payload;
      state.taskList = state.taskList.map((task) =>
        task.id === selectedId ? { ...task, done: !task.done } : task
      );
      setItemHandler(state.taskList);
    },
    editingTask: (state, action: PayloadAction<string>) => {
      state.selectedTodoId = action.payload;
      state.editingTask = state.taskList.filter(
        (task) => task.id === action.payload
      )[0];
    },
    updateTask: (state, action: PayloadAction<TaskTypes>) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      setItemHandler(state.taskList);
      state.selectedTodoId = '';
      state.editingTask = {} as TaskTypes;
    },
    editingTaskReset: (state) => {
      state.selectedTodoId = '';
      state.editingTask = {} as TaskTypes;
    },
  },
});

export default taskListSlice;
export const {
  addTask,
  removeTask,
  toggleTask,
  editingTask,
  updateTask,
  editingTaskReset,
} = taskListSlice.actions;
