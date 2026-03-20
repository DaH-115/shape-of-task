import { useMemo, useRef } from "react";
import { useAppSelector } from "@/store/hooks";
import {
  Container,
  Wrapper,
  ShapeList,
  ShapeListHeader,
  ShapeListContainer,
  SaveButtonWrapper,
} from "@/pages/shapeListPage/index.styles";
import ShapeListItem from "@/pages/shapeListPage/ShapeListItem";
import SaveBtn from "@/components/buttons/SaveButton";
import Title from "@/components/TitleComponent";
import { EmptyState } from "@/components";

const ShapeListPage = () => {
  const taskListRef = useRef<HTMLUListElement>(null);
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const completedTaskIdsInOrder = useAppSelector(
    (state) => state.taskList.completedTaskIdsInOrder
  );
  const completedTaskList = useMemo(() => {
    const taskMap = new Map(taskList.map((t) => [t.id, t]));
    return completedTaskIdsInOrder
      .map((id) => taskMap.get(id))
      .filter((task): task is NonNullable<typeof task> => task?.done === true);
  }, [taskList, completedTaskIdsInOrder]);
  const isDisabled = completedTaskList.length === 0;

  return (
    <Container>
      <Wrapper>
        <ShapeListHeader>
          <Title title="My Shapes" desc="Completed Tasks" />
        </ShapeListHeader>
        <ShapeListContainer>
          {completedTaskList.length > 0 ? (
            <ShapeList ref={taskListRef}>
              {completedTaskList.map((task) => (
                <ShapeListItem key={task.id} shape={task.shape} />
              ))}
            </ShapeList>
          ) : (
            <EmptyState message="Create some shapes!" />
          )}
        </ShapeListContainer>
        <SaveButtonWrapper>
          <SaveBtn taskListRef={taskListRef} isDisabled={isDisabled} />
        </SaveButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default ShapeListPage;
