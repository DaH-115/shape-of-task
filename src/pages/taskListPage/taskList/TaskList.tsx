import { memo } from "react";
import { TaskTypes } from "@/types/task";
import { PriorityLabelsState } from "@/store/priorityLabelsStorage";
import { TaskList as TaskListStyled } from "@/pages/taskListPage/taskList/TaskList.styles";
import TaskItem from "@/pages/taskListPage/taskList/TaskItem";

interface TaskListProps {
  tasks: TaskTypes[];
  priorityLabels: PriorityLabelsState;
  onUpdateClick: (taskId: string) => void;
  onRemoveClick: (taskId: string) => void;
}

const TaskList = ({
  tasks,
  priorityLabels,
  onUpdateClick,
  onRemoveClick,
}: TaskListProps) => {
  return (
    <TaskListStyled>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          processTask={task}
          priorityLabels={priorityLabels}
          onUpdateClick={onUpdateClick}
          onRemoveClick={onRemoveClick}
        />
      ))}
    </TaskListStyled>
  );
};

export default memo(TaskList);
