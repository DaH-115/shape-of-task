import {
  useState,
  useCallback,
  useRef,
  useMemo,
  useEffect,
  ChangeEvent,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  addTask,
  editingTaskReset,
  ShapeName,
  updateTask,
} from 'store/taskListSlice';
import { modalIsClose, noteAlertIsOpen } from 'store/modalSlice';
import {
  ModalHeader,
  InputLabel,
  InputForm,
  Textarea,
  BtnWrapper,
  SelectShapesWrapper,
  SubmitBtnWrapper,
  ToggleBtn,
  ErrorMsg,
} from 'components/modals/ModalInput/index.styles';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Title from 'components/TitleComponent';
import Modal from 'components/modals/Modal';
import MultipleShapes from 'components/shapes/MultipleShapes';
import ShapeSelectMenu from 'components/menu/ShapeSelectMenu';
import Btn from 'components/Button/Btn';

const ModalInput = () => {
  const editingTask = useAppSelector((state) => state.taskList.editingTask);
  const isInputState = useAppSelector((state) => state.modal.inputState);
  const [text, setText] = useState('');
  const [shape, setShape] = useState<ShapeName>('circle');
  const [toggle, setToggle] = useState(false);
  const [isErrors, setIsErrors] = useState({
    textError: '',
    shapeError: '',
  });
  const today = useMemo(() => new Date(), []);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isInputState) {
      setToggle(false);
      setText('');
      setShape('circle');
      setIsErrors({ textError: '', shapeError: '' });
      dispatch(editingTaskReset());
    }
  }, [isInputState, dispatch]);

  useEffect(() => {
    if (editingTask.id) {
      setText(editingTask.text);
      setShape(editingTask.shape);
    } else {
      setText('');
      setShape('circle');
    }
  }, [isInputState, editingTask, dispatch]);

  const getPriority = useCallback((shape: ShapeName) => {
    const priorityObj: { [key: string]: { number: number; desc: string } } = {
      triangle: { number: 1, desc: '중요해요' },
      square: { number: 2, desc: '기억해 두세요' },
      circle: { number: 3, desc: '언제든지 해요' },
      default: { number: 0, desc: '' },
    };
    return priorityObj[shape] || priorityObj.default;
  }, []);

  const createTask = useCallback(() => {
    const { desc, number } = getPriority(shape);
    return {
      id: editingTask.id || uuidv4(),
      date: today.toLocaleDateString(),
      text,
      shape,
      priority: number,
      priorityDesc: desc,
      done: false,
    };
  }, [editingTask, shape, text, today, getPriority]);

  const addTaskHandler = useCallback(() => {
    const newTask = createTask();
    dispatch(addTask(newTask));
  }, [dispatch, createTask]);

  const updateTaskHandler = useCallback(() => {
    const updatedTask = createTask();
    dispatch(updateTask(updatedTask));
  }, [dispatch, createTask]);

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setText(text);
  };

  const submitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!text || !shape) {
        const newErrors = {
          textError: !text ? '할 일을 입력해주세요' : '',
          shapeError: !shape ? '중요도를 선택해주세요' : '',
        };
        setIsErrors(newErrors);
        textareaRef.current?.focus();
        return;
      }

      if (editingTask.id) {
        updateTaskHandler();
      } else {
        addTaskHandler();
      }

      setText('');
      setShape('circle');
      dispatch(modalIsClose());
      dispatch(noteAlertIsOpen());
    },
    [dispatch, addTaskHandler, updateTaskHandler, editingTask, text, shape]
  );

  const onToggleHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setToggle((prev) => !prev);
    },
    []
  );

  const getShapeHandler = useCallback((shapeName: ShapeName) => {
    setShape(shapeName);
  }, []);

  const shapeSelectMenuToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <Modal isOpen={isInputState}>
      <ModalHeader>
        <Title title={'New Task'} desc={today.toLocaleDateString()} />
      </ModalHeader>

      <InputLabel htmlFor='task-input'>Task Input</InputLabel>
      <InputForm id='task-input' onSubmit={submitHandler}>
        <Textarea
          value={text}
          onChange={onChangeHandler}
          ref={textareaRef}
          placeholder='오늘의 할 일은 무엇인가요?'
        />
        {isErrors.textError && <ErrorMsg>{isErrors.textError}</ErrorMsg>}
        {isErrors.shapeError && <ErrorMsg>{isErrors.shapeError}</ErrorMsg>}
        <BtnWrapper>
          <SelectShapesWrapper>
            <MultipleShapes shape={shape} />
            <ShapeSelectMenu
              id='shape-select-menu'
              isToggle={toggle}
              getShape={getShapeHandler}
              onToggle={shapeSelectMenuToggle}
              aria-label='중요도 선택'
            />
            <ToggleBtn
              type='button'
              onClick={onToggleHandler}
              aria-expanded={toggle}
              aria-controls='shape-select-menu'
              aria-label={
                toggle ? '중요도 선택 메뉴 닫기' : '중요도 선택 메뉴 열기'
              }
            >
              {toggle ? (
                <FaAngleDown fontSize={'1.3rem'} aria-hidden />
              ) : (
                <FaAngleUp fontSize={'1.3rem'} aria-hidden />
              )}
            </ToggleBtn>
          </SelectShapesWrapper>
          <SubmitBtnWrapper>
            <Btn type={'submit'} text={'등록'} />
          </SubmitBtnWrapper>
        </BtnWrapper>
      </InputForm>
    </Modal>
  );
};

export default ModalInput;
