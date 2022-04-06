import { useState } from 'react';
import styled, { css } from 'styled-components';

import SelectBox from './SelectBox';

const Backdrop = styled.div`
  ${(props) => {
    return css`
      display: ${props.toggle ? 'block' : 'none'};
    `;
  }}

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  background-color: rgba(177, 177, 177, 0.8);
`;

const ModalInputWapper = styled.div`
  ${(props) => {
    return css`
      display: ${props.toggle ? 'block' : 'none'};
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

const ModalInput = ({ toggle, onToggle, onAdd }) => {
  const [text, setText] = useState('');
  const [figure, setFigure] = useState('');

  const today = new Date();

  const inputToggleHandler = () => {
    onToggle(false);
  };

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTodoItem = {
      id: 1,
      date: today.toLocaleDateString(),
      text: text,
      checked: false,
      figure: figure,
      done: false,
    };

    console.log(newTodoItem);
    // onAdd(newTodoItem);
  };

  const getFigureHandler = (figure) => {
    if (figure.includes('circle')) {
      setFigure('circle');
    } else if (figure.includes('triangle')) {
      setFigure('triangle');
    } else if (figure.includes('square')) {
      setFigure('square');
    }
  };

  return (
    <>
      <Backdrop toggle={toggle} onClick={inputToggleHandler} />
      <ModalInputWapper toggle={toggle}>
        <ModalInputTextBox>
          <h3>To-do</h3>
          <p>{today.toLocaleDateString()}</p>
        </ModalInputTextBox>

        <ModalInputForm onSubmit={onSubmitHandler}>
          <ModalInputBox onChange={onChangeHandler} />
          <ButtonWrapper>
            <SelectBox modalToggle={toggle} getFigure={getFigureHandler} />
            <ModalInputButton>+</ModalInputButton>
          </ButtonWrapper>
        </ModalInputForm>
      </ModalInputWapper>
    </>
  );
};

export default ModalInput;
