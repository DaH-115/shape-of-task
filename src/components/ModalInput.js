import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled, { css, keyframes } from 'styled-components';

import SelectBox from './SelectBox';
import { useEffect } from 'react';

const Backdrop = styled.div`
  ${(props) => {
    return css`
      visibility: ${props.modalToggle ? 'visible' : 'hidden'};
      animation: ${props.modalToggle ? fadeIn : fadeOut} 0.4s ease-in-out;
      transition: visibility 0.4s ease-in-out;
    `;
  }}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(177, 177, 177, 0.8);
`;

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalInputWapper = styled.div`
  ${(props) => {
    return css`
      visibility: ${props.modalToggle ? 'visible' : 'hidden'};
      animation: ${props.modalToggle ? fadeIn : fadeOut} 0.4s ease-in-out;
      transition: visibility 0.4s ease-in-out;
    `;
  }}

  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 500px;
`;

const ModalInputTextBox = styled.div`
  position: absolute;
  display: flex;
  padding: 20px 15px 10px 20px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #a6c6c4;

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
  justify-content: space-around;
`;

const ModalInputButton = styled.button`
  width: 48px;
  height: 48px;
  font-size: 48px;
  margin-left: 30px;
`;

const ModalInput = ({ visible, onAddTodo, onClose }) => {
  const [text, setText] = useState('');
  const [figure, setFigure] = useState('');
  const [animate, setAnimate] = useState(false);
  const today = new Date();

  useEffect(() => {
    let timeout;

    if (!visible) {
      timeout = setTimeout(() => {
        setAnimate(true);
      }, 400);
    }

    setAnimate(false);

    return () => clearTimeout(timeout);
  }, [visible]);

  if (animate && !visible) return null;

  const onChangeHandler = (event) => {
    const text = event.target.value;
    setText(text.replace(/^\s+|\s+$/gm, ''));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!text || !figure) {
      return alert('텍스트와 도형을 채워주세요!');
    }

    const newTodoItem = {
      id: uuidv4(),
      date: today.toLocaleDateString(),
      text,
      checked: false,
      figure,
      done: false,
    };

    onAddTodo(newTodoItem);
    setText('');
    setFigure('');
  };

  const getFigureHandler = (figure) => {
    if (figure.includes('circle')) {
      setFigure('circle');
    } else if (figure.includes('triangle')) {
      setFigure('triangle');
    } else if (figure.includes('square')) {
      setFigure('square');
    }

    return;
  };

  return (
    <>
      <Backdrop modalToggle={visible} onClick={onClose} />
      <ModalInputWapper modalToggle={visible}>
        <ModalInputTextBox>
          <h3>To-do</h3>
          <p>{today.toLocaleDateString()}</p>
        </ModalInputTextBox>

        <ModalInputForm onSubmit={onSubmitHandler}>
          <ModalInputBox value={text} onChange={onChangeHandler} />
          <ButtonWrapper>
            <SelectBox modalToggle={visible} getFigure={getFigureHandler} />
            <ModalInputButton>+</ModalInputButton>
          </ButtonWrapper>
        </ModalInputForm>
      </ModalInputWapper>
    </>
  );
};

export default ModalInput;
