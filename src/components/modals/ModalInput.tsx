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
import { addTask, editingTaskReset, updateTask } from 'store/taskListSlice';
import { modalIsClose, noteAlertIsOpen } from 'store/modalSlice';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Title } from 'styles/Title';
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

  const getImportance = useCallback((shape: string) => {
    const importanceObj: { [key: string]: { number: number; desc: string } } = {
      triangle: { number: 1, desc: '중요해요' },
      square: { number: 2, desc: '기억해 두세요' },
      circle: { number: 3, desc: '언제든지 해요' },
      default: { number: 0, desc: '' },
    };
    return importanceObj[shape] || importanceObj.default;
  }, []);

  const createTask = useCallback(() => {
    const { desc, number } = getImportance(shape);

    return {
      id: editingTask.id || uuidv4(),
      date: today.toLocaleDateString(),
      text,
      shape,
      importance: number,
      importanceDesc: desc,
      done: false,
    };
  }, [editingTask, shape, text, today, getImportance]);

  const addTaskHandler = useCallback(() => {
    const newTask = createTask();
    dispatch(addTask(newTask));
  }, [dispatch, createTask]);

  const updateTaskHandler = useCallback(() => {
    const updatedTask = createTask();
    dispatch(updateTask(updatedTask));
  }, [dispatch, createTask]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setText(text);
  };

  const validateHanlder = useCallback(() => {
    if (!text || !shape) {
      alert('텍스트와 도형을 채워주세요');
      textareaRef.current?.focus();
    } else {
      return true;
    }
  }, [text, shape]);

  const submitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const isValid = validateHanlder();

      if (isValid && editingTask.id) {
        updateTaskHandler();
      } else if (isValid && !editingTask.id) {
        addTaskHandler();
      }

      setText('');
      setShape('');
      dispatch(modalIsClose());
      dispatch(noteAlertIsOpen());
    },
    [dispatch, addTaskHandler, updateTaskHandler, validateHanlder, editingTask]
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
            <button type='submit'>{'등록'}</button>
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
    font-size: 0.9rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.remember};
    border: 0.1rem solid #fff;
    padding: 1rem 0;
    border-radius: 0.9rem;
  }

  :active,
  :hover {
    color: ${({ theme }) => theme.commonColors.black};
    background-color: #fff;
    border: 0.1rem solid ${({ theme }) => theme.colors.remember};
    transition: all 0.2s ease-in-out;
  }
`;
