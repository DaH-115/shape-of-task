import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 0; /* flexbox에서 overflow 처리를 위해 필요 */
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 0; /* flexbox에서 overflow 처리를 위해 필요 */
  overflow: hidden; /* 자식 요소가 넘치지 않도록 */

  ${({ theme }) => theme.device.md} {
    padding: 1rem;
    box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
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
  width: 1.9rem;
  height: 1.9rem;
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

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const AddBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  flex-shrink: 0;
`;

export const TaskListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  min-height: 15rem;
  max-height: 60vh; /* 모바일에서 조금 더 여유있게 */

  /* 모바일에서는 스크롤 인디케이터 표시 */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }

  /* 매우 작은 화면에서는 더 제한적으로 */
  @media (max-height: 600px) {
    max-height: 45vh;
  }

  /* 데스크톱에서는 스크롤바 숨기고 더 넉넉하게 */
  ${({ theme }) => theme.device.md} {
    padding: 0 0 1rem;
    min-height: 20rem;
    max-height: 60vh;

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
