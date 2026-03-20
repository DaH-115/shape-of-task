import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { errorAlertOpenHandler } from "@/store/modalSlice";
import {
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
  AddButtonWrapper,
} from "@/pages/taskListPage/index.styles";
import TaskList from "@/pages/taskListPage/taskList/TaskList";
import SortDropdown from "@/pages/taskListPage/SortDropdown";
import {
  useTaskListFilters,
  useTaskListProcessed,
} from "@/pages/taskListPage/hooks";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import Title from "@/components/TitleComponent";

export type { SortType, PriorityFilter } from "@/pages/taskListPage/hooks";

const TaskListPage = () => {
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const dispatch = useAppDispatch();

  const [isInputOpen, setIsInputOpen] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [isUpdateConfirmOpen, setIsUpdateConfirmOpen] = useState(false);
  const [isRemoveConfirmOpen, setIsRemoveConfirmOpen] = useState(false);
  const [taskIdToEdit, setTaskIdToEdit] = useState<string | null>(null);
  const [taskIdToRemove, setTaskIdToRemove] = useState<string>("");
  const {
    sortType,
    priorityFilter,
    hideCompleted,
    onSortChange,
    onPriorityFilterChange,
    onHideCompletedToggle,
    onFiltersReset,
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

  const handleUpdateClick = useCallback((taskId: string) => {
    setTaskIdToEdit(taskId);
    setIsUpdateConfirmOpen(true);
  }, []);

  const handleRemoveClick = useCallback((taskId: string) => {
    setTaskIdToRemove(taskId);
    setIsRemoveConfirmOpen(true);
  }, []);

  const handleRemoveModalClose = useCallback(() => {
    setTaskIdToRemove("");
    setIsRemoveConfirmOpen(false);
  }, []);

  const handleUpdateConfirm = useCallback(() => {
    setIsUpdateConfirmOpen(false);
    setIsInputOpen(true);
  }, []);

  const handleInputModalClose = useCallback(() => {
    setIsInputOpen(false);
    setTaskIdToEdit(null);
  }, []);

  const handleAddClick = useCallback(() => setIsInputOpen(true), []);

  const handleInputSuccess = useCallback(() => setIsNoteOpen(true), []);

  const handleUpdateConfirmModalClose = useCallback(() => {
    setIsUpdateConfirmOpen(false);
    setTaskIdToEdit(null);
  }, []);

  const handleNoteClose = useCallback(() => setIsNoteOpen(false), []);

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
          <Title title="오늘의 일정" desc="일정을 잊지말고 완료해보세요" />
          <HeaderProgressWrapper>
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
                onFiltersReset={onFiltersReset}
              />
            </TasksHeaderBtns>
          </HeaderProgressWrapper>
        </TaskListHeader>

        <AddButtonWrapper>
          <AddButton onAddClick={handleAddClick} />
        </AddButtonWrapper>

        <TaskListContainer>
          {taskList.length > 0 ? (
            <TaskList
              tasks={processTaskList}
              onUpdateClick={handleUpdateClick}
              onRemoveClick={handleRemoveClick}
            />
          ) : (
            <EmptyState message="일정을 추가해보세요!" />
          )}
        </TaskListContainer>
      </Wrapper>
      <ModalInput
        isOpen={isInputOpen}
        onClose={handleInputModalClose}
        onSuccess={handleInputSuccess}
        editingTaskId={taskIdToEdit}
      />
      <UpdateConfirmModal
        isOpen={isUpdateConfirmOpen}
        onClose={handleUpdateConfirmModalClose}
        onConfirm={handleUpdateConfirm}
      />
      <RemoveConfirmModal
        isOpen={isRemoveConfirmOpen}
        onClose={handleRemoveModalClose}
        taskIdToRemove={taskIdToRemove}
      />
      <Notification />
      <NoteAlert isOpen={isNoteOpen} onClose={handleNoteClose} />
    </Container>
  );
};

export default TaskListPage;
