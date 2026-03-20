import React, { memo, useCallback, useState, useRef, useEffect } from "react";
import { toggleTask } from "@/store/taskListSlice";
import { TaskTypes } from "@/types/task";
import { notificationOpenHandler } from "@/store/modalSlice";
import { useAppDispatch } from "@/store/hooks";
import {
  ActionDropdownButton,
  ActionDropdownContainer,
  ActionDropdownMenu,
  ActionDropdownWrapper,
  ActionMenuItem,
  ButtonWrapper,
  ContentBottom,
  ContentHeader,
  ContentText,
  DoneButton,
  RemoveIcon,
  ShapeDesc,
  TaskDate,
  TaskItem as TaskItemStyled,
  UpdateIcon,
} from "./TaskItem.styles";
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";

import SingleShapes from "@/components/shapes/SingleShapes";
import { formatDateToKorean } from "@/utils/dateFormat";

interface TaskItemProps {
  processTask: TaskTypes;
  onUpdateClick: (taskId: string) => void;
  onRemoveClick: (taskId: string) => void;
}

const TaskItem = ({
  processTask,
  onUpdateClick,
  onRemoveClick,
}: TaskItemProps) => {
  const { id, text, shape, priorityDesc, date, done, priority } = processTask;
  const dispatch = useAppDispatch();

  const toggleTaskHandler = useCallback(() => {
    dispatch(toggleTask(id));
    // 완료 시에만 알림 표시 (취소 시에는 표시하지 않음)
    if (!done) {
      dispatch(notificationOpenHandler());
    }
  }, [dispatch, id, done]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleUpdateBtnClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsDropdownOpen(false);
      onUpdateClick(id);
    },
    [onUpdateClick, id],
  );

  const handleRemoveBtnClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsDropdownOpen(false);
      onRemoveClick(id);
    },
    [onRemoveClick, id],
  );

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTaskHandler();
      }
    },
    [toggleTaskHandler],
  );

  return (
    <TaskItemStyled
      onClick={toggleTaskHandler}
      role="checkbox"
      aria-checked={done}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      $isDone={done}
      $priority={priority}
    >
      <ContentHeader>
        <SingleShapes shapeName={shape} />
        <ButtonWrapper>
          <DoneButton $isChecked={done} $priority={priority}>
            {done ? (
              <IoIosCheckmarkCircle aria-hidden />
            ) : (
              <IoIosCheckmarkCircleOutline aria-hidden />
            )}
          </DoneButton>
          <ActionDropdownWrapper onClick={(e) => e.stopPropagation()}>
            <ActionDropdownContainer ref={dropdownRef}>
              <ActionDropdownButton
                type="button"
                onClick={handleDropdownToggle}
                aria-label="작업 메뉴"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <HiOutlineDotsVertical aria-hidden />
              </ActionDropdownButton>
              <ActionDropdownMenu $isOpen={isDropdownOpen}>
                <ActionMenuItem type="button" onClick={handleUpdateBtnClick}>
                  <UpdateIcon aria-hidden />
                  Edit
                </ActionMenuItem>
                <ActionMenuItem type="button" onClick={handleRemoveBtnClick}>
                  <RemoveIcon aria-hidden />
                  Delete
                </ActionMenuItem>
              </ActionDropdownMenu>
            </ActionDropdownContainer>
          </ActionDropdownWrapper>
        </ButtonWrapper>
      </ContentHeader>
      <ContentText $isDone={done}>{text}</ContentText>
      <ContentBottom>
        <TaskDate>{formatDateToKorean(date)}</TaskDate>
        <ShapeDesc>{priorityDesc}</ShapeDesc>
      </ContentBottom>
    </TaskItemStyled>
  );
};

export default memo(TaskItem);
