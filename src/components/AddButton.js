import { useState } from 'react';
import styled, { css } from 'styled-components';
import ModalInput from './ModalInput';

const FormBox = styled.div`
  width: 100%;
`;

const TodoMessage = styled.div`
  width: 100%;
  font-size: 18px;
  padding: 20px;
  letter-spacing: -0.02em;
  box-sizing: border-box;
`;

const AddButtonBox = styled.button`
  ${({ theme }) => {
    return css`
      width: 100%;
      font-size: 24px;
      letter-spacing: -0.04em;
      padding: 20px 0 30px 0;
      background: #fff;

      &:hover {
        color: ${theme.colors.orange};
      }

      &:active {
        color: #fff;
        background-color: ${theme.colors.orange};
      }
    `;
  }}
`;

const AddButton = ({ todoList, onAddTodo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <FormBox>
      <TodoMessage>총 {todoList.length}개의 할 일이 있습니다.</TodoMessage>
      <AddButtonBox onClick={handleModalOpen}>새로운 일 +</AddButtonBox>
      <ModalInput
        visible={isOpen}
        onAddTodo={onAddTodo}
        onClose={handleModalClose}
      />
    </FormBox>
  );
};

export default AddButton;
