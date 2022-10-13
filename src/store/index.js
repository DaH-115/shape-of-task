import { configureStore, combineReducers } from '@reduxjs/toolkit';
import captureSlice from './captureSlice';
import todoListSlice from './todoListSlice';

const rootReducers = combineReducers({
  todoList: todoListSlice.reducer,
  capture: captureSlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
