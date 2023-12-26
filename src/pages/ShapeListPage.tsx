import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from 'store/hooks';
import ShapeItem from 'components/ShapeItem';
import { BtnSave } from 'styles/Button/BtnSave';
import { Title } from 'styles/Title';

const ShapeListPage = () => {
  const taskListRef = React.useRef<HTMLUListElement>(null);
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const isDone = taskList.filter((task) => task.done === true).length
    ? false
    : true;

  return (
    <ShapeListConatiner>
      <Title title='My Shapes' desc='완료된 일' />

      <ShapeListWrapper>
        <ShapeList ref={taskListRef}>
          {taskList &&
            taskList.map((task) => (
              <ShapeItem key={task.id} shape={task.shape} isDone={task.done} />
            ))}
        </ShapeList>
      </ShapeListWrapper>

      <BtnSaveWrapper>
        <BtnSave taskListRef={taskListRef} isDisabled={isDone} />
      </BtnSaveWrapper>
    </ShapeListConatiner>
  );
};

export default React.memo(ShapeListPage);

const ShapeListConatiner = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
`;

const ShapeListWrapper = styled.div`
  width: 100%;

  padding: 1rem;
  background-color: #fff;
  border: 0.2rem solid ${({ theme }) => theme.colors.important};
  border-radius: 1rem;

  margin-bottom: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
`;

const ShapeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BtnSaveWrapper = styled.div`
  width: 100%;
`;
