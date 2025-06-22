import { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useAppSelector } from 'store/hooks';
import { TaskTypes } from 'types/task';
import TaskListCountItem from 'components/taskListCount/TaskListCountItem';

const TaskListCount = () => {
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const countTaskHandler = useCallback(
    (taskList: TaskTypes[], shape: string): number => {
      return taskList.filter(
        (item: TaskTypes) => item.shape === shape && item.done === false
      ).length;
    },
    []
  );
  const shapeCounts = useMemo(() => {
    return {
      triangle: countTaskHandler(taskList, 'triangle'),
      square: countTaskHandler(taskList, 'square'),
      circle: countTaskHandler(taskList, 'circle'),
    };
  }, [taskList, countTaskHandler]);
  const {
    triangle: triangleValue,
    square: squareValue,
    circle: circleValue,
  } = shapeCounts;

  const totalCount = useMemo(() => {
    return triangleValue + squareValue + circleValue;
  }, [triangleValue, squareValue, circleValue]);

  return (
    <Container>
      <TotalCountMessage>
        {totalCount === 0
          ? 'All tasks completed! 🎉'
          : `${totalCount} task${totalCount > 1 ? 's' : ''} remaining`}
      </TotalCountMessage>
      <TaskListCountItem
        count={triangleValue}
        priority={'Important'}
        shape={'triangle'}
      />
      <TaskListCountItem
        count={squareValue}
        priority={'Remember'}
        shape={'square'}
      />
      <TaskListCountItem
        count={circleValue}
        priority={'Anytime'}
        shape={'circle'}
      />
    </Container>
  );
};

export default TaskListCount;

const Container = styled.div`
  width: 100%;
`;

const TotalCountMessage = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.commonColors.medium_gray};
  margin-bottom: 1rem;

  ${({ theme }) => theme.device.md} {
    font-size: 1rem;
  }
`;
