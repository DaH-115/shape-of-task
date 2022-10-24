import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoListSlice';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import SelectBox from './SelectBox';
import StyledButton from '../styles/StyledButton';

const ModalInputTextBox = styled.div`
  position: absolute;
  display: flex;
  padding: 40px 0 20px 30px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.grey};

  h3 {
    margin-right: 8px;
  }

  p {
    padding-top: 3px;
  }
`;

const ModalInputLabel = styled.label`
  visibility: hidden;
`;

const ModalInputForm = styled.form`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 50px 30px 10px 30px;
  box-sizing: border-box;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
`;

const ModalInputBox = styled.textarea`
  font-family: 'Pretendard';
  width: 100%;
  height: 430px;
  font-size: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 2px solid ${({ theme }) => theme.colors.light_grey};
`;

const Button = styled(StyledButton)`
  width: 80px;
  height: 40px;
`;

const ModalInput = ({ isOpen }) => {
  const [text, setText] = useState('');
  const [figure, setFigure] = useState('');
  const dispach = useDispatch();
  const today = new Date();

  const onChangeHandler = (event) => {
    const text = event.target.value;
    setText(text);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!text || !figure) {
      return alert('텍스트와 도형을 채워주세요!');
    }

    const newTodoItem = {
      id: uuidv4(),
      date: today.toLocaleDateString(),
      text: text.replace(/^\s+|\s+$/gm, ''),
      checked: false,
      figure,
      done: false,
    };

    dispach(addTodo(newTodoItem));
    setText('');
    setFigure('');
  };

  const getFigureHandler = useCallback((figure) => {
    if (figure.includes('circle')) {
      setFigure('circle');
    } else if (figure.includes('triangle')) {
      setFigure('triangle');
    } else if (figure.includes('square')) {
      setFigure('square');
    }

    return;
  }, []);

  return (
    <>
      <ModalInputTextBox>
        <h3>To-do</h3>
        <p>{today.toLocaleDateString()}</p>
      </ModalInputTextBox>
      <ModalInputLabel htmlFor='todoTextInput'>Todo Input</ModalInputLabel>
      <ModalInputForm id='todoTextInput' onSubmit={onSubmitHandler}>
        <ModalInputBox value={text} onChange={onChangeHandler} />
        <ButtonWrapper>
          <SelectBox getFigure={getFigureHandler} isOpen={isOpen} />
          <Button>등록</Button>
        </ButtonWrapper>
      </ModalInputForm>
    </>
  );
};

export default ModalInput;
