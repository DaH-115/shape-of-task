import { configureStore, combineReducers } from '@reduxjs/toolkit';

import todoListSlice from 'store/todoListSlice';
import themeChangeSlice from 'store/themeChangeSlice';
import modalSlice from 'store/modalSlice';

const rootReducers = combineReducers({
  todoList: todoListSlice.reducer,
  modal: modalSlice.reducer,
  themeChange: themeChangeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
