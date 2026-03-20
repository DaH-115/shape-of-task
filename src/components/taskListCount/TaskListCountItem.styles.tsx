import styled from "styled-components";

export const EditInput = styled.input`
  width: 100%;
  max-width: 8rem;
  padding: 0.25rem 0.5rem;
  font-size: inherit;
  border: 1px solid ${({ theme }) => theme.commonColors.gray_border};
  border-radius: 0.5rem;
  outline: none;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin-left: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.commonColors.medium_gray};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.commonColors.black};
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: 0.5rem;
  flex: 1;
  min-width: 0;
`;

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
  color: ${({ theme }) => theme.commonColors.black};
  flex-shrink: 0;
`;

export const CountNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
