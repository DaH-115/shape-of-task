import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  ${({ theme }) => theme.mixins.hideScrollbar}
`;

export const TaskListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 1rem;
`;

export const SortButton = styled.button<{ $isActived: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.9rem;
  height: 1.9rem;
  border-radius: 1rem;
  color: ${({ theme, $isActived }) =>
    $isActived ? theme.colors.important : theme.commonColors.gray};

  font-size: 1.2rem;

  &:hover,
  :active {
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.important};
    transition: color 0.2s ease-in-out;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BlankMessage = styled.p`
  color: ${({ theme }) => theme.commonColors.gray};
  font-size: 1.2rem;
  margin-top: 2rem;
`;

export const TasksHeaderBtns = styled.div`
  display: flex;
  align-items: center;
`;
