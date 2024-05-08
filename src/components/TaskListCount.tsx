import React from 'react';
import styled from 'styled-components';
import {
  StyledCircle,
  StyledSquare,
  StyledTriangle,
} from 'components/figures/ShapeStyles';

const TaskListCount = () => {
  return (
    <Container>
      <TaskListWrapper>
        <ShapeStylesWrapper>
          <StyledTriangle $shapeName={'any'} />
        </ShapeStylesWrapper>
        <p>{'중요해요'}</p>
        <CountNumber>{'1'}</CountNumber>
      </TaskListWrapper>
      <TaskListWrapper>
        <ShapeStylesWrapper>
          <StyledSquare $shapeName={'any'} />
        </ShapeStylesWrapper>
        <p>{'기억해 두세요'}</p>
        <CountNumber>{'2'}</CountNumber>
      </TaskListWrapper>
      <TaskListWrapper>
        <ShapeStylesWrapper>
          <StyledCircle $shapeName={'any'} />
        </ShapeStylesWrapper>
        <p>{'언제든지 해요'}</p>
        <CountNumber>{'3'}</CountNumber>
      </TaskListWrapper>
    </Container>
  );
};

export default TaskListCount;

const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin: 3rem 0;

  ${({ theme }) => theme.device.tablet} {
    margin: 1rem 0;
  }
`;

const TaskListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;

  p {
    font-size: 1.2rem;
    margin-right: auto;
    padding-left: 1rem;
  }

  ${({ theme }) => theme.device.tablet} {
    p {
      font-size: 1rem;
      margin-right: inherit;
      padding-left: 0;
    }
  }
`;

const ShapeStylesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;

  ${({ theme }) => theme.device.tablet} {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const CountNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  padding-right: 0.1rem;

  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.important};

  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 50%;

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.8rem;
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
`;
