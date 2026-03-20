import { useCallback, useMemo } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { TaskTypes } from "types/task";
import TaskListCountItem from "components/taskListCount/TaskListCountItem";
import Title from "@/components/TitleComponent";
import { resetPriorityLabels } from "@/store/priorityLabelsSlice";
import { BsArrowCounterclockwise } from "react-icons/bs";

const TaskListCount = () => {
  const dispatch = useAppDispatch();
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const priorityLabels = useAppSelector((state) => state.priorityLabels);
  const hasCustomLabels = Object.keys(priorityLabels).length > 0;
  const countTaskHandler = useCallback(
    (taskList: TaskTypes[], shape: string): number => {
      return taskList.filter(
        (item: TaskTypes) => item.shape === shape && item.done === false,
      ).length;
    },
    [],
  );
  const shapeCounts = useMemo(() => {
    return {
      triangle: countTaskHandler(taskList, "triangle"),
      square: countTaskHandler(taskList, "square"),
      circle: countTaskHandler(taskList, "circle"),
    };
  }, [taskList, countTaskHandler]);
  const {
    triangle: triangleValue,
    square: squareValue,
    circle: circleValue,
  } = shapeCounts;

  const handleResetLabels = useCallback(() => {
    dispatch(resetPriorityLabels());
  }, [dispatch]);

  return (
    <Container>
      <TitleHeader>
        <Title title="모양 정의" desc="나의 모양을 정의해보세요" />
        <ResetButton
          type="button"
          onClick={handleResetLabels}
          disabled={!hasCustomLabels}
          aria-label="모양 라벨 초기화"
          title="모양 라벨 초기화"
        >
          <BsArrowCounterclockwise aria-hidden size={18} />
        </ResetButton>
      </TitleHeader>
      <TaskListCountWrapper>
        <TaskListCountItem
          count={triangleValue}
          priorityNumber={1}
          shape={"triangle"}
        />
        <TaskListCountItem
          count={squareValue}
          priorityNumber={2}
          shape={"square"}
        />
        <TaskListCountItem
          count={circleValue}
          priorityNumber={3}
          shape={"circle"}
        />
      </TaskListCountWrapper>
    </Container>
  );
};

export default TaskListCount;

const Container = styled.div`
  width: 100%;
`;

const TitleHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
`;

const ResetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.commonColors.medium_gray};
  transition: color 0.2s;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.priority1};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const TaskListCountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
