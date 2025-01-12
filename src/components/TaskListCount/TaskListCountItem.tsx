import {
  CountNumber,
  PriorityText,
  ShapesWrapper,
  TaskItemWrapper,
} from 'components/TaskListCount/TaskListCountItem.styles';
import SingleShapes from 'components/shapes/SingleShapes';
import { memo } from 'react';
import { ShapeName } from 'store/taskListSlice';

interface TaskListCountItemProps {
  priority: string;
  count: number;
  shape: ShapeName;
}

const TaskListCountItem = ({
  priority,
  count,
  shape,
}: TaskListCountItemProps) => {
  return (
    <TaskItemWrapper>
      <ShapesWrapper>
        <SingleShapes shapeName={shape} isCountTask={count > 0} />
      </ShapesWrapper>
      <PriorityText>{priority}</PriorityText>
      <CountNumber>{count}</CountNumber>
    </TaskItemWrapper>
  );
};

export default memo(TaskListCountItem);
