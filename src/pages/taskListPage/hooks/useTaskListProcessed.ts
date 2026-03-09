import { useMemo } from 'react';
import type { TaskTypes } from '@/types/task';
import type { SortType, PriorityFilter } from './useTaskListFilters';

const isValidDate = (dateStr: string): boolean =>
  !isNaN(new Date(dateStr).getTime());

interface UseTaskListProcessedParams {
  taskList: TaskTypes[];
  sortType: SortType;
  hideCompleted: boolean;
  priorityFilter: PriorityFilter;
}

/** 정렬 및 필터링이 적용된 태스크 목록 반환 */
export const useTaskListProcessed = ({
  taskList,
  sortType,
  hideCompleted,
  priorityFilter,
}: UseTaskListProcessedParams): TaskTypes[] => {
  return useMemo(() => {
    return taskList
      .slice()
      .sort((a, b) => {
        if (a.done !== b.done) {
          return a.done ? 1 : -1;
        }

        if (sortType === 'created') {
          const validA = isValidDate(a.date);
          const validB = isValidDate(b.date);

          if (!validA && !validB) return 0;
          if (!validA) return 1;
          if (!validB) return -1;

          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }

        return a.priority - b.priority;
      })
      .filter((task) => {
        if (hideCompleted && task.done) return false;
        if (priorityFilter !== 0 && task.priority !== priorityFilter)
          return false;
        return true;
      });
  }, [taskList, sortType, hideCompleted, priorityFilter]);
};
