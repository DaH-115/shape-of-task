import React, { memo, useRef } from 'react';
import { useAppSelector } from 'store/hooks';
import {
  BlankMessage,
  Container,
  ShapeList,
  ShapeListHeader,
  ShapeListWrapper,
} from 'pages/ShapeListPage/ShapeListPage.styles';
import ShapeListItem from 'pages/ShapeListPage/ShapeListItem';
import SaveBtn from 'components/Button/SaveBtn';
import Title from 'styles/TitleComponent';

const ShapeListPage = () => {
  const taskListRef = useRef<HTMLUListElement>(null);
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const doneList = taskList.filter((task) => task.done === true);
  const isDisabled = doneList.length === 0;

  return (
    <Container>
      <ShapeListHeader>
        <Title title='My Shapes' desc='완료된 일' />
      </ShapeListHeader>

      <ShapeListWrapper>
        {doneList.length > 0 ? (
          <ShapeList ref={taskListRef}>
            {doneList.map((task) => (
              <ShapeListItem key={task.id} shape={task.shape} />
            ))}
          </ShapeList>
        ) : (
          <BlankMessage>오늘의 형태를 만들어 보세요</BlankMessage>
        )}
      </ShapeListWrapper>
      <SaveBtn taskListRef={taskListRef} isDisabled={isDisabled} />
    </Container>
  );
};

export default memo(ShapeListPage);
