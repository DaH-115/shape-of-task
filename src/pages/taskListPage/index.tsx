import { useCallback, useEffect } from 'react';
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
import {
  useScrollToBottom,
  useTaskListFilters,
  useTaskListProcessed,
} from './hooks';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

export type { SortType, PriorityFilter } from './hooks';

const TaskListPage = () => {
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const dispatch = useAppDispatch();

  const inputModal = useModal();
  const noteAlert = useModal();
  const updateConfirmModal = useModal();
  const removeConfirmModal = useModal();

  const isScrolledDown = useScrollToBottom();
  const {
    sortType,
    priorityFilter,
    hideCompleted,
    onSortChange,
    onPriorityFilterChange,
    onHideCompletedToggle,
  } = useTaskListFilters();
  const processTaskList = useTaskListProcessed({
    taskList,
    sortType,
    hideCompleted,
    priorityFilter,
  });

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

  // 잘못된 날짜 형식 체크 (렌더 중 side effect 방지를 위해 useEffect 사용)
  useEffect(() => {
    const hasInvalidDates = taskList.some((task) =>
      isNaN(new Date(task.date).getTime())
    );
    if (hasInvalidDates) {
      dispatch(errorAlertOpenHandler('Invalid date format'));
    }
  }, [taskList, dispatch]);

  return (
    <Container>
      <Wrapper>
        <TaskListHeader>
          <Title title='Tasks' desc="Today's Tasks" />
          <TasksHeaderBtns>
            <SortButton
              onClick={onHideCompletedToggle}
              $isActive={!hideCompleted}
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
              onSortChange={onSortChange}
              onPriorityFilterChange={onPriorityFilterChange}
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
