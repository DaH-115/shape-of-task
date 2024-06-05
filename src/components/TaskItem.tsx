import React from 'react';
import styled from 'styled-components';
import { TaskTypes, editingTask, toggleTask } from 'store/taskListSlice';
import {
  notificationIsOpen,
  removeConfirmOpen,
  updateConfirmOpen,
} from 'store/modalSlice';
import { useAppDispatch } from 'store/hooks';
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from 'react-icons/io';
import { BsPencil, BsTrash } from 'react-icons/bs';

import StyledShapes from 'components/figures/StyledShapes';
import { Btn, ButtonWrapper } from 'styles/Button/Btn';

const TaskItem = ({
  id,
  text,
  shape,
  importanceDesc,
  done,
  date,
}: TaskTypes) => {
  const dispatch = useAppDispatch();

  const toggleTaskHandler = React.useCallback(() => {
    dispatch(toggleTask(id));
    dispatch(notificationIsOpen(!done));
  }, [dispatch, id, done]);

  const removeConfirmOpenHandler = React.useCallback(() => {
    dispatch(removeConfirmOpen());
    dispatch(editingTask(id));
  }, [dispatch, id]);

  const updateConfirmOpenHandler = React.useCallback(() => {
    dispatch(updateConfirmOpen());
    dispatch(editingTask(id));
  }, [dispatch, id]);

  return (
    <TaskItemContainer>
      <TaskContent onClick={toggleTaskHandler}>
        <ContentHeader>
          <StyledShapes shapeName={shape} />
          {done ? (
            <DoneIcon $isChecked={done}>
              <IoIosCheckmarkCircle />
            </DoneIcon>
          ) : (
            <DoneIcon $isChecked={done}>
              <IoIosCheckmarkCircleOutline />
            </DoneIcon>
          )}
        </ContentHeader>
        <ContentText $isDone={done}>{text}</ContentText>
        <ContentBottom>
          <TaskDate>{date}</TaskDate>
          <ShapeDesc>{importanceDesc}</ShapeDesc>
        </ContentBottom>
      </TaskContent>
      <BtnWrapper>
        <Btn type='button' text='수정' onClickFn={updateConfirmOpenHandler}>
          <UpdateIcon />
        </Btn>
        <Btn type='button' text='삭제' onClickFn={removeConfirmOpenHandler}>
          <RemoveIcon />
        </Btn>
      </BtnWrapper>
      <MobileIconContainer>
        <ButtonWrapper $isEmpty={false} onClick={updateConfirmOpenHandler}>
          <UpdateIcon />
        </ButtonWrapper>
        <ButtonWrapper $isEmpty={false} onClick={removeConfirmOpenHandler}>
          <RemoveIcon />
        </ButtonWrapper>
      </MobileIconContainer>
    </TaskItemContainer>
  );
};

export default React.memo(TaskItem);

const TaskItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.commonColors.gray};
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 0.8rem;

  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
`;

const TaskContent = styled.div`
  width: 100%;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 2rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 1.6rem;
  }
`;

const DoneIcon = styled.div<{ $isChecked: boolean }>`
  color: ${({ theme, $isChecked }) =>
    $isChecked ? theme.colors.important : theme.commonColors.gray};
`;

const ContentText = styled.p<{ $isDone: boolean }>`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.2;
  word-break: break-all;

  padding: 0.5rem 0 2rem 0;

  color: ${({ theme, $isDone }) =>
    $isDone ? theme.commonColors.gray : theme.commonColors.black};
  text-decoration: ${({ $isDone }) => ($isDone ? 'line-through' : 'none')};
  white-space: pre-line;

  ${({ theme }) => theme.device.tablet} {
    width: 100%;
    font-size: 1rem;
    margin-left: 0.2rem;
  }
`;

const ContentBottom = styled.div`
  display: flex;
  width: 100%;
  padding: 0.6rem 0 0.8rem 0;
  border-top: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.9rem;
  }
`;

const TaskDate = styled.p`
  color: ${({ theme }) => theme.commonColors.gray};
  margin-right: 0.3rem;
`;

const ShapeDesc = styled.p`
  color: ${({ theme }) => theme.commonColors.gray};
`;

const BtnWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.device.tablet} {
    display: flex;
    width: 100%;

    div:first-child {
      margin-right: 0.3rem;
    }
  }
`;

const MobileIconContainer = styled.div`
  display: flex;
  width: 100%;

  div:first-child {
    margin-right: 0.3rem;
  }

  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const UpdateIcon = styled(BsPencil)`
  font-size: 1rem;
  color: #fff;
  margin-left: 0.3rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.8rem;
  }
`;

const RemoveIcon = styled(BsTrash)`
  font-size: 1rem;
  color: #fff;
  margin-left: 0.3rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 0.8rem;
  }
`;
