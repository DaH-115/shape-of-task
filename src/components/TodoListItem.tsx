import React, { useCallback } from 'react';
import styled from 'styled-components';
import { TodoItemTypes, addEditTodo, toggleTodo } from 'store/todoListSlice';
import {
  confirmIsOpen,
  editModalIsOpen,
  notificationIsOpen,
} from 'store/modalSlice';
import { useAppDispatch } from 'store/hooks';
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from 'react-icons/io';

import StyledBtn from 'styles/StyledBtn';
import StyledShapes from 'components/figures/StyledShapes';

const TodoListItem = ({ id, text, shape, done, date }: TodoItemTypes) => {
  const dispatch = useAppDispatch();
  const isImportance =
    shape === 'circle'
      ? '언제든지 하세요'
      : shape === 'triangle'
      ? '중요해요'
      : shape === 'square'
      ? '기억해 두세요'
      : '';

  const onToggleTodoHandler = useCallback(() => {
    dispatch(toggleTodo(id));
    dispatch(notificationIsOpen(!done));
  }, [dispatch, id, done]);

  const onRemoveTodoHandler = useCallback(() => {
    dispatch(confirmIsOpen(id));
  }, [dispatch, id]);

  const onModalOpenHandler = useCallback(() => {
    dispatch(editModalIsOpen());
    dispatch(addEditTodo(id));
  }, [dispatch, id]);

  return (
    <TodoItemWrapper>
      <TodoItemContent onClick={onToggleTodoHandler}>
        <TodoItemHeader>
          <StyledShapes shapeName={shape} />
          {done ? (
            <TodoDoneIcon $ischecked={done.toString()}>
              <IoIosCheckmarkCircle />
            </TodoDoneIcon>
          ) : (
            <TodoDoneIcon $ischecked={done.toString()}>
              <IoIosCheckmarkCircleOutline />
            </TodoDoneIcon>
          )}
        </TodoItemHeader>
        <ContentText $done={done}>{text}</ContentText>
        <ContentBottom>
          <TodoDate>{date}</TodoDate>
          <FigureDesc>{isImportance}</FigureDesc>
        </ContentBottom>
      </TodoItemContent>

      <BtnWrapper>
        <EditBtn onClick={onModalOpenHandler}>{'수정하기'}</EditBtn>
        <RemoveBtn onClick={onRemoveTodoHandler}>{'지우기'}</RemoveBtn>
      </BtnWrapper>
    </TodoItemWrapper>
  );
};

export default React.memo(TodoListItem);

const TodoItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 0.8rem;

  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);
`;

const TodoItemContent = styled.div`
  width: 100%;
`;

const TodoItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 2rem;

  ${({ theme }) => theme.device.tablet} {
    font-size: 1.6rem;
  }
`;

const TodoDoneIcon = styled.div<{ $ischecked: string }>`
  color: ${({ theme, $ischecked }) =>
    $ischecked === 'true' ? theme.colors.important : theme.commonColors.gray};
`;

const ContentText = styled.p<{ $done: boolean }>`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.2;
  word-break: break-all;

  padding: 0.5rem 0 2rem 0;

  color: ${({ theme, $done }) =>
    $done ? theme.commonColors.gray : theme.commonColors.black};
  text-decoration: ${({ $done }) => ($done ? 'line-through' : 'none')};
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

const TodoDate = styled.p`
  color: ${({ theme }) => theme.commonColors.gray};
  margin-right: 0.3rem;
`;

const FigureDesc = styled.p`
  color: ${({ theme }) => theme.commonColors.gray};
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;

  width: 100%;

  ${({ theme }) => theme.device.tablet} {
    margin-top: 0.2rem;
  }
`;

const RemoveBtn = styled(StyledBtn)`
  color: ${({ theme }) => theme.commonColors.gray};
  margin-right: 0.2rem;

  ${({ theme }) => theme.device.tablet} {
    width: auto;
  }
`;

const EditBtn = styled(StyledBtn)`
  color: ${({ theme }) => theme.commonColors.gray};

  ${({ theme }) => theme.device.tablet} {
    width: auto;
  }
`;
