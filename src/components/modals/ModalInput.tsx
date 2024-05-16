import React, {
  useState,
  useCallback,
  useRef,
  useMemo,
  useEffect,
} from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  TaskTypes,
  addTask,
  editingTaskReset,
  updateTask,
} from 'store/taskListSlice';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Title } from 'styles/Title';
import { Btn } from 'styles/Button/Btn';
import Modal from 'components/modals/Modal';
import SelectedShapes from 'components/figures/SelectedShapes';
import SelectMenu from 'components/menus/SelectMenu';

const ModalInput = () => {
  const editingTask = useAppSelector((state) => state.taskList.editingTask);
  const isInputState = useAppSelector((state) => state.modal.inputState);
  const [text, setText] = useState('');
  const [shape, setShape] = useState('');
  const [toggle, setToggle] = useState(false);
  const today = useMemo(() => new Date(), []);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    !isInputState && dispatch(editingTaskReset());
  }, [isInputState, dispatch]);

  useEffect(() => {
    if (editingTask.id) {
      setText(editingTask.text);
      setShape(editingTask.shape);
    } else {
      setText('');
      setShape('');
    }
  }, [isInputState, editingTask, dispatch]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setText(text);
  };

  const addTaskHandler = useCallback(() => {
    const newTask: TaskTypes = {
      id: uuidv4(),
      date: today.toLocaleDateString(),
      text,
      shape,
      done: false,
    };
    dispatch(addTask(newTask));
  }, [dispatch, shape, text, today]);

  const updateTaskHandler = useCallback(() => {
    const updatedTask: TaskTypes = {
      id: editingTask.id,
      date: today.toLocaleDateString(),
      text,
      shape,
      done: false,
    };
    dispatch(updateTask(updatedTask));
  }, [dispatch, editingTask, shape, text, today]);

  const validateHanlder = useCallback(() => {
    if (!text || !shape) {
      alert('텍스트와 도형을 채워주세요');
      textareaRef.current?.focus();
    }
  }, [text, shape]);

  const submitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      validateHanlder();

      if (editingTask.id) {
        updateTaskHandler();
      } else {
        addTaskHandler();
      }

      setText('');
      setShape('');
    },
    [addTaskHandler, updateTaskHandler, validateHanlder, editingTask]
  );

  const onToggleHandler = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const getShapeHandler = useCallback((shapeName: string) => {
    setShape(shapeName);
  }, []);

  return (
    <Modal isOpen={isInputState}>
      <ModalHeader>
        <Title title='Task' desc={today.toLocaleDateString()} />
      </ModalHeader>

      <InputLabel htmlFor='task-input'>{'Task Input'}</InputLabel>
      <InputForm id='task-input' onSubmit={submitHandler}>
        <Textarea
          value={text}
          onChange={onChangeHandler}
          ref={textareaRef}
          placeholder='오늘의 할 일은 무엇인가요?'
        />
        <BtnWrapper>
          <SelectShapesWrapper onClick={onToggleHandler}>
            <ShapeWrapper>
              <SelectedShapes shape={shape} />
            </ShapeWrapper>
            <SelectMenu
              isToggle={!isInputState ? false : toggle}
              getShape={getShapeHandler}
            />
          </SelectShapesWrapper>
          <ToggleIcon>
            {toggle ? (
              <FaAngleDown fontSize={'1.3rem'} />
            ) : (
              <FaAngleUp fontSize={'1.3rem'} />
            )}
          </ToggleIcon>
          <SubmitBtnWrapper>
            <Btn type='submit' text='등록' />
          </SubmitBtnWrapper>
        </BtnWrapper>
      </InputForm>
    </Modal>
  );
};

export default React.memo(ModalInput);

const ModalHeader = styled.div`
  color: ${({ theme }) => theme.commonColors.gray};
`;

const InputLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const InputForm = styled.form`
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 40dvh;
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};
`;

const SelectShapesWrapper = styled.div`
  width: 40%;
`;

const ShapeWrapper = styled.div`
  width: 100%;
`;

const ToggleIcon = styled.div`
  padding: 0.5rem;
  margin-right: 1rem;
`;

const SubmitBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
