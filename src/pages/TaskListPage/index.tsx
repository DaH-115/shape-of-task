import React, { useMemo, useState } from 'react';
import { useAppSelector } from 'store/hooks';
import Title from 'components/TitleComponent';
import {
  BlankMessage,
  Container,
  MessageWrapper,
  SortButton,
  TaskListHeader,
  TasksHeaderBtns,
} from 'pages/TaskListPage/index.styles';
import TaskItemList from 'pages/TaskListPage/TaskList/TaskItemList';
import ModalInput from 'components/modals/ModalInput';
import Notification from 'components/modals/Notification';
import AddBtn from 'components/Button/AddBtn';
import UpdateConfirmModal from 'components/modals/confirm/UpdateConfirmModal';
import RemoveConfirmModal from 'components/modals/confirm/RemoveConfirmModal';
import NoteAlert from 'components/modals/NoteAlert';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import SortDropdown, {
  PriorityFilter,
  SortType,
} from 'pages/TaskListPage/SortDropdown';
import ErrorAlert from 'components/modals/ErrorAlert';

const TaskListPage = () => {
  const taskList = useAppSelector((state) => state.taskList.taskList);
  // 정렬 기준
  const [sortType, setSortType] = useState<SortType>('created');
  // 완료된 일정 숨기기
  const [hideCompleted, setHideCompleted] = useState(false);
  // 중요도 필터
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>(0);

  const sortTypeChangeHandler = (type: SortType) => {
    setSortType(type);
  };

  const priorityFilterChangeHandler = (priority: PriorityFilter) => {
    setPriorityFilter((prev: PriorityFilter) =>
      prev === priority ? 0 : priority
    );
  };

  const processTaskList = useMemo(() => {
    const isValidDateString = (dateStr: string): boolean => {
      const date = new Date(dateStr);
      return !isNaN(date.getTime());
    };

    return [...taskList]
      .sort((a, b) => {
        if (a.done !== b.done) {
          return a.done ? 1 : -1;
        }

        if (sortType === 'created') {
          const isValidA = isValidDateString(a.date);
          const isValidB = isValidDateString(b.date);

          // 둘 다 유효하지 않은 날짜
          if (!isValidA && !isValidB) {
            <ErrorAlert message='날짜 형식이 잘못되었습니다.' />;
            return 0;
          }
          // a만 유효하지 않은 날짜
          if (!isValidA) return 1;
          // b만 유효하지 않은 날짜
          if (!isValidB) return -1;

          return new Date(b.date).getTime() - new Date(a.date).getTime();
        } else {
          return a.priority - b.priority;
        }
      })
      .filter((task) => !hideCompleted || !task.done)
      .filter(
        (task) => priorityFilter === 0 || task.priority === priorityFilter
      );
  }, [taskList, sortType, hideCompleted, priorityFilter]);

  return (
    <Container>
      <TaskListHeader>
        <Title title='Tasks' desc='오늘의 일정' />
        <TasksHeaderBtns>
          <SortButton
            onClick={() => setHideCompleted((prev) => !prev)}
            $isActived={!hideCompleted}
            title={hideCompleted ? '완료된 일정 표시' : '완료된 일정 숨기기'}
            aria-label={
              hideCompleted ? '완료된 일정 표시' : '완료된 일정 숨기기'
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
      <AddBtn />
      {taskList.length > 0 ? (
        processTaskList.map((task) => (
          <TaskItemList key={task.id} renderedTask={task} />
        ))
      ) : (
        <MessageWrapper>
          <BlankMessage>오늘의 일정을 추가해 보세요</BlankMessage>
        </MessageWrapper>
      )}
      <ModalInput />
      <UpdateConfirmModal />
      <RemoveConfirmModal />
      <Notification />
      <NoteAlert />
    </Container>
  );
};

export default React.memo(TaskListPage);
