import { memo } from 'react';
import styled from 'styled-components';
import { GiSaveArrow } from 'react-icons/gi';
import { useSaveImage } from 'hooks/useSaveImage';
import { SaveBtnProps } from './types';
import { BUTTON_STYLES } from './styles/constants';

// 이미지 저장 버튼 컴포넌트
const SaveBtn = ({ taskListRef, isDisabled }: SaveBtnProps) => {
  // 커스텀 훅으로 로직 분리
  const { saveImage, isLoading } = useSaveImage();

  // 이미지 저장 핸들러
  const handleSaveImage = () => {
    saveImage(taskListRef);
  };

  const disabled = isDisabled || isLoading;

  return (
    <ButtonWrapper
      onClick={disabled ? undefined : handleSaveImage}
      $isDisabled={disabled}
    >
      <button
        type='button'
        disabled={disabled}
        title='이미지 저장'
        aria-label={
          isDisabled
            ? '완료된 작업이 없어 저장할 수 없습니다'
            : isLoading
            ? '이미지 저장 중'
            : '작업 목록을 이미지로 저장'
        }
      >
        {isLoading ? '저장 중...' : '이미지 저장'}
      </button>
      <GiSaveArrow aria-hidden />
    </ButtonWrapper>
  );
};

export default memo(SaveBtn);

// 저장 버튼 래퍼 스타일 (개선된 버전)
const ButtonWrapper = styled.div<{
  $isDisabled: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${BUTTON_STYLES.padding};
  background-color: ${({ theme, $isDisabled }) =>
    $isDisabled ? theme.commonColors.gray : theme.colors.important};
  border: ${({ theme, $isDisabled }) =>
    `${BUTTON_STYLES.border} ${
      $isDisabled ? theme.commonColors.gray : theme.colors.important
    }`};
  border-radius: 1rem;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.6 : 1)};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};

  button {
    font-size: ${BUTTON_STYLES.fontSize};
    color: ${({ $isDisabled }) => ($isDisabled ? '#666' : '#fff')};
  }

  svg {
    color: ${({ $isDisabled }) => ($isDisabled ? '#666' : '#fff')};
  }

  &:hover,
  &:active {
    background-color: ${({ $isDisabled }) =>
      $isDisabled ? undefined : '#fff'};
    transition: ${({ $isDisabled }) =>
      $isDisabled ? undefined : BUTTON_STYLES.transition};

    button {
      color: ${({ theme, $isDisabled }) =>
        $isDisabled ? '#666' : theme.commonColors.black};
      transition: ${({ $isDisabled }) =>
        $isDisabled ? undefined : BUTTON_STYLES.transition};
    }

    svg {
      color: ${({ theme, $isDisabled }) =>
        $isDisabled ? '#666' : theme.colors.important};
      transition: ${({ $isDisabled }) =>
        $isDisabled ? undefined : BUTTON_STYLES.transition};
    }
  }
`;
