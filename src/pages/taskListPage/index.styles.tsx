import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  /* 데스크톱에서는 원래 설정으로 복원 */
  ${({ theme }) => theme.device.md} {
    height: 100%;
    padding-bottom: 1rem;
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
    padding: 1rem;
    box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
    overflow: hidden;
  }
`;

export const TaskListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-shrink: 0;
`;

export const SortButton = styled.button<{ $isActived: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  color: ${({ theme, $isActived }) =>
    $isActived ? theme.colors.important : theme.commonColors.gray};
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

export const AddBtnWrapper = styled.div<{ $isScrolledDown?: boolean }>`
  position: fixed;
  bottom: ${({ $isScrolledDown }) =>
    $isScrolledDown
      ? 'calc(6rem + env(safe-area-inset-bottom))'
      : 'calc(1rem + env(safe-area-inset-bottom))'};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  justify-content: center;
  width: 60%;
  max-width: 11.25rem;
  transition: bottom 0.3s ease-out;

  /* 버튼 자체 크기 */
  button {
    min-height: 2.8rem !important;
    font-size: 0.9rem !important;
    padding: 0.8rem 1.4rem !important;
  }

  /* 아이콘 크기 */
  svg {
    font-size: 1.1rem !important;
    margin-left: 0.4rem !important;
  }

  /* 데스크톱에서는 원래 위치로 복원 */
  ${({ theme }) => theme.device.md} {
    position: static;
    bottom: auto;
    left: auto;
    transform: none;
    z-index: auto;
    flex-shrink: 0;
    width: auto;
    max-width: none;
    transition: none;

    /* 데스크톱에서 버튼 크기 원래대로 */
    button {
      min-height: 2.5rem !important;
      font-size: 1rem !important;
      padding: 0.5rem 1rem !important;
    }

    /* 데스크톱에서 아이콘 크기 원래대로 */
    svg {
      font-size: 1.2rem !important;
      margin-left: 0.3rem !important;
    }
  }
`;

export const TaskListContainer = styled.div`
  flex: none;
  overflow: visible;
  padding-bottom: 2rem; /* 모바일에서 Add Task 버튼 공간 확보 */

  /* 데스크톱에서는 기존 스크롤 설정 유지 */
  ${({ theme }) => theme.device.md} {
    flex: 1;
    overflow-y: auto;
    padding: 0 0 1rem;
    padding-bottom: 1rem;
    min-height: 20rem;
    max-height: 60vh;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
