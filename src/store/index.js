import { configureStore, combineReducers } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import themeChangeSlice from './themeChangeSlice';
import todoListSlice from './todoListSlice';

const rootReducers = combineReducers({
  todoList: todoListSlice.reducer,
  modal: modalSlice.reducer,
  themeChange: themeChangeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
