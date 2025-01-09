import React, { useMemo, useState } from 'react';
import { useAppSelector } from 'store/hooks';
import Title from 'styles/TitleComponent';
import {
  BlankMessage,
  Container,
  MessagWrapper,
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
  ImportanceFilter,
  SortType,
} from 'pages/TaskListPage/SortDropdown';

const TaskListPage = () => {
  const taskList = useAppSelector((state) => state.taskList.taskList);
  // 정렬 기준
  const [sortType, setSortType] = useState<SortType>('created');
  // 완료된 일정 숨기기
  const [hideCompleted, setHideCompleted] = useState(false);
  // 중요도 필터
  const [importanceFilter, setImportanceFilter] = useState<ImportanceFilter>(0);

  const sortTypeChangeHandler = (type: SortType) => {
    setSortType(type);
  };

  const importanceFilterChangeHanlder = (importance: ImportanceFilter) => {
    setImportanceFilter((prev: ImportanceFilter) =>
      prev === importance ? 0 : importance
    );
  };

  const processTaskList = useMemo(() => {
    return [...taskList]
      .sort((a, b) => {
        if (a.done !== b.done) {
          return a.done ? 1 : -1;
        }

        if (sortType === 'created') {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        } else {
          return a.importance - b.importance;
        }
      })
      .filter((task) => !hideCompleted || !task.done)
      .filter(
        (task) => importanceFilter === 0 || task.importance === importanceFilter
      );
  }, [taskList, sortType, hideCompleted, importanceFilter]);

  return (
    <Container>
      <TaskListHeader>
        <Title title='Tasks' desc='오늘의 일정' />
        <TasksHeaderBtns>
          <SortButton
            onClick={() => setHideCompleted((prev) => !prev)}
            isActived={!hideCompleted}
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
            importanceFilter={importanceFilter}
            onSortChange={sortTypeChangeHandler}
            onImportanceFilterChange={importanceFilterChangeHanlder}
          />
        </TasksHeaderBtns>
      </TaskListHeader>
      <AddBtn />
      {taskList.length > 0 ? (
        processTaskList.map((task) => (
          <TaskItemList key={task.id} renderedTask={task} />
        ))
      ) : (
        <MessagWrapper>
          <BlankMessage>오늘의 일정을 추가해 보세요</BlankMessage>
        </MessagWrapper>
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
