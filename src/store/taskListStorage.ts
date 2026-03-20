import { TaskTypes } from '@/types/task';

const TASK_LIST_KEY = 'taskList';

interface StoredTaskData {
  taskList: TaskTypes[];
  completedTaskIdsInOrder: string[];
}

/** localStorage에서 할일 목록 불러오기 */
export const getStoredTaskList = (): TaskTypes[] => {
  try {
    const storedValue = localStorage.getItem(TASK_LIST_KEY);
    if (!storedValue) return [];
    const parsed = JSON.parse(storedValue);
    return parsed.taskList ?? [];
  } catch (error) {
    console.error('할일 목록 불러오기 실패:', error);
    return [];
  }
};

/** localStorage에서 완료 순서 목록 불러오기 */
export const getStoredCompletedTaskIdsInOrder = (): string[] => {
  try {
    const storedValue = localStorage.getItem(TASK_LIST_KEY);
    if (!storedValue) return [];
    const parsed = JSON.parse(storedValue);
    return parsed.completedTaskIdsInOrder ?? [];
  } catch (error) {
    console.error('완료 순서 목록 불러오기 실패:', error);
    return [];
  }
};

/** localStorage에 할일 목록 및 완료 순서 저장 */
export const saveTaskList = (
  taskList: TaskTypes[],
  completedTaskIdsInOrder: string[]
): void => {
  try {
    const data: StoredTaskData = { taskList, completedTaskIdsInOrder };
    localStorage.setItem(TASK_LIST_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('할일 목록 저장 실패:', error);
  }
};
