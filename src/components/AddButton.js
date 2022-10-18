import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import FlexWrapper from '../styles/FlexWrapper';
import StyledButton from '../styles/StyledButton';
import Modal from '../layout/Modal';
import ModalInput from './ModalInput';

const TodoMessage = styled.div`
  font-size: 18px;
  padding: 20px;
  letter-spacing: -0.02em;
`;

const AddButtonBox = styled(StyledButton)`
  width: 90%;
  font-size: 24px;
  letter-spacing: -0.04em;
  padding: 20px;
  margin-bottom: 20px;
  background: #fff;
  font-weight: 400;
  border-radius: 40px;
`;

const AddButton = () => {
  const todoList = useSelector((state) => state.todoList.value);
  const [isOpen, setIsOpen] = useState(false);
  const restTodo = todoList.filter((todo) => todo.done === false);

  const handleModalOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <TodoMessage>총 {restTodo.length}개의 할 일이 있습니다.</TodoMessage>
      <FlexWrapper>
        <AddButtonBox onClick={handleModalOpen}>새로운 일 +</AddButtonBox>
        <Modal isOpen={isOpen} onClose={handleModalClose}>
          <ModalInput />
        </Modal>
      </FlexWrapper>
    </>
  );
};

export default AddButton;
