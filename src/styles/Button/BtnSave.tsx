import React from 'react';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import saveAs from 'file-saver';
import { useDispatch } from 'react-redux';
import { alertIsOpen } from 'store/modalSlice';
import { GiSaveArrow } from 'react-icons/gi';

interface BtnSaveProps {
  taskListRef: React.RefObject<HTMLUListElement>;
  isDisabled: boolean;
}

export const BtnSave = ({ taskListRef, isDisabled }: BtnSaveProps) => {
  const dispatch = useDispatch();
  const captureModalOpen = React.useCallback(async () => {
    if (isDisabled) return; // *일을 완료하라고 안내해주는 모달창을 띄워준다.

    try {
      const taskList = taskListRef.current!;
      const taskListImg = await html2canvas(taskList, { scale: 4 });

      taskListImg.toBlob((blob) => {
        if (blob) {
          saveAs(blob, 'result.png');
        }
      });
    } catch (error) {
      dispatch(alertIsOpen());
    }
  }, [dispatch, taskListRef, isDisabled]);

  return (
    <BtnSaveWrapper>
      <ButtonWrapper onClick={captureModalOpen}>
        <button type='button' disabled={isDisabled}>
          {'이미지 저장'}
        </button>
        <GiSaveArrow />
      </ButtonWrapper>
    </BtnSaveWrapper>
  );
};

const BtnSaveWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.device.tablet} {
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.important};
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;

  button {
    color: #fff;
    font-size: 1.2rem;
  }

  svg {
    font-size: 1.4rem;
    color: #fff;
  }

  &:hover,
  :active {
    background-color: #fff;
    transition: background-color 0.2s ease-in-out;

    button {
      color: ${({ theme }) => theme.commonColors.black};
      transition: color 0.2s ease-in-out;
    }

    svg {
      color: ${({ theme }) => theme.colors.important};
      transition: color 0.2s ease-in-out;
    }
  }

  ${({ theme }) => theme.device.tablet} {
    padding: 0.5rem 1rem;

    button {
      font-size: 0.8rem;
    }

    svg {
      font-size: 1rem;
    }
  }
`;
