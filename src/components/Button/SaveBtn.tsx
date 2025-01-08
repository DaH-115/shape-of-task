import React, { RefObject } from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { useDispatch } from 'react-redux';
import { errorAlertIsOpen } from 'store/modalSlice';
import { GiSaveArrow } from 'react-icons/gi';

interface BtnSaveProps {
  taskListRef: RefObject<HTMLUListElement>;
  isDisabled: boolean;
}

const SaveBtn = ({ taskListRef, isDisabled }: BtnSaveProps) => {
  const dispatch = useDispatch();
  const captureModalOpen = React.useCallback(async () => {
    if (!isDisabled) return;

    try {
      const taskList = taskListRef.current!;
      const taskListImg = await html2canvas(taskList, { scale: 4 });

      taskListImg.toBlob((blob) => {
        if (blob) {
          saveAs(blob, 'result.png');
        }
      });
    } catch (error) {
      dispatch(errorAlertIsOpen());
    }
  }, [taskListRef, isDisabled, dispatch]);

  return (
    <ButtonWrapper onClick={captureModalOpen} $isDisabled={isDisabled}>
      <button type='button' disabled={isDisabled}>
        {'이미지 저장'}
      </button>
      <GiSaveArrow aria-hidden />
    </ButtonWrapper>
  );
};

export default SaveBtn;

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
