import React from 'react';
import styled from 'styled-components';
import { TbArrowsSort } from 'react-icons/tb';
import { useAppSelector } from 'store/hooks';
import { Title } from 'styles/Title';
import TaskItem from 'components/TaskItem';
import ModalInput from 'components/modals/ModalInput';
import ConfirmAlert from 'components/modals/ConfirmAlert';
import Notification from 'components/modals/Notification';
import AddBtn from 'styles/Button/AddBtn';

const TaskListPage = () => {
  const [ascending, setAscending] = React.useState(true);
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const addImportance = taskList.map((task) => ({
    ...task,
    importance:
      task.shape === 'circle'
        ? 1
        : task.shape === 'square'
        ? 2
        : task.shape === 'triangle'
        ? 3
        : 0,
  }));

  const sortedTaskList = addImportance.sort((a, b) => {
    if (ascending) {
      return a.importance - b.importance;
    } else {
      return b.importance - a.importance;
    }
  });

  const sortHandler = () => {
    setAscending((prev) => !prev);
  };

  return (
    <Container>
      <TaskListHeader>
        <Title title='Tasks' desc='오늘의 일정' />
        <SortIcon onClick={sortHandler}>
          <TbArrowsSort fontSize={'1.6rem'} />
        </SortIcon>
      </TaskListHeader>
      <AddBtn />
      <TaskItemList>
        {sortedTaskList.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            shape={task.shape}
            done={task.done}
            date={task.date}
          />
        ))}
      </TaskItemList>
      {!taskList.length && (
        <TaskItemList>
          {sortedTaskList.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              text={task.text}
              shape={task.shape}
              done={task.done}
              date={task.date}
            />
          ))}
        </TaskItemList>
      )}
      <ModalInput />
      <ConfirmAlert />
      <Notification />
    </Container>
  );
};

export default React.memo(TaskListPage);

const Container = styled.div`
  width: 100%;
  padding: 1rem;
`;

const TaskItemList = styled.ul`
  width: 100%;
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
  &:hover,
  :active {
    color: ${({ theme }) => theme.colors.important};
    transition: color 0.2s ease-in-out;
  }
`;
