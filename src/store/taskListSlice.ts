import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TaskTypes, TaskListState } from '@/types/task';
import {
  getStoredTaskList,
  getStoredCompletedTaskIdsInOrder,
} from "@/store/taskListStorage";

const initialState: TaskListState = {
  taskList: getStoredTaskList(),
  completedTaskIdsInOrder: getStoredCompletedTaskIdsInOrder(),
};

const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    /** 새 태스크 추가 (맨 앞에) */
    addTask: (state, action: PayloadAction<TaskTypes>) => {
      state.taskList = [action.payload, ...state.taskList];
    },
    /** 태스크 삭제 (taskList, completedTaskIdsInOrder에서 제거) */
    removeTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.taskList = state.taskList.filter((task) => task.id !== id);
      state.completedTaskIdsInOrder = state.completedTaskIdsInOrder.filter(
        (taskId) => taskId !== id
      );
    },
    /** 태스크 완료 토글 (완료 시 맨 뒤에 추가, 미완료 시 제거) */
    toggleTask: (state, action: PayloadAction<string>) => {
      const selectedId = action.payload;
      const task = state.taskList.find((t) => t.id === selectedId);
      if (!task) return;

      const nextDone = !task.done;
      state.taskList = state.taskList.map((t) =>
        t.id === selectedId ? { ...t, done: nextDone } : t
      );

      if (nextDone) {
        state.completedTaskIdsInOrder.push(selectedId);
      } else {
        state.completedTaskIdsInOrder = state.completedTaskIdsInOrder.filter(
          (id) => id !== selectedId
        );
      }
    },
    /** 태스크 수정 */
    updateTask: (state, action: PayloadAction<TaskTypes>) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    },
  },
});

export default taskListSlice;
export const {
  addTask,
  removeTask,
  toggleTask,
  updateTask,
} = taskListSlice.actions;
