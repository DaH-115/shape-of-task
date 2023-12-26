import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TaskTypes {
  id: string;
  date: string;
  text: string;
  shape: string;
  done: boolean;
}

interface SelectedTaskTypes {
  id: string;
  text: string;
  shape: string;
}

interface EditTaskTypes {
  id: string;
  date: string;
  text: string;
  shape: string;
}

interface initialStateProps {
  taskList: TaskTypes[];
  editingTask: SelectedTaskTypes[];
}

const storedValue = localStorage.getItem('taskList');
const parsedValue: TaskTypes[] = storedValue ? JSON.parse(storedValue) : [];

const initialState: initialStateProps = {
  taskList: parsedValue,
  editingTask: [{ id: '', text: '', shape: '' }],
};

const taskListSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskTypes>) => {
      state.taskList = [...state.taskList, action.payload];
      localStorage.setItem('taskList', JSON.stringify(state.taskList));
    },
    selectEditTask: (state, action: PayloadAction<string>) => {
      state.editingTask = state.taskList.filter(
        (task) => task.id === action.payload
      );
    },
    updateTask: (state, action: PayloadAction<EditTaskTypes>) => {
      const { id, date, text, shape } = action.payload;

      state.taskList = state.taskList.map((task) =>
        task.id === id ? { ...task, date, text, shape } : task
      );
      localStorage.setItem('taskList', JSON.stringify(state.taskList));
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem('taskList', JSON.stringify(state.taskList));
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
      localStorage.setItem('taskList', JSON.stringify(state.taskList));
    },
  },
});

export default taskListSlice;
export const { addTask, updateTask, removeTask, toggleTask, selectEditTask } =
  taskListSlice.actions;
