import React from 'react';
import styled from 'styled-components';
import { TaskTypes, selectEditTask, toggleTask } from 'store/taskListSlice';
import {
  confirmIsOpen,
  modalIsOpen,
  notificationIsOpen,
} from 'store/modalSlice';
import { useAppDispatch } from 'store/hooks';
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from 'react-icons/io';

import StyledShapes from 'components/figures/StyledShapes';
import { ButtonWrapper } from 'styles/Button/Btn';

const TaskItem = ({ id, text, shape, done, date }: TaskTypes) => {
  const dispatch = useAppDispatch();
  const isImportance =
    shape === 'triangle'
      ? '중요해요'
      : shape === 'square'
      ? '기억해 두세요'
      : shape === 'circle'
      ? '언제든지 해요'
      : '';

  const toggleTaskHandler = React.useCallback(() => {
    dispatch(toggleTask(id));
    dispatch(notificationIsOpen(!done));
  }, [dispatch, id, done]);

  const removeTaskHandler = React.useCallback(() => {
    dispatch(confirmIsOpen(id));
  }, [dispatch, id]);

  const modalOpenHandler = React.useCallback(() => {
    dispatch(modalIsOpen());
    dispatch(selectEditTask(id));
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
          <ShapeDesc>{isImportance}</ShapeDesc>
        </ContentBottom>
      </TaskContent>
      <BtnWrapper>
        <EditBtn onClick={modalOpenHandler} $isEmpty>
          {'수정'}
        </EditBtn>
        <RemoveBtn onClick={removeTaskHandler} $isEmpty>
          {'삭제'}
        </RemoveBtn>
      </BtnWrapper>
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
    height: 5rem;
    max-height: 5rem;
    font-size: 1rem;
    margin-left: 0.2rem;
  }

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
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
  display: flex;
  width: 100%;

  ${({ theme }) => theme.device.tablet} {
  }
`;

const CustomBtn = styled(ButtonWrapper)`
  color: ${({ theme }) => theme.commonColors.gray};
  border-color: ${({ theme }) => theme.commonColors.gray};
  padding: 0.5rem 1rem;
  &:hover,
  :active {
    color: #fff;
    border-color: ${({ theme }) => theme.colors.important};
  }
`;

const EditBtn = styled(CustomBtn)`
  margin-right: 1rem;
`;

const RemoveBtn = styled(CustomBtn)`
  width: 100%;
`;
