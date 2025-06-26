import React, { memo, useCallback } from 'react';
import { toggleTask } from 'store/taskListSlice';
import { TaskTypes } from 'types/task';
import { notificationOpenHandler } from 'store/modalSlice';
import { useAppDispatch } from 'store/hooks';
import {
  BtnWrapper,
  ContentBottom,
  ContentHeader,
  ContentText,
  DoneButton,
  RemoveIcon,
  ShapeDesc,
  TaskDate,
  TaskItem,
  TaskList,
  UpdateIcon,
} from 'pages/taskListPage/taskList/TaskItemList.styles';
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from 'react-icons/io';

import SingleShapes from 'components/shapes/SingleShapes';
import Btn from 'components/buttons/Btn';

interface TaskItemListProps {
  processTask: TaskTypes;
  onUpdateClick: (taskId: string) => void;
  onRemoveClick: (taskId: string) => void;
}

const TaskItemList = ({
  processTask,
  onUpdateClick,
  onRemoveClick,
}: TaskItemListProps) => {
  const { id, text, shape, priorityDesc, date, done, priority } = processTask;
  const dispatch = useAppDispatch();

  const toggleTaskHandler = useCallback(() => {
    dispatch(toggleTask(id));
    dispatch(notificationOpenHandler());
  }, [dispatch, id]);

  const handleUpdateBtnClick = useCallback(() => {
    onUpdateClick(id);
  }, [onUpdateClick, id]);

  const handleRemoveBtnClick = useCallback(() => {
    onRemoveClick(id);
  }, [onRemoveClick, id]);

  const handleButtonAreaClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLLIElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTaskHandler();
      }
    },
    [toggleTaskHandler]
  );

  return (
    <TaskList>
      <TaskItem
        onClick={toggleTaskHandler}
        role='checkbox'
        aria-checked={done}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        $isDone={done}
        $priority={priority}
      >
        <ContentHeader>
          <SingleShapes shapeName={shape} />
          <DoneButton $isChecked={done} $priority={priority}>
            {done ? (
              <IoIosCheckmarkCircle aria-hidden />
            ) : (
              <IoIosCheckmarkCircleOutline aria-hidden />
            )}
          </DoneButton>
        </ContentHeader>
        <ContentText $isDone={done}>{text}</ContentText>
        <ContentBottom>
          <TaskDate>{date}</TaskDate>
          <ShapeDesc>{priorityDesc}</ShapeDesc>
        </ContentBottom>
        <BtnWrapper onClick={handleButtonAreaClick}>
          <Btn
            type='button'
            text='Edit'
            variant='outline'
            onClick={handleUpdateBtnClick}
          >
            <UpdateIcon aria-hidden />
          </Btn>
          <Btn
            type='button'
            text='Delete'
            variant='outline'
            onClick={handleRemoveBtnClick}
          >
            <RemoveIcon aria-hidden />
          </Btn>
        </BtnWrapper>
      </TaskItem>
    </TaskList>
  );
};

export default memo(TaskItemList);
