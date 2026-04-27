import { TaskTypes } from '@/types/task';
import { getTodayISOString } from '@/utils/dateFormat';

const TASK_LIST_KEY = 'taskList';

interface StoredTaskData {
  taskList: TaskTypes[];
  completedTaskIdsInOrder: string[];
}

const createDefaultTaskList = (): TaskTypes[] => {
  const today = getTodayISOString();

  return [
    {
      id: 'default-task-priority-1',
      date: today,
      text: '중요: 카드를 클릭하면 완료 상태를 바로 바꿀 수 있어요.',
      shape: 'triangle',
      priority: 1,
      priorityDesc: 'Important',
      done: false,
    },
    {
      id: 'default-task-priority-2',
      date: today,
      text: '기억: 점 3개 메뉴에서 내용을 수정하거나 삭제해보세요.',
      shape: 'square',
      priority: 2,
      priorityDesc: 'Remember',
      done: false,
    },
    {
      id: 'default-task-priority-3',
      date: today,
      text: '언제든: 추가 버튼으로 나만의 새 할 일을 만들어보세요.',
      shape: 'circle',
      priority: 3,
      priorityDesc: 'Anytime',
      done: false,
    },
  ];
};

/** localStorage에서 할일 목록 불러오기 */
export const getStoredTaskList = (): TaskTypes[] => {
  try {
    const storedValue = localStorage.getItem(TASK_LIST_KEY);
    if (!storedValue) return createDefaultTaskList();
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
