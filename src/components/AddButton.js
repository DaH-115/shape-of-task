import { useState } from 'react';
import styled from 'styled-components';
import FlexWrapper from '../layout/FlexWrapper';
import { StyledButton } from './StyledButton';

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

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }

  &:active {
    color: #fff;
  }
`;

const AddButton = ({ todoList, onAddTodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const restTodo = todoList.filter((todo) => todo.done === false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <TodoMessage>총 {restTodo.length}개의 할 일이 있습니다.</TodoMessage>
      <FlexWrapper>
        <AddButtonBox onClick={handleModalOpen}>새로운 일 +</AddButtonBox>
        <ModalInput
          visible={isOpen}
          onAddTodo={onAddTodo}
          onClose={handleModalClose}
        />
      </FlexWrapper>
    </>
  );
};

export default AddButton;
