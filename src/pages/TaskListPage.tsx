import React from 'react';
import styled from 'styled-components';
import { TbArrowsSort } from 'react-icons/tb';
import { useAppSelector } from 'store/hooks';
import { Title } from 'styles/Title';
import TaskItem from 'components/TaskItem';
import AddBtn from 'components/AddBtn';

const TaskListPage = () => {
  const [ascending, setAscending] = React.useState(true);

  const taskList = useAppSelector((state) => state.taskList.taskList);
  const restTask = taskList.filter((task) => !task.done);
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
    <>
      <TaskListHeader>
        <Title title='Tasks' desc='오늘의 일정' />
        <SortIcon onClick={sortHandler}>
          <TbArrowsSort fontSize={'1.8rem'} />
        </SortIcon>
      </TaskListHeader>
      {!taskList.length ? (
        <MessagWrapper>
          <BlankMessage>{'오늘의 형태를 만들어 보세요'}</BlankMessage>
        </MessagWrapper>
      ) : (
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
      {/* TODO: TASK LIST 페이지에서만 보일 것 */}
      <BtnContainer>
        <CountNumber>{restTask.length}</CountNumber>
        <AddBtn />
      </BtnContainer>
    </>
  );
};

export default React.memo(TaskListPage);

const TaskItemList = styled.ul`
  padding: 1rem 1rem 8rem;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
`;

const MessagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 0 2rem;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
`;

const BlankMessage = styled.p`
  color: ${({ theme }) => theme.commonColors.gray};
  font-size: 1.2rem;
  margin-top: 2rem;
`;

const BtnContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1.5rem;
`;

const CountNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 3rem;
  height: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.important};
  background-color: #fff;
  border: 0.15rem solid ${({ theme }) => theme.colors.important};
  border-radius: 50%;

  margin-right: 1rem;
`;

const TaskListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
`;

const SortIcon = styled.div`
  &:hover,
  :active {
    color: ${({ theme }) => theme.colors.important};
    transition: color 0.2s ease-in-out;
  }
`;
