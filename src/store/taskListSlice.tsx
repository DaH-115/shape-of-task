import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TaskTypes, TaskListState } from 'types/task';

// localStorage 관련 유틸리티 함수들
const getStoredTaskList = (): TaskTypes[] => {
  try {
    const storedValue = localStorage.getItem('taskList');
    return storedValue ? JSON.parse(storedValue) : [];
  } catch (error) {
    console.error('할일 목록 불러오기 실패:', error);
    return [];
  }
};

const saveTaskList = (taskList: TaskTypes[]): void => {
  try {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  } catch (error) {
    console.error('할일 목록 저장 실패:', error);
  }
};

const initialState: TaskListState = {
  taskList: getStoredTaskList(),
  selectedTaskId: '',
  editingTask: {} as TaskTypes,
};

const taskListSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskTypes>) => {
      state.taskList = [...state.taskList, action.payload];
      saveTaskList(state.taskList);
    },
    removeTask: (state) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== state.selectedTaskId
      );
      saveTaskList(state.taskList);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const selectedId = action.payload;
      state.taskList = state.taskList.map((task) =>
        task.id === selectedId ? { ...task, done: !task.done } : task
      );
      saveTaskList(state.taskList);
    },
    editingTask: (state, action: PayloadAction<string>) => {
      state.selectedTaskId = action.payload;
      const foundTask = state.taskList.find(
        (task) => task.id === action.payload
      );
      state.editingTask = foundTask || ({} as TaskTypes);
    },
    updateTask: (state, action: PayloadAction<TaskTypes>) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      saveTaskList(state.taskList);
      state.selectedTaskId = '';
      state.editingTask = {} as TaskTypes;
    },
    editingTaskReset: (state) => {
      state.selectedTaskId = '';
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
