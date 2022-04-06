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

const DUMMY_DATA = [
  {
    id: 1,
    date: '2022.04.05',
    text: '힛츄윗댓투두투두',
    figure: 'circle',
    checked: false,
  },
  {
    id: 2,
    date: '2022.04.05',
    text: '두 번째 투두',
    figure: 'triangle',
    checked: false,
  },
  {
    id: 3,
    date: '2022.04.05',
    text: '세 번째 투두',
    figure: 'square',
    checked: true,
  },
];

const dataLength = DUMMY_DATA.length;

const AddButton = ({ addTodo }) => {
  const [toggle, setToggle] = useState(false);

  const onToggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <FormBox>
      <TodoMessage>총 {dataLength}개의 할 일이 있습니다.</TodoMessage>
      <AddButtonBox onClick={onToggleHandler}>새로운 일 +</AddButtonBox>
      <ModalInput toggle={toggle} onToggle={onToggleHandler} onAdd={addTodo} />
    </FormBox>
  );
};

export default AddButton;
