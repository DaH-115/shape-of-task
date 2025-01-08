import React, { useMemo } from 'react';
import {
  StyledCircle,
  StyledSquare,
  StyledTriangle,
} from 'components/figures/ShapeStyles';
import { useAppSelector } from 'store/hooks';
import { TaskTypes } from 'store/taskListSlice';
import { Container } from 'components/TaskListCount/TaskListCountItem.styles';
import TaskListCountItem from 'components/TaskListCount/TaskListCountItem';

const TaskListCount = () => {
  const taskList = useAppSelector((state) => state.taskList.taskList);

  const countTaskHandler = (taskList: TaskTypes[], shape: string): number => {
    return taskList.filter(
      (item: TaskTypes) => item.shape === shape && item.done === false
    ).length;
  };

  const triangleValue = useMemo(
    () => countTaskHandler(taskList, 'triangle'),
    [taskList]
  );
  const squareValue = useMemo(
    () => countTaskHandler(taskList, 'square'),
    [taskList]
  );
  const circleValue = useMemo(
    () => countTaskHandler(taskList, 'circle'),
    [taskList]
  );

  return (
    <Container>
      <TaskListCountItem count={triangleValue} priority={'중요해요'}>
        <StyledTriangle $shapeName={triangleValue ? 'triangle' : 'any'} />
      </TaskListCountItem>
      <TaskListCountItem count={squareValue} priority={'기억해 두세요'}>
        <StyledSquare $shapeName={squareValue ? 'square' : 'any'} />
      </TaskListCountItem>
      <TaskListCountItem count={circleValue} priority={'언제든지 해요'}>
        <StyledCircle $shapeName={circleValue ? 'circle' : 'any'} />
      </TaskListCountItem>
    </Container>
  );
};

export default TaskListCount;
