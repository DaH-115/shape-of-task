import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
`;

export const WrapperOuter = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.elevated};
  overflow: visible;
`;

export const WrapperInner = styled.div`
  width: 100%;
  flex: 1;
  min-height: 0;
  background-color: ${({ theme }) => theme.commonColors.surface};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const TaskListHeader = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  margin-bottom: 1rem;
  flex-shrink: 0;
`;

/** 프로그레스바 영역 */
export const HeaderProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const TaskProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 1rem;
  width: 100%;
  min-width: 0;
`;

export const ProgressBarTrack = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
  border-radius: 1rem;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${({ $percentage }) => $percentage}%;
  background-color: ${({ theme }) => theme.colors.priority1};
  border-radius: 1rem;
  transition: width 0.3s ease-in-out;
`;

export const TaskProgressText = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.commonColors.medium_gray};
`;

export const SortButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.priority1 : theme.commonColors.gray};
  font-size: 1.2rem;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.commonColors.surface};
    color: ${({ theme }) => theme.colors.priority1};
    transition: color 0.2s ease-in-out;
  }
`;

export const TasksHeaderBtns = styled.div`
  display: flex;
  align-items: center;
`;

export const AddButtonWrapper = styled.div`
  padding: 1rem;
`;

export const TaskListContainer = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`;
