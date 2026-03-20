import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '@/store/api/apiSlice';
import taskListSlice from '@/store/taskListSlice';
import themeChangeSlice from '@/store/themeChangeSlice';
import modalSlice from '@/store/modalSlice';
import { taskListPersistMiddleware } from '@/store/taskListPersistMiddleware';

const rootReducer = combineReducers({
  taskList: taskListSlice.reducer,
  modal: modalSlice.reducer,
  themeChange: themeChangeSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(taskListPersistMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
