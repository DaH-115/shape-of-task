import {
  CountNumber,
  EditButton,
  EditInput,
  LabelWrapper,
  PriorityText,
  ShapesWrapper,
  TaskItemWrapper,
} from "@/components/taskListCount/TaskListCountItem.styles";
import SingleShapes from "@/components/shapes/SingleShapes";
import { memo, useCallback, useState, useRef, useEffect } from "react";
import { ShapeName } from "@/types/task";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  getPriorityLabel,
  updatePriorityLabel,
} from "@/store/priorityLabelsSlice";
import { BsPencil } from "react-icons/bs";

interface TaskListCountItemProps {
  /** 중요도 번호 (1: triangle, 2: square, 3: circle) */
  priorityNumber: 1 | 2 | 3;
  count: number;
  shape: ShapeName;
}

const TaskListCountItem = ({
  priorityNumber,
  count,
  shape,
}: TaskListCountItemProps) => {
  const dispatch = useAppDispatch();
  const priorityLabels = useAppSelector((state) => state.priorityLabels);
  const displayLabel = getPriorityLabel(priorityLabels, priorityNumber);

  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(displayLabel);
  const inputRef = useRef<HTMLInputElement>(null);

  // 편집 모드 진입 시 인풋 포커스 및 값 동기화
  useEffect(() => {
    if (isEditing) {
      setInputValue(displayLabel);
      inputRef.current?.focus();
    }
  }, [isEditing, displayLabel]);

  const handleEditClick = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSave = useCallback(() => {
    const trimmed = inputValue.trim();
    if (trimmed && trimmed !== displayLabel) {
      dispatch(
        updatePriorityLabel({ priority: priorityNumber, label: trimmed }),
      );
    }
    setIsEditing(false);
  }, [dispatch, inputValue, displayLabel, priorityNumber]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSave();
      }
      if (e.key === "Escape") {
        setInputValue(displayLabel);
        setIsEditing(false);
      }
    },
    [handleSave, displayLabel],
  );

  return (
    <TaskItemWrapper>
      <ShapesWrapper>
        <SingleShapes shapeName={shape} isCountTask={count > 0} />
      </ShapesWrapper>
      <LabelWrapper>
        {isEditing ? (
          <EditInput
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            aria-label={`중요도 "${displayLabel}" 수정`}
          />
        ) : (
          <>
            <PriorityText>{displayLabel}</PriorityText>
            <EditButton
              type="button"
              onClick={handleEditClick}
              aria-label={`중요도 "${displayLabel}" 수정하기`}
            >
              <BsPencil aria-hidden size={14} />
            </EditButton>
          </>
        )}
      </LabelWrapper>
      <CountNumber>{count}</CountNumber>
    </TaskItemWrapper>
  );
};

export default memo(TaskListCountItem);
