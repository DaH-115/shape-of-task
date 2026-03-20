import { TaskTypes } from '@/types/task';

const TASK_LIST_KEY = 'taskList';

/** localStorage에서 할일 목록 불러오기 */
export const getStoredTaskList = (): TaskTypes[] => {
  try {
    const storedValue = localStorage.getItem(TASK_LIST_KEY);
    return storedValue ? JSON.parse(storedValue) : [];
  } catch (error) {
    console.error('할일 목록 불러오기 실패:', error);
    return [];
  }
};

/** localStorage에 할일 목록 저장 */
export const saveTaskList = (taskList: TaskTypes[]): void => {
  try {
    localStorage.setItem(TASK_LIST_KEY, JSON.stringify(taskList));
  } catch (error) {
    console.error('할일 목록 저장 실패:', error);
  }
};
