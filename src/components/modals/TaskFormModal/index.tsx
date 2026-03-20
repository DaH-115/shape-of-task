import { useState, useRef, useMemo, useEffect, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addTask, updateTask } from "@/store/taskListSlice";
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
  /** 수정 모드일 때 편집 중인 태스크 ID (없으면 추가 모드) */
  editingTaskId?: string | null;
}

const TaskFormModal = ({
  isOpen,
  onClose,
  onSuccess,
  editingTaskId = null,
}: TaskFormModalProps) => {
  const taskList = useAppSelector((state) => state.taskList.taskList);
  const editingTask = useMemo(
    () =>
      editingTaskId
        ? (taskList.find((t) => t.id === editingTaskId) ?? null)
        : null,
    [taskList, editingTaskId],
  );
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

  // 모달 열릴 때 폼 상태 동기화 (수정 모드면 editingTask 기준, 아니면 기본값)
  useEffect(() => {
    if (!isOpen) return;

    if (editingTask?.id) {
      setText(editingTask.text);
      setShape(editingTask.shape);
    } else {
      setText("");
      setShape("circle");
    }
    setToggle(false);
    setIsErrors({ textError: "", shapeError: "" });
  }, [isOpen, editingTask]);

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
      date: editingTask?.date ?? todayDateStr,
    });

    if (editingTask?.id) {
      // 수정 시 기존 done 상태 유지
      dispatch(updateTask({ ...task, done: editingTask.done }));
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
        <Title title={"새로운 일정"} desc={formatDateToKorean(todayDateStr)} />
      </ModalHeader>

      <InputLabel htmlFor="task-input">일정 입력</InputLabel>
      <InputForm id="task-input" onSubmit={submitHandler}>
        <Textarea
          value={text}
          onChange={onChangeHandler}
          ref={textareaRef}
          placeholder="오늘의 일정은 무엇인가요?"
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
              aria-label="모양 선택"
            />
            <ToggleButton
              type="button"
              onClick={toggleHandler}
              aria-expanded={toggle}
              aria-controls="shape-select-menu"
              aria-label={
                toggle ? "모양 선택 메뉴 닫기" : "모양 선택 메뉴 열기"
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
