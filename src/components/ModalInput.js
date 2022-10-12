import { useState, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoListSlice';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import SelectBox from './SelectBox';

const ModalInputTextBox = styled.div`
  position: absolute;
  display: flex;
  padding: 20px 15px 10px 20px;
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

const ModalInputForm = styled.form`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 50px;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);
`;

const ModalInputBox = styled.textarea`
  font-family: 'Pretendard';
  width: 100%;
  height: 430px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const ModalInputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  font-size: 48px;
  border-radius: 50%;

  &:hover {
    background: ${({ theme }) => theme.colors.light_grey};
  }

  &:active {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const ModalInput = () => {
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

  const memoSelectBox = useMemo(() => {
    return <SelectBox getFigure={getFigureHandler} />;
  }, [getFigureHandler]);

  return (
    <>
      <ModalInputTextBox>
        <h3>To-do</h3>
        <p>{today.toLocaleDateString()}</p>
      </ModalInputTextBox>
      <ModalInputForm onSubmit={onSubmitHandler}>
        <ModalInputBox value={text} onChange={onChangeHandler} />
        <ButtonWrapper>
          {memoSelectBox}
          <ModalInputButton>+</ModalInputButton>
        </ButtonWrapper>
      </ModalInputForm>
    </>
  );
};

export default ModalInput;
