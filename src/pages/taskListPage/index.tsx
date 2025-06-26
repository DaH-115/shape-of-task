import { useCallback, useMemo, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { editingTask } from '@/store/taskListSlice';
import { errorAlertOpenHandler } from '@/store/modalSlice';
import {
  TitleComponent as Title,
  ModalInput,
  Notification,
  AddBtn,
  UpdateConfirmModal,
  RemoveConfirmModal,
  NoteAlert,
  EmptyState,
} from '@/components';
import {
  Container,
  Wrapper,
  SortButton,
  TaskListHeader,
  TasksHeaderBtns,
  TaskListContainer,
  AddBtnWrapper,
} from './index.styles';
import TaskItemList from './taskList/TaskItemList';
import SortDropdown from './SortDropdown';
import { useModal } from '@/hooks';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

export type SortType = 'priority' | 'created';
export type PriorityFilter = 0 | 1 | 2 | 3;

const TaskListPage = () => {
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const dispatch = useAppDispatch();

  // 로컬 모달 상태
  const inputModal = useModal();
  const noteAlert = useModal();
  const updateConfirmModal = useModal();
  const removeConfirmModal = useModal();

  // 정렬 기준
  const [sortType, setSortType] = useState<SortType>('created');
  // 완료된 일정 숨기기
  const [hideCompleted, setHideCompleted] = useState(false);
  // 중요도 필터
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>(0);
  // 스크롤 상태 (스크롤을 내렸는지 여부)
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  // 페이지 전체 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // 스크롤이 끝까지 도달했는지 확인 (50px 여유분)
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50;
      setIsScrolledDown(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sortTypeChangeHandler = useCallback((type: SortType) => {
    setSortType(type);
  }, []);

  const priorityFilterChangeHandler = useCallback(
    (priority: PriorityFilter) => {
      setPriorityFilter((prev: PriorityFilter) =>
        prev === priority ? 0 : priority
      );
    },
    []
  );

  const hideCompletedToggleHandler = useCallback(() => {
    setHideCompleted((prev) => !prev);
  }, []);

  // 태스크 핸들러들
  const handleUpdateClick = useCallback(
    (taskId: string) => {
      dispatch(editingTask(taskId));
      updateConfirmModal.openHandler();
    },
    [dispatch, updateConfirmModal]
  );

  const handleRemoveClick = useCallback(
    (taskId: string) => {
      dispatch(editingTask(taskId));
      removeConfirmModal.openHandler();
    },
    [dispatch, removeConfirmModal]
  );

  // 태스크 목록 처리 (정렬 + 필터링)
  const processTaskList = useMemo(() => {
    const isValidDate = (dateStr: string) =>
      !isNaN(new Date(dateStr).getTime());

    return taskList
      .slice() // 원본 배열 복사
      .sort((a, b) => {
        // 완료된 것들을 아래로
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
        } else {
          return a.priority - b.priority;
        }
      })
      .filter((task) => {
        if (hideCompleted && task.done) return false;
        if (priorityFilter !== 0 && task.priority !== priorityFilter)
          return false;
        return true;
      });
  }, [taskList, sortType, hideCompleted, priorityFilter]);

  // 잘못된 날짜 형식 체크
  const hasInvalidDates = taskList.some((task) =>
    isNaN(new Date(task.date).getTime())
  );
  if (hasInvalidDates) {
    dispatch(errorAlertOpenHandler('Invalid date format'));
  }

  return (
    <Container>
      <Wrapper>
        <TaskListHeader>
          <Title title='Tasks' desc="Today's Tasks" />
          <TasksHeaderBtns>
            <SortButton
              onClick={hideCompletedToggleHandler}
              $isActived={!hideCompleted}
              title={
                hideCompleted ? 'Show Completed Tasks' : 'Hide Completed Tasks'
              }
              aria-label={
                hideCompleted ? 'Show Completed Tasks' : 'Hide Completed Tasks'
              }
            >
              {hideCompleted ? (
                <MdOutlineVisibility aria-hidden />
              ) : (
                <MdOutlineVisibilityOff aria-hidden />
              )}
            </SortButton>
            <SortDropdown
              sortType={sortType}
              priorityFilter={priorityFilter}
              onSortChange={sortTypeChangeHandler}
              onPriorityFilterChange={priorityFilterChangeHandler}
            />
          </TasksHeaderBtns>
        </TaskListHeader>
        <AddBtnWrapper $isScrolledDown={isScrolledDown}>
          <AddBtn onAddClick={inputModal.openHandler} />
        </AddBtnWrapper>
        <TaskListContainer>
          {taskList.length > 0 ? (
            processTaskList.map((task) => (
              <TaskItemList
                key={task.id}
                processTask={task}
                onUpdateClick={handleUpdateClick}
                onRemoveClick={handleRemoveClick}
              />
            ))
          ) : (
            <EmptyState message='Add some tasks!' />
          )}
        </TaskListContainer>
      </Wrapper>
      <ModalInput
        isOpen={inputModal.isOpen}
        onClose={inputModal.closeHandler}
        onSuccess={noteAlert.openHandler}
      />
      <UpdateConfirmModal
        isOpen={updateConfirmModal.isOpen}
        onClose={updateConfirmModal.closeHandler}
        onConfirm={inputModal.openHandler}
      />
      <RemoveConfirmModal
        isOpen={removeConfirmModal.isOpen}
        onClose={removeConfirmModal.closeHandler}
      />
      <Notification />
      <NoteAlert isOpen={noteAlert.isOpen} onClose={noteAlert.closeHandler} />
    </Container>
  );
};

export default TaskListPage;
