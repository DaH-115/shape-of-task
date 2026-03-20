import { useState, useRef, useMemo, useEffect, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTask, editingTaskReset, updateTask } from "@/store/taskListSlice";
import { formatDateToKorean, getTodayISOString } from "@/utils/dateFormat";
import { ShapeName } from "@/types/task";
import {
  validateTaskForm,
  createTaskFromValues,
} from "@/components/modals/TaskFormModal/TaskFormModal.utils";
import {
  ModalHeader,
  InputLabel,
  InputForm,
  Textarea,
  BtnWrapper,
  SelectShapesWrapper,
  SubmitButtonWrapper,
  ToggleButton,
  ErrorMsg,
} from "@/components/modals/TaskFormModal/TaskFormModal.styles";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Title from "@/components/TitleComponent";
import Modal from "@/components/modals/Modal";
import MultipleShapes from "@/components/shapes/MultipleShapes";
import ShapeSelectMenu from "@/components/menu/ShapeSelectMenu";
import Btn from "@/components/buttons/Button";

interface TaskFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const TaskFormModal = ({ isOpen, onClose, onSuccess }: TaskFormModalProps) => {
  const editingTask = useAppSelector((state) => state.taskList.editingTask);
  const [text, setText] = useState("");
  const [shape, setShape] = useState<ShapeName>("circle");
  const [toggle, setToggle] = useState(false);
  const [isErrors, setIsErrors] = useState({
    textError: "",
    shapeError: "",
  });
  const todayDateStr = useMemo(() => getTodayISOString(), []);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();

  // 모달 열림/닫힘에 따른 폼 상태 동기화
  useEffect(() => {
    if (!isOpen) {
      dispatch(editingTaskReset());
      return;
    }

    // 열릴 때: 수정 모드면 editingTask 기준, 아니면 기본값
    if (editingTask?.id) {
      setText(editingTask.text);
      setShape(editingTask.shape);
    } else {
      setText("");
      setShape("circle");
    }
    setToggle(false);
    setIsErrors({ textError: "", shapeError: "" });
  }, [isOpen, editingTask, dispatch]);

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setText(text);
  };

  const submitHandler: React.SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const errors = validateTaskForm(text, shape);
    if (errors.textError || errors.shapeError) {
      setIsErrors(errors);
      textareaRef.current?.focus();
      return;
    }

    const task = createTaskFromValues({
      text,
      shape,
      id: editingTask?.id ?? uuidv4(),
      date: todayDateStr,
    });

    if (editingTask?.id) {
      dispatch(updateTask(task));
    } else {
      dispatch(addTask(task));
    }

    setText("");
    setShape("circle");
    onClose();
    onSuccess?.();
  };

  const toggleHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  };

  const handleShapeSelect = (shapeName: ShapeName) => {
    setShape(shapeName);
    setToggle(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <Title title={"New Task"} desc={formatDateToKorean(todayDateStr)} />
      </ModalHeader>

      <InputLabel htmlFor="task-input">Task Input</InputLabel>
      <InputForm id="task-input" onSubmit={submitHandler}>
        <Textarea
          value={text}
          onChange={onChangeHandler}
          ref={textareaRef}
          placeholder="오늘의 할 일은 무엇인가요?"
        />
        {isErrors.textError && <ErrorMsg>{isErrors.textError}</ErrorMsg>}
        {isErrors.shapeError && <ErrorMsg>{isErrors.shapeError}</ErrorMsg>}
        <BtnWrapper>
          <SelectShapesWrapper onClick={toggleHandler}>
            <MultipleShapes shape={shape} />
            <ShapeSelectMenu
              id="shape-select-menu"
              isToggle={toggle}
              onSelect={handleShapeSelect}
              aria-label="중요도 선택"
            />
            <ToggleButton
              type="button"
              onClick={toggleHandler}
              aria-expanded={toggle}
              aria-controls="shape-select-menu"
              aria-label={
                toggle ? "중요도 선택 메뉴 닫기" : "중요도 선택 메뉴 열기"
              }
            >
              {toggle ? (
                <FaAngleDown fontSize={"1.2rem"} aria-hidden />
              ) : (
                <FaAngleUp fontSize={"1.2rem"} aria-hidden />
              )}
            </ToggleButton>
          </SelectShapesWrapper>
          <SubmitButtonWrapper>
            <Btn type={"submit"} text={"등록"} />
          </SubmitButtonWrapper>
        </BtnWrapper>
      </InputForm>
    </Modal>
  );
};

export default TaskFormModal;
