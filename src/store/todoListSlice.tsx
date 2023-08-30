import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  todoList: any;
}

const storedValue = localStorage.getItem('todoList');
const parsedValue = storedValue ? JSON.parse(storedValue) : [];

const initialState: initialStateProps = {
  todoList: parsedValue,
};

const todoListSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<any>) => {
      state.todoList = [...state.todoList, action.payload];
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    updateTodo: (state, action) => {
      const { id, date, text, figure } = action.payload;

      state.todoList = state.todoList.map((item: any) =>
        item.id === id
          ? { ...item, date: date, text: text, figure: figure }
          : item
      );

      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item: any) => item.id !== action.payload
      );
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    toggleTodo: (state, action) => {
      state.todoList = state.todoList.map((item: any) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
  },
});

export default todoListSlice;
export const { addTodo, updateTodo, removeTodo, toggleTodo } =
  todoListSlice.actions;
