import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TodoItemTypes {
  id: string;
  date: string;
  text: string;
  shape: string;
  done: boolean;
}

interface EditTodoItemTypes {
  id: string;
  text: string;
  shape: string;
}

interface initialStateProps {
  todoList: TodoItemTypes[];
  editTodo: EditTodoItemTypes[];
}

const storedValue = localStorage.getItem('todoList');
const parsedValue: TodoItemTypes[] = storedValue ? JSON.parse(storedValue) : [];

const initialState: initialStateProps = {
  todoList: parsedValue,
  editTodo: [{ id: '', text: '', shape: '' }],
};

const todoListSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItemTypes>) => {
      state.todoList = [...state.todoList, action.payload];
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    addEditTodo: (state, action: PayloadAction<string>) => {
      state.editTodo = state.todoList.filter(
        (item: TodoItemTypes) => item.id === action.payload
      );
    },
    updateTodo: (
      state,
      action: PayloadAction<{
        id: string;
        date: string;
        text: string;
        shape: string;
      }>
    ) => {
      const { id, date, text, shape } = action.payload;

      state.todoList = state.todoList.map((item: TodoItemTypes) =>
        item.id === id ? { ...item, date, text, shape } : item
      );
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (item: TodoItemTypes) => item.id !== action.payload
      );
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.map((item: TodoItemTypes) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
      localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
  },
});

export default todoListSlice;
export const { addTodo, updateTodo, removeTodo, toggleTodo, addEditTodo } =
  todoListSlice.actions;
