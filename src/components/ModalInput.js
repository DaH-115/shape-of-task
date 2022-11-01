import { useState, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoListSlice';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import SelectBox from './SelectBox';

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
  padding: 60px 30px 14px 30px;
  box-sizing: border-box;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
`;

const ModalInputBox = styled.textarea`
  font-family: 'Pretendard';
  width: 100%;
  height: 430px;
  font-size: 20px;
  border-top: 2px solid ${({ theme }) => theme.colors.light_grey};
  padding-top: 20px;
`;

const ModalInput = ({ isOpen }) => {
  const [text, setText] = useState('');
  const [figure, setFigure] = useState('');
  const dispach = useDispatch();
  const textareaRef = useRef();
  const today = new Date();

  const onChangeHandler = (event) => {
    const text = event.target.value;
    setText(text);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!text || !figure) {
      alert('텍스트와 도형을 채워주세요!');
      textareaRef.current.focus();
      return;
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
        <ModalInputBox
          value={text}
          onChange={onChangeHandler}
          ref={textareaRef}
        />
        <SelectBox
          getFigure={getFigureHandler}
          figurecolor={figure}
          isOpen={isOpen}
        />
      </ModalInputForm>
    </>
  );
};

export default ModalInput;
