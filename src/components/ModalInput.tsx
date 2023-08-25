import React, { useState, useCallback, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from 'store/hooks';
import { addTodo } from 'store/todoListSlice';

import StyledBtn from 'styles/StyledBtn';
import LogoFigures from 'components/LogoFigures';
import SelectMenu from 'components/SelectMenu';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface TodoItem {
  id: string;
  date: string;
  text: string;
  figure: string;
  done: boolean;
}

const ModalInput = () => {
  const [text, setText] = useState<string>('');
  const [figure, setFigure] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();
  const today = useMemo(() => new Date(), []);

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = event.target.value;
      setText(text);
    },
    []
  );

  const onSubmitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!text || !figure) {
        alert('텍스트와 도형을 채워주세요!');
        textareaRef.current?.focus();
        return;
      }

      const newTodoItem: TodoItem = {
        id: uuidv4(),
        date: today.toLocaleDateString(),
        text,
        figure,
        done: false,
      };

      dispatch(addTodo(newTodoItem));
      setText('');
      setFigure('');
    },
    [dispatch, figure, text, today]
  );

  const getFigureHandler = useCallback((figureName: string) => {
    setFigure(figureName);
  }, []);

  const onToggleHandler = useCallback(() => {
    setToggle((preve) => !preve);
  }, []);

  return (
    <ModalInputWrapper>
      <ModalInputHeader>
        <h1>{'To-do'}</h1>
        <p>{today.toLocaleDateString()}</p>
      </ModalInputHeader>

      <ModalInputLabel htmlFor='todoTextInput'>{'Todo Input'}</ModalInputLabel>

      <ModalInputForm id='todoTextInput' onSubmit={onSubmitHandler}>
        <ModalTextarea
          value={text}
          onChange={onChangeHandler}
          ref={textareaRef}
        />

        <SelectMenu
          isToggle={toggle}
          getToggle={onToggleHandler}
          getFigure={getFigureHandler}
        />

        <ButtonWrapper>
          <SelectToggleWrapper onClick={onToggleHandler}>
            <LogoFigures figure={figure} />
            <div>{toggle ? <FaAngleDown /> : <FaAngleUp />}</div>
          </SelectToggleWrapper>
          <SubmitBtn>{'등록'}</SubmitBtn>
        </ButtonWrapper>
      </ModalInputForm>
    </ModalInputWrapper>
  );
};

export default React.memo(ModalInput);

const ModalInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background-color: #fff;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
  border-radius: 1rem;

  padding: 1rem;
`;

const ModalInputHeader = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.commonColors.gray};
`;

const ModalInputLabel = styled.label`
  visibility: hidden;
`;

const ModalInputForm = styled.form`
  width: 100%;
  height: 100%;
`;

const ModalTextarea = styled.textarea`
  width: 100%;
  height: 50vh;

  font-family: 'Pretendard';
  font-size: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};
`;

const SelectToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 6rem;
`;

const SubmitBtn = styled(StyledBtn)`
  font-size: 1rem;
`;
