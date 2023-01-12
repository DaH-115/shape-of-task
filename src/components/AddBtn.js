import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { modalIsClose, modalIsOpen } from '../store/modalSlice';

import FlexWrapper from '../styles/FlexWrapper';
import StyledBtn from '../styles/StyledBtn';
import Modal from '../layout/Modal';
import ModalInput from './ModalInput';

const AddBtn = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.value);
  const modalState = useSelector((state) => state.modal.modalState);
  const restTodo = todoList.filter((todo) => todo.done === false);

  const modalOpenHandler = useCallback(() => {
    dispatch(modalIsOpen(true));
  }, [dispatch]);

  const modalCloseHandler = useCallback(() => {
    dispatch(modalIsClose(false));
  }, [dispatch]);

  return (
    <>
      <TodoMessage>
        {restTodo.length
          ? `총 ${restTodo.length}개의 할 일이 있습니다.`
          : '할 일이 없습니다.'}
      </TodoMessage>
      <FlexWrapper>
        <AddBtnBox onClick={modalOpenHandler}>{'새로운 일 +'}</AddBtnBox>

        <Modal isOpen={modalState} onClose={modalCloseHandler}>
          <ModalInput isOpen={modalState} />
        </Modal>
      </FlexWrapper>
    </>
  );
};

export default AddBtn;

const TodoMessage = styled.div`
  font-size: 24px;
  padding: 20px;
`;

const AddBtnBox = styled(StyledBtn)`
  width: 90%;
  font-size: 36px;
  padding: 20px;
  color: ${({ theme }) => theme.commonColors.light_gray};
  background-color: ${({ theme }) => theme.colors.circle};
  border-radius: 40px;
  border: none;
  margin-bottom: 20px;

  &:hover,
  &:active {
    color: #fff;
    border-color: ${({ theme }) => theme.colors.circle};
    transition: color 0.1s ease-in-out;
  }

  ${({ theme }) => theme.device.tablet} {
    font-size: 28px;
  }
`;
