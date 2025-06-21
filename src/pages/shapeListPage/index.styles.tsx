import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100vh; /* 전체 뷰포트 높이를 초과하지 않도록 제한 */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 0; /* flexbox에서 overflow 처리를 위해 필요 */
  overflow: hidden; /* 컨테이너 자체는 스크롤 없이 */
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
  min-height: 0; /* flexbox에서 overflow 처리를 위해 필요 */
  overflow: hidden; /* 자식 요소가 넘치지 않도록 */

  ${({ theme }) => theme.device.md} {
    box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
    padding: 1rem;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
`;

export const BlankMessage = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: ${({ theme }) => theme.commonColors.gray};
`;

export const ShapeListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.75rem; /* 하단 마진을 줄여서 더 컴팩트하게 */
  flex-shrink: 0;

  ${({ theme }) => theme.device.md} {
    margin-bottom: 1rem; /* 데스크톱에서는 기존 여백 유지 */
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
    max-height: 60vh;
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
  padding: 0.75rem 0; /* 상하 패딩을 줄여서 더 컴팩트하게 */
  border-top: 1px solid ${({ theme }) => theme.commonColors.light_gray};
  flex-shrink: 0;

  ${({ theme }) => theme.device.md} {
    padding: 1rem 0; /* 데스크톱에서는 조금 더 여유 있게 */
  }
`;
