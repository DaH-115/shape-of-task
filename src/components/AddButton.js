import { useState } from 'react';
import styled, { css } from 'styled-components';
import ModalInput from './ModalInput';

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 125px;
`;

const TodoMessage = styled.div`
  width: 50%;
  font-size: 18px;
  padding: 20px;
  letter-spacing: -0.02em;
`;

const AddButtonBox = styled.button`
  ${({ theme }) => {
    return css`
      width: 50%;
      height: 125px;
      font-size: 24px;
      letter-spacing: -0.04em;
      padding: 20px;

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

const AddButton = ({ todoLength }) => {
  const [toggle, setToggle] = useState(false);

  const onToggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <FormBox>
      <TodoMessage>총 12개의 할 일이 있습니다.</TodoMessage>
      <AddButtonBox onClick={onToggleHandler}>새로운 일 +</AddButtonBox>
      <ModalInput toggle={toggle} onToggle={onToggleHandler} />
    </FormBox>
  );
};

export default AddButton;
