import React, { memo } from 'react';
import { useAppSelector } from 'store/hooks';
import {
  BlankMessage,
  Container,
  ShapeList,
  ShapeListConatiner,
  ShapeListHeader,
  ShapeListWrapper,
} from 'pages/ShapeListPage/ShapeListPage.styles';
import ShapeListItem from 'pages/ShapeListPage/ShapeListItem';
import SaveBtn from 'components/Button/SaveBtn';
import Title from 'styles/TitleComponent';

const ShapeListPage = () => {
  const taskListRef = React.useRef<HTMLUListElement>(null);
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const doneList = taskList.filter((task) => task.done === true);
  const isDone = doneList.length > 0 ? false : true;

  return (
    <Container>
      <ShapeListHeader>
        <Title title='My Shapes' desc='완료된 일' />
      </ShapeListHeader>
      <ShapeListConatiner>
        <ShapeListWrapper>
          {doneList.length > 0 ? (
            <ShapeList>
              {doneList.map((task) => (
                <ShapeListItem key={task.id} shape={task.shape} />
              ))}
            </ShapeList>
          ) : (
            <BlankMessage>오늘의 형태를 만들어 보세요</BlankMessage>
          )}
        </ShapeListWrapper>
        <SaveBtn taskListRef={taskListRef} isDisabled={isDone} />
      </ShapeListConatiner>
    </Container>
  );
};

export default memo(ShapeListPage);
