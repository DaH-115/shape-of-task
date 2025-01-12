import { memo, RefObject, useCallback, useState } from 'react';
import styled from 'styled-components';
import { errorAlertIsOpen } from 'store/modalSlice';
import { GiSaveArrow } from 'react-icons/gi';
import { useAppDispatch } from 'store/hooks';
import captureImages from 'utils/captureImages';
import saveAs from 'file-saver';

interface BtnSaveProps {
  taskListRef: RefObject<HTMLUListElement>;
  isDisabled: boolean;
}

const SaveBtn = ({ taskListRef, isDisabled }: BtnSaveProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const captureImagesHandler = useCallback(async () => {
    if (!taskListRef.current) {
      dispatch(
        errorAlertIsOpen('작업 목록이 없어 이미지를 저장할 수 없습니다.')
      );
      return;
    }
    setIsLoading(true);
    try {
      const { paddedCanvas, fileName } = await captureImages(taskListRef);

      await new Promise<void>((resolve, reject) => {
        paddedCanvas.toBlob((blob) => {
          if (blob) {
            saveAs(blob, fileName);
            resolve();
          } else {
            reject(dispatch(errorAlertIsOpen('이미지 저장에 실패했습니다.')));
          }
        });
      });
    } catch (error) {
      dispatch(errorAlertIsOpen('이미지 저장에 실패했습니다.'));
    } finally {
      setIsLoading(false);
    }
  }, [taskListRef, dispatch]);

  return (
    <ButtonWrapper
      onClick={captureImagesHandler}
      $isDisabled={isDisabled || isLoading}
    >
      <button
        type='button'
        disabled={isDisabled || isLoading}
        title='이미지 저장'
        aria-label={
          isDisabled
            ? '완료된 작업이 없어 저장할 수 없습니다'
            : isLoading
            ? '이미지 저장 중'
            : '작업 목록을 이미지로 저장'
        }
      >
        {isLoading ? '저장 중' : '이미지 저장'}
      </button>
      <GiSaveArrow aria-hidden />
    </ButtonWrapper>
  );
};

export default memo(SaveBtn);

const ButtonWrapper = styled.div<{
  $isDisabled: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0.5rem 1rem;

  background-color: ${({ theme, $isDisabled }) =>
    $isDisabled ? theme.commonColors.gray : theme.colors.important};
  border: 0.1rem solid
    ${({ theme, $isDisabled }) =>
      $isDisabled ? theme.commonColors.gray : theme.colors.important};
  border-radius: 1rem;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.6 : 1)};
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};

  button {
    font-size: 0.8rem;
    color: ${({ $isDisabled }) => ($isDisabled ? '#666' : '#fff')};
  }

  svg {
    color: ${({ $isDisabled }) => ($isDisabled ? '#666' : '#fff')};
  }

  &:hover,
  :active {
    background-color: ${({ $isDisabled }) => ($isDisabled ? '' : '#fff')};
    transition: ${({ $isDisabled }) =>
      $isDisabled ? '' : 'background-color 0.2s ease-in-out'};

    button {
      color: ${({ theme, $isDisabled }) =>
        $isDisabled ? '#666' : theme.commonColors.black};
      transition: ${({ $isDisabled }) =>
        $isDisabled ? '' : 'color 0.2s ease-in-out'};
    }

    svg {
      color: ${({ theme, $isDisabled }) =>
        $isDisabled ? '#666' : theme.colors.important};
      transition: ${({ $isDisabled }) =>
        $isDisabled ? '' : 'color 0.2s ease-in-out'};
    }
  }
`;
