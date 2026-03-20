import { memo } from "react";
import { TaskTypes } from "@/types/task";
import { TaskList as TaskListStyled } from "./TaskList.styles";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: TaskTypes[];
  onUpdateClick: (taskId: string) => void;
  onRemoveClick: (taskId: string) => void;
}

const TaskList = ({ tasks, onUpdateClick, onRemoveClick }: TaskListProps) => {
  return (
    <TaskListStyled>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          processTask={task}
          onUpdateClick={onUpdateClick}
          onRemoveClick={onRemoveClick}
        />
      ))}
    </TaskListStyled>
  );
};

export default memo(TaskList);
