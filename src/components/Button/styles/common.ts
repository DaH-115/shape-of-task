import styled from 'styled-components';
import { BUTTON_STYLES } from './constants';

// 버튼 컨테이너 공통 스타일
export const ButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

// 아이콘이 있는 버튼의 공통 래퍼
export const IconButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: ${BUTTON_STYLES.border} #fff;
  border-radius: ${BUTTON_STYLES.borderRadius};
  padding: ${BUTTON_STYLES.padding};
  cursor: pointer;

  &:hover,
  &:active {
    border-color: ${({ theme }) => theme.colors.important};
    transition: ${BUTTON_STYLES.transition};
  }

  button {
    color: ${({ theme }) => theme.commonColors.black};
    font-size: 1rem;
  }

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.commonColors.gray};
    margin-right: 0.3rem;
  }
`;
