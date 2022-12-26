import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: JSON.parse(localStorage.getItem('todoList')) || [],
};

const todoListSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value = [...state.value, action.payload];
      localStorage.setItem('todoList', JSON.stringify(state.value));
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      localStorage.setItem('todoList', JSON.stringify(state.value));
    },
    toggleTodo: (state, action) => {
      state.value = state.value.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
      localStorage.setItem('todoList', JSON.stringify(state.value));
    },
  },
});

export default todoListSlice;
export const { addTodo, removeTodo, toggleTodo } = todoListSlice.actions;
