import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import FlexWrapper from '../styles/FlexWrapper';
import StyledButton from '../styles/StyledButton';
import Modal from '../layout/Modal';
import ModalInput from './ModalInput';
import PortalModal from './PortalModal';
import { modalIsClose, modalIsOpen } from '../store/modalSlice';

const TodoMessage = styled.div`
  font-size: 24px;
  padding: 20px;

  ${({ theme }) => theme.device.tablet} {
    font-size: 24px;
  }
`;

const AddButtonBox = styled(StyledButton)`
  width: 90%;
  font-size: 36px;
  padding: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
  background: #fff;
  font-weight: 400;
  border-radius: 40px;
  border: 3px solid ${({ theme }) => theme.colors.gray};

  ${({ theme }) => theme.device.tablet} {
    font-size: 24px;
  }
`;

const AddButton = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList.value);
  const modalState = useSelector((state) => state.modal.modalState);
  const restTodo = todoList.filter((todo) => todo.done === false);

  const modalOpenHandler = () => {
    dispatch(modalIsOpen(true));
  };

  const modalCloseHandler = useCallback(() => {
    dispatch(modalIsClose(false));
  }, [dispatch]);

  return (
    <>
      <TodoMessage>총 {restTodo.length}개의 할 일이 있습니다.</TodoMessage>
      <FlexWrapper>
        <AddButtonBox onClick={modalOpenHandler}>새로운 일 +</AddButtonBox>
        <PortalModal>
          <Modal isOpen={modalState} onClose={modalCloseHandler}>
            <ModalInput isOpen={modalState} />
          </Modal>
        </PortalModal>
      </FlexWrapper>
    </>
  );
};

export default AddButton;
