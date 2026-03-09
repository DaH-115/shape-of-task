import { useCallback, useState } from 'react';

export type SortType = 'priority' | 'created';
export type PriorityFilter = 0 | 1 | 2 | 3;

interface UseTaskListFiltersReturn {
  sortType: SortType;
  priorityFilter: PriorityFilter;
  hideCompleted: boolean;
  onSortChange: (type: SortType) => void;
  onPriorityFilterChange: (priority: PriorityFilter) => void;
  onHideCompletedToggle: () => void;
}

export const useTaskListFilters = (): UseTaskListFiltersReturn => {
  const [sortType, setSortType] = useState<SortType>('created');
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>(0);
  const [hideCompleted, setHideCompleted] = useState(false);

  const onSortChange = useCallback((type: SortType) => {
    setSortType(type);
  }, []);

  const onPriorityFilterChange = useCallback((priority: PriorityFilter) => {
    setPriorityFilter((prev) => (prev === priority ? 0 : priority));
  }, []);

  const onHideCompletedToggle = useCallback(() => {
    setHideCompleted((prev) => !prev);
  }, []);

  return {
    sortType,
    priorityFilter,
    hideCompleted,
    onSortChange,
    onPriorityFilterChange,
    onHideCompletedToggle,
  };
};
