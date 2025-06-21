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
import { addTask, editingTaskReset, updateTask } from 'store/taskListSlice';
import { ShapeName } from 'types/task';
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
} from './ModalInput.styles';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Title from 'components/TitleComponent';
import Modal from 'components/modals/Modal';
import MultipleShapes from 'components/shapes/MultipleShapes';
import ShapeSelectMenu from 'components/menu/ShapeSelectMenu';
import Btn from 'components/buttons/Btn';

interface ModalInputProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const ModalInput = ({ isOpen, onClose, onSuccess }: ModalInputProps) => {
  const editingTask = useAppSelector((state) => state.taskList.editingTask);
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
    if (!isOpen) {
      setToggle(false);
      setText('');
      setShape('circle');
      setIsErrors({ textError: '', shapeError: '' });
      dispatch(editingTaskReset());
    }
  }, [isOpen, dispatch]);

  useEffect(() => {
    if (editingTask.id) {
      setText(editingTask.text);
      setShape(editingTask.shape);
    } else {
      setText('');
      setShape('circle');
    }
  }, [isOpen, editingTask, dispatch]);

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
      onClose();
      onSuccess?.();
    },
    [
      onClose,
      onSuccess,
      addTaskHandler,
      updateTaskHandler,
      editingTask,
      text,
      shape,
    ]
  );

  const onToggleHandler = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  }, []);

  const onShapeWrapperClickHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setToggle((prev) => !prev);
    },
    []
  );

  const getShapeHandler = useCallback((shapeName: ShapeName) => {
    setShape(shapeName);
    setToggle(false); // 도형 선택 후 드롭다운 닫기
  }, []);

  const shapeSelectMenuToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
          <SelectShapesWrapper onClick={onShapeWrapperClickHandler}>
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
