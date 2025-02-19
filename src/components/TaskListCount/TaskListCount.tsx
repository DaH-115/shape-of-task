import { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { useAppSelector } from 'store/hooks';
import { TaskTypes } from 'store/taskListSlice';
import TaskListCountItem from 'components/TaskListCount/TaskListCountItem';

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

  return (
    <Container>
      <TaskListCountItem
        count={triangleValue}
        priority={'중요해요'}
        shape={'triangle'}
      />
      <TaskListCountItem
        count={squareValue}
        priority={'기억해 두세요'}
        shape={'square'}
      />
      <TaskListCountItem
        count={circleValue}
        priority={'언제든지 해요'}
        shape={'circle'}
      />
    </Container>
  );
};

export default TaskListCount;

const Container = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;

  ${({ theme }) => theme.device.tablet} {
    padding-top: 0;
  }
`;
