import styled from "styled-components";

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

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const PriorityText = styled.p`
  margin-right: auto;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.commonColors.black};
`;

export const CountNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
