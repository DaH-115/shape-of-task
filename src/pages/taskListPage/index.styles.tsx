import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  /* 데스크톱에서는 원래 설정으로 복원 */
  ${({ theme }) => theme.device.md} {
    height: 100%;
    padding: 1rem 0;
    min-height: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: visible;

  ${({ theme }) => theme.device.md} {
    height: 100%;
    box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
    overflow: hidden;
  }
`;

export const TaskListHeader = styled.div`
  padding: 0 2rem;

  margin-bottom: 1rem;
  flex-shrink: 0;

  ${({ theme }) => theme.device.md} {
    padding: 1rem;
    padding-bottom: 0;
  }
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
  background-color: ${({ theme }) => theme.colors.important};
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
    $isActive ? theme.colors.important : theme.commonColors.gray};
  font-size: 1.2rem;

  &:hover,
  &:active {
    background-color: #ffffff;
    color: ${({ theme }) => theme.colors.important};
    transition: color 0.2s ease-in-out;
  }
`;

export const TasksHeaderBtns = styled.div`
  display: flex;
  align-items: center;
`;

export const AddButtonWrapper = styled.div`
  padding: 0 2rem;

  ${({ theme }) => theme.device.md} {
    padding: 1rem;
  }
`;

export const TaskListContainer = styled.div`
  flex: none;
  overflow: visible;
  padding-top: 1.2rem;

  /* 데스크톱에서는 기존 스크롤 설정 유지 */
  ${({ theme }) => theme.device.md} {
    flex: 1;
    overflow-y: auto;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
