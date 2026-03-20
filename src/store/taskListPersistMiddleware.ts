import { Middleware } from "@reduxjs/toolkit";
import { TaskTypes } from "@/types/task";
import { saveTaskList } from "./taskListStorage";
import { addTask, removeTask, toggleTask, updateTask } from "./taskListSlice";

/** taskList를 변경하는 액션들 - slice에서 가져와 단일 출처 유지 */
const TASK_LIST_PERSIST_ACTIONS: Set<string> = new Set([
  addTask.type,
  removeTask.type,
  toggleTask.type,
  updateTask.type,
]);

/** taskList 변경 시 localStorage에 자동 저장하는 미들웨어 */
export const taskListPersistMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    // 미들웨어가 받는 action은 TypeScript에서 unknown 타입이라서
    // 바로 action.type을 쓰면 컴파일 에러가 난다.
    // 그래서 먼저 action이 객체인지, null이 아닌지, type 속성이 있는지
    // 확인한 후에 action.type을 사용한다.
    const actionType =
      typeof action === "object" && action !== null && "type" in action
        ? (action as { type: string }).type
        : "";
    if (TASK_LIST_PERSIST_ACTIONS.has(actionType)) {
      const state = store.getState() as {
        taskList: { taskList: TaskTypes[]; completedTaskIdsInOrder: string[] };
      };
      saveTaskList(
        state.taskList.taskList,
        state.taskList.completedTaskIdsInOrder
      );
    }

    return result;
  };
