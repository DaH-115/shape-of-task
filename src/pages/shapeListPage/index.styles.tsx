import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 1rem;
  border: none;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: hidden;

  ${({ theme }) => theme.device.md} {
    box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
    padding: 1rem;
  }
`;

export const ShapeListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.75rem;
  flex-shrink: 0;

  ${({ theme }) => theme.device.md} {
    margin-bottom: 1rem;
  }
`;

export const ShapeList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
`;

export const ShapeListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  min-height: 25rem;
  max-height: 75vh;
  padding: 0 1rem;

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

  /* 데스크톱에서는 스크롤바 숨기고 flex로 남은 공간 모두 사용 */
  ${({ theme }) => theme.device.md} {
    padding: 0;
    min-height: 0; /* flex: 1이 제대로 작동하도록 */
    max-height: none; /* 최대 높이 제한 제거 */

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SaveBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.commonColors.light_gray};
  flex-shrink: 0;
  margin-top: 1rem;
`;
