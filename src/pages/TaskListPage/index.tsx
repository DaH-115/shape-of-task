import React, { useMemo, useState } from 'react';
import { TbArrowsSort } from 'react-icons/tb';
import { useAppSelector } from 'store/hooks';
import Title from 'styles/TitleComponent';
import {
  BlankMessage,
  Container,
  MessagWrapper,
  SortButton,
  TaskListHeader,
} from 'pages/TaskListPage/index.styles';
import TaskItemList from 'pages/TaskListPage/TaskList/TaskItemList';
import ModalInput from 'components/modals/ModalInput';
import Notification from 'components/modals/Notification';
import AddBtn from 'components/Button/AddBtn';
import UpdateConfirmModal from 'components/modals/confirm/UpdateConfirmModal';
import RemoveConfirmModal from 'components/modals/confirm/RemoveConfirmModal';
import NoteAlert from 'components/modals/NoteAlert';

const TaskListPage = () => {
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const [isSortAscending, setIsSortAscending] = useState(false);
  const sortedTaskList = useMemo(() => {
    return [...taskList].sort((a, b) => {
      if (isSortAscending) {
        return a.importance - b.importance;
      } else {
        return b.importance - a.importance;
      }
    });
  }, [taskList, isSortAscending]);
  const renderTaskList = isSortAscending ? sortedTaskList : taskList;

  return (
    <Container>
      {/* 일정 페이지 헤더 */}
      <TaskListHeader>
        <Title title='Tasks' desc='오늘의 일정' />
        <SortButton
          onClick={() => setIsSortAscending((prev) => !prev)}
          title={isSortAscending ? '내림차순 정렬' : '오름차순 정렬'}
          aria-label={isSortAscending ? '내림차순 정렬' : '오름차순 정렬'}
        >
          <TbArrowsSort aria-hidden />
        </SortButton>
      </TaskListHeader>
      {/* 일정 추가 버튼 */}
      <AddBtn />
      {/* 일정 리스트 */}
      {taskList.length > 0 ? (
        renderTaskList.map((task) => (
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
