import { ReactNode } from 'react';
import {
  CountNumber,
  PriorityText,
  ShapesWrapper,
  TaskItemWrapper,
} from 'components/TaskListCount/TaskListCountItem.styles';

interface TaskListCountItemProps {
  children: ReactNode;
  priority: string;
  count: number;
}

const TaskListCountItem = ({
  children,
  priority,
  count,
}: TaskListCountItemProps) => {
  return (
    <TaskItemWrapper>
      <ShapesWrapper>{children}</ShapesWrapper>
      <PriorityText>{priority}</PriorityText>
      <CountNumber>{count}</CountNumber>
    </TaskItemWrapper>
  );
};

export default TaskListCountItem;
