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
        title='Save Image'
        aria-label={
          isDisabled
            ? 'No completed tasks to save'
            : isLoading
            ? 'Saving image'
            : 'Save task list as image'
        }
      >
        {isLoading ? 'Saving...' : 'Save Image'}
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
  margin-top: 1rem;
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
    color: ${({ $isDisabled, theme }) =>
      $isDisabled ? theme.commonColors.light_gray : '#fff'};
  }

  svg {
    color: ${({ $isDisabled, theme }) =>
      $isDisabled ? theme.commonColors.light_gray : '#fff'};
  }

  /* 활성화 상태일 때만 호버 효과 적용 */
  ${({ $isDisabled, theme }) =>
    !$isDisabled &&
    `
    &:hover,
    &:active {
      background-color: #fff;
      transition: ${BUTTON_STYLES.transition};

      button {
        color: ${theme.commonColors.black};
        transition: ${BUTTON_STYLES.transition};
      }

      svg {
        color: ${theme.colors.important};
        transition: ${BUTTON_STYLES.transition};
      }
    }
  `}
`;
