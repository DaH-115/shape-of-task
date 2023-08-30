import React, { useCallback, useMemo, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { updateTodo } from 'store/todoListSlice';
import { styled } from 'styled-components';
import StyledBtn from 'styles/StyledBtn';

import Modal from 'layout/Modal';
import SelectMenu from 'components/SelectMenu';
import LogoFigures from 'components/LogoFigures';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface EditInputProps {
  contentId: string;
  contentText: string;
  contentFigure: string;
}

interface EditTodoItem {
  id: string;
  date: string;
  text: string;
  figure: string;
}

const EditInputModal = ({
  contentId,
  contentText,
  contentFigure,
}: EditInputProps) => {
  const [editText, setEditText] = useState<string>(contentText);
  const [editFigure, setEditFigure] = useState<string>(contentFigure);
  const [toggle, setToggle] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();
  const isEditState = useAppSelector((state) => state.modal.editState);
  const today = useMemo(() => new Date(), []);

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const text = event.target.value;
      setEditText(text);
    },
    []
  );

  const onSubmitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!editText || !editFigure) {
        alert('텍스트와 도형을 채워주세요!');
        textareaRef.current?.focus();
        return;
      }

      const editTodoItem: EditTodoItem = {
        id: contentId,
        date: today.toLocaleDateString(),
        text: editText,
        figure: editFigure,
      };

      dispatch(updateTodo(editTodoItem));
    },
    [dispatch, contentId, editText, editFigure, today]
  );

  const onToggleHandler = useCallback(() => {
    setToggle((preve) => !preve);
  }, []);

  const getFigureHandler = useCallback((figureName: string) => {
    setEditFigure(figureName);
  }, []);

  return (
    <Modal modalState={isEditState}>
      <ModalInputWrapper>
        <ModalInputHeader>
          <h1>{'To-do'}</h1>
          <p>{today.toLocaleDateString()}</p>
        </ModalInputHeader>

        <ModalInputLabel htmlFor='todoTextInput'>
          {'Todo Input'}
        </ModalInputLabel>

        <ModalInputForm id='todoTextInput' onSubmit={onSubmitHandler}>
          <ModalTextarea
            value={editText}
            onChange={onChangeHandler}
            ref={textareaRef}
          />
          <SelectMenu
            istoggle={toggle}
            getToggle={onToggleHandler}
            getFigure={getFigureHandler}
          />

          <ButtonWrapper>
            <SelectToggleWrapper onClick={onToggleHandler}>
              <LogoFigures figure={editFigure} />
              <div>{toggle ? <FaAngleDown /> : <FaAngleUp />}</div>
            </SelectToggleWrapper>
            <SubmitBtn>{'수정'}</SubmitBtn>
          </ButtonWrapper>
        </ModalInputForm>
      </ModalInputWrapper>
    </Modal>
  );
};

export default React.memo(EditInputModal);

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
