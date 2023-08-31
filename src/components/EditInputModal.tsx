import React, {
  useCallback,
  useMemo,
  useState,
  useRef,
  useEffect,
} from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { modalIsClose } from 'store/modalSlice';
import { updateTodo } from 'store/todoListSlice';
import { styled } from 'styled-components';
import StyledBtn from 'styles/StyledBtn';

import Modal from 'layout/Modal';
import SelectMenu from 'components/SelectMenu';
import LogoFigures from 'components/LogoFigures';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface EditTodoItem {
  id: string;
  date: string;
  text: string;
  figure: string;
}

const EditInputModal = () => {
  const dispatch = useAppDispatch();
  const isEditState = useAppSelector((state) => state.modal.editState);
  const isEditTodo = useAppSelector((state) => state.todoList.editTodo);

  const [editTodoId, setEditTodoId] = useState<string>('');
  const [editText, setEditText] = useState<string>('');
  const [editFigure, setEditFigure] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const today = useMemo(() => new Date(), []);

  useEffect(() => {
    if (isEditTodo) {
      setEditTodoId(isEditTodo[0].id);
      setEditText(isEditTodo[0].text);
      setEditFigure(isEditTodo[0].figure);
    }
  }, [isEditTodo]);

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
        id: editTodoId,
        date: today.toLocaleDateString(),
        text: editText,
        figure: editFigure,
      };

      dispatch(updateTodo(editTodoItem));
      dispatch(modalIsClose());
    },
    [dispatch, editTodoId, editText, editFigure, today]
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
  padding-bottom: 0;
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
