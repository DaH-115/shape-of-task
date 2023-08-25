import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { modalIsClose, modalIsOpen } from 'store/modalSlice';

import Modal from 'layout/Modal';
import ModalInput from 'components/ModalInput';

const AddBtn = () => {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector((state) => state.modal.modalState);

  const modalOpenHandler = useCallback(() => {
    dispatch(modalIsOpen(true));
  }, [dispatch]);

  const modalCloseHandler = useCallback(() => {
    dispatch(modalIsClose(false));
  }, [dispatch]);

  return (
    <AddBtnWrapper>
      <TodoAddBtn onClick={modalOpenHandler}>{'할 일 추가하기'}</TodoAddBtn>
      <Modal isOpen={modalState} onClose={modalCloseHandler}>
        <ModalInput />
      </Modal>
    </AddBtnWrapper>
  );
};

export default AddBtn;

const AddBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: ${({ theme }) => theme.size.mobile};
  padding: 1rem;
`;

const TodoAddBtn = styled.button`
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.triangle};
  border: 0.1rem solid ${({ theme }) => theme.colors.triangle};
  border-radius: 2rem;
  box-sizing: border-box;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.triangle};
    background-color: #fff;
    transition: all 0.4s ease-in-out;
  }

  ${({ theme }) => theme.device.tablet} {
    font-size: 1.5rem;
  }
`;
