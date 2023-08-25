import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
  value: any;
}

const storedValue = localStorage.getItem('todoList');
const parsedValue = storedValue ? JSON.parse(storedValue) : [];

const initialState: initialStateProps = {
  value: parsedValue,
};

const todoListSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<any>) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem('todoList', JSON.stringify(state.value));
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter(
        (item: any) => item.id !== action.payload
      );
      localStorage.setItem('todoList', JSON.stringify(state.value));
    },
    toggleTodo: (state, action) => {
      state.value = state.value.map((item: any) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
      localStorage.setItem('todoList', JSON.stringify(state.value));
    },
  },
});

export default todoListSlice;
export const { addTodo, removeTodo, toggleTodo } = todoListSlice.actions;
