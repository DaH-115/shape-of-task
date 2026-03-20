import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TaskTypes, TaskListState } from '@/types/task';
import { getStoredTaskList } from './taskListStorage';

const initialState: TaskListState = {
  taskList: getStoredTaskList(),
  selectedTaskId: '',
  editingTask: null,
};

const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskTypes>) => {
      state.taskList = [...state.taskList, action.payload];
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const selectedId = action.payload;
      state.taskList = state.taskList.map((task) =>
        task.id === selectedId ? { ...task, done: !task.done } : task
      );
    },
    setEditingTask: (state, action: PayloadAction<string>) => {
      state.selectedTaskId = action.payload;
      const foundTask = state.taskList.find(
        (task) => task.id === action.payload
      );
      state.editingTask = foundTask ?? null;
    },
    updateTask: (state, action: PayloadAction<TaskTypes>) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      state.selectedTaskId = '';
      state.editingTask = null;
    },
    editingTaskReset: (state) => {
      state.selectedTaskId = '';
      state.editingTask = null;
    },
  },
});

export default taskListSlice;
export const {
  addTask,
  removeTask,
  toggleTask,
  setEditingTask,
  updateTask,
  editingTaskReset,
} = taskListSlice.actions;
