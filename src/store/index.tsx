import { configureStore, combineReducers } from '@reduxjs/toolkit';

import taskListSlice from 'store/taskListSlice';
import themeChangeSlice from 'store/themeChangeSlice';
import modalSlice from 'store/modalSlice';

const rootReducers = combineReducers({
  taskList: taskListSlice.reducer,
  modal: modalSlice.reducer,
  themeChange: themeChangeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
