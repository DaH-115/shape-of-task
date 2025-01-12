import styled from 'styled-components';

export const ShapesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
`;

export const TaskItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.4rem;

  &:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

export const CountNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.important};

  background-color: #fff;
  border: 0.05rem solid ${({ theme }) => theme.commonColors.gray};
  border-radius: 50%;
`;

export const PriorityText = styled.p`
  font-size: 0.9rem;
  margin-right: auto;
  margin-left: 0.5rem;
`;
