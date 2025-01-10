import {
  CountNumber,
  PriorityText,
  ShapesWrapper,
  TaskItemWrapper,
} from 'components/TaskListCount/TaskListCountItem.styles';
import SingleShapes, { ShapeName } from 'components/figures/SingleShapes';

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
        <SingleShapes shapeName={shape} isCountTask={!!count} />
      </ShapesWrapper>
      <PriorityText>{priority}</PriorityText>
      <CountNumber>{count}</CountNumber>
    </TaskItemWrapper>
  );
};

export default TaskListCountItem;
