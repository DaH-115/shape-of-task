import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setEditingTask } from "@/store/taskListSlice";
import { errorAlertOpenHandler } from "@/store/modalSlice";
import {
  TitleComponent as Title,
  ModalInput,
  Notification,
  AddButton,
  UpdateConfirmModal,
  RemoveConfirmModal,
  NoteAlert,
  EmptyState,
} from "@/components";
import {
  Container,
  Wrapper,
  SortButton,
  TaskListHeader,
  TasksHeaderBtns,
  TaskListContainer,
  TaskProgressWrapper,
  ProgressBarTrack,
  ProgressBarFill,
  TaskProgressText,
  HeaderProgressWrapper,
} from "./index.styles";
import TaskList from "./taskList/TaskList";
import SortDropdown from "./SortDropdown";
import { useModal } from "@/hooks";
import { useTaskListFilters, useTaskListProcessed } from "./hooks";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

export type { SortType, PriorityFilter } from "./hooks";

const TaskListPage = () => {
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const dispatch = useAppDispatch();

  const inputModal = useModal();
  const noteAlert = useModal();
  const updateConfirmModal = useModal();
  const removeConfirmModal = useModal();
  const [taskIdToRemove, setTaskIdToRemove] = useState<string>("");
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

  const taskProgress = useMemo(() => {
    const total = taskList.length;
    const completed = taskList.filter((task) => task.done).length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percentage };
  }, [taskList]);

  const handleUpdateClick = useCallback(
    (taskId: string) => {
      dispatch(setEditingTask(taskId));
      updateConfirmModal.openHandler();
    },
    [dispatch, updateConfirmModal],
  );

  const handleRemoveClick = useCallback(
    (taskId: string) => {
      setTaskIdToRemove(taskId);
      removeConfirmModal.openHandler();
    },
    [removeConfirmModal],
  );

  const handleRemoveModalClose = useCallback(() => {
    setTaskIdToRemove("");
    removeConfirmModal.closeHandler();
  }, [removeConfirmModal]);

  // 잘못된 날짜 형식 체크 (렌더 중 side effect 방지를 위해 useEffect 사용)
  useEffect(() => {
    const hasInvalidDates = taskList.some((task) =>
      isNaN(new Date(task.date).getTime()),
    );
    if (hasInvalidDates) {
      dispatch(errorAlertOpenHandler("Invalid date format"));
    }
  }, [taskList, dispatch]);

  return (
    <Container>
      <Wrapper>
        <TaskListHeader>
          <Title title="Tasks" desc="Today's Tasks" />
          <HeaderProgressWrapper>
            {taskList.length > 0 && (
              <TaskProgressWrapper>
                <ProgressBarTrack
                  role="progressbar"
                  aria-valuenow={taskProgress.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="태스크 완료 진행률"
                >
                  <ProgressBarFill $percentage={taskProgress.percentage} />
                </ProgressBarTrack>
                <TaskProgressText>
                  {taskProgress.completed}/{taskProgress.total} (
                  {taskProgress.percentage}%)
                </TaskProgressText>
              </TaskProgressWrapper>
            )}
            <TasksHeaderBtns>
              <SortButton
                onClick={onHideCompletedToggle}
                $isActive={!hideCompleted}
                title={
                  hideCompleted
                    ? "Show Completed Tasks"
                    : "Hide Completed Tasks"
                }
                aria-label={
                  hideCompleted
                    ? "Show Completed Tasks"
                    : "Hide Completed Tasks"
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
          </HeaderProgressWrapper>
        </TaskListHeader>

        <AddButton onAddClick={inputModal.openHandler} />

        <TaskListContainer>
          {taskList.length > 0 ? (
            <TaskList
              tasks={processTaskList}
              onUpdateClick={handleUpdateClick}
              onRemoveClick={handleRemoveClick}
            />
          ) : (
            <EmptyState message="Add some tasks!" />
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
        onClose={handleRemoveModalClose}
        taskIdToRemove={taskIdToRemove}
      />
      <Notification />
      <NoteAlert isOpen={noteAlert.isOpen} onClose={noteAlert.closeHandler} />
    </Container>
  );
};

export default TaskListPage;
