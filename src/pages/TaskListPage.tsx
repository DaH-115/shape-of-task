import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { TbArrowsSort } from 'react-icons/tb';
import { useAppSelector } from 'store/hooks';
import { Title } from 'styles/Title';
import TaskItem from 'components/TaskItem';
import ModalInput from 'components/modals/ModalInput';
import Notification from 'components/modals/Notification';
import AddBtn from 'styles/Button/AddBtn';
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
      <TaskListHeader>
        <Title title='Tasks' desc='오늘의 일정' />
        <SortIcon
          title='오름차순 정렬'
          onClick={() => setIsSortAscending((prev) => !prev)}
        >
          <TbArrowsSort fontSize={'1.6rem'} />
        </SortIcon>
      </TaskListHeader>
      <AddBtn />
      {taskList.length ? (
        <TaskItemList>
          {renderTaskList.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              text={task.text}
              shape={task.shape}
              importance={task.importance}
              importanceDesc={task.importanceDesc}
              done={task.done}
              date={task.date}
            />
          ))}
        </TaskItemList>
      ) : (
        <MessagWrapper>
          <BlankMessage>{'오늘의 일정을 추가해 보세요'}</BlankMessage>
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

const MessagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 0 2rem;
`;

const BlankMessage = styled.p`
  color: ${({ theme }) => theme.commonColors.gray};
  font-size: 1.2rem;
  margin-top: 2rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const TaskItemList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
`;

const TaskListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 1rem;
`;

const SortIcon = styled.div`
  cursor: pointer;

  &:hover,
  :active {
    color: ${({ theme }) => theme.colors.important};
    transition: color 0.2s ease-in-out;
  }
`;
