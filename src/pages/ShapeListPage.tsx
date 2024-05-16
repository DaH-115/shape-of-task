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
    <Container>
      <ShapeListHeader>
        <Title title='My Shapes' desc='완료된 일' />
      </ShapeListHeader>
      {!taskList.length ? (
        <MessagWrapper>
          <BlankMessage>{'오늘의 형태를 만들어 보세요'}</BlankMessage>
        </MessagWrapper>
      ) : (
        <ShapeListConatiner>
          <ShapeListWrapper>
            <ShapeList ref={taskListRef}>
              {taskList.length &&
                taskList.map((task) => (
                  <ShapeItem
                    key={task.id}
                    shape={task.shape}
                    isDone={task.done}
                  />
                ))}
            </ShapeList>
          </ShapeListWrapper>

          <BtnSave taskListRef={taskListRef} isDisabled={isDone} />
        </ShapeListConatiner>
      )}
    </Container>
  );
};

export default React.memo(ShapeListPage);

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  max-width: 20rem;
`;

const MessagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: 0 2rem;
`;

const BlankMessage = styled.p`
  color: ${({ theme }) => theme.commonColors.gray};
  font-size: 1.2rem;
  margin-top: 2rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 1rem;
  }
`;

const ShapeListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 1rem;
`;

const ShapeListConatiner = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  ${({ theme }) => theme.device.tablet} {
    padding: 0 0 0 1rem;
  }
`;

const ShapeListWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.commonColors.gray};
  border-radius: 1rem;

  margin-bottom: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
`;

const ShapeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
