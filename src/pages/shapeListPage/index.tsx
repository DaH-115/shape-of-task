import React, { useMemo, useRef } from 'react';
import { useAppSelector } from 'store/hooks';
import {
  Container,
  Wrapper,
  ShapeList,
  ShapeListHeader,
  ShapeListContainer,
  SaveBtnWrapper,
} from 'pages/shapeListPage/index.styles';
import ShapeListItem from 'pages/shapeListPage/ShapeListItem';
import SaveBtn from 'components/buttons/SaveBtn';
import Title from 'components/TitleComponent';
import { EmptyState } from 'components';

const ShapeListPage = () => {
  const taskListRef = useRef<HTMLUListElement>(null);
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const completedTakList = useMemo(
    () => taskList.filter((task) => task.done === true),
    [taskList]
  );
  const isDisabled = completedTakList.length === 0;

  return (
    <Container>
      <Wrapper>
        <ShapeListHeader>
          <Title title='My Shapes' desc='완료된 일' />
        </ShapeListHeader>
        <ShapeListContainer>
          {completedTakList.length > 0 ? (
            <ShapeList ref={taskListRef}>
              {completedTakList.map((task) => (
                <ShapeListItem key={task.id} shape={task.shape} />
              ))}
            </ShapeList>
          ) : (
            <EmptyState message='오늘의 형태를 만들어 보세요' />
          )}
        </ShapeListContainer>
        <SaveBtnWrapper>
          <SaveBtn taskListRef={taskListRef} isDisabled={isDisabled} />
        </SaveBtnWrapper>
      </Wrapper>
    </Container>
  );
};

export default ShapeListPage;
