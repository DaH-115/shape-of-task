import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { removeTodo, toggleTodo } from 'store/todoListSlice';
import { useAppDispatch } from 'store/hooks';
import { TodoProps } from 'pages/TodoListPage';

import StyledFigures from 'components/StyledFigures';
import StyledBtn from 'styles/StyledBtn';
import Notification from 'layout/Notification';

const TodoListItem = ({ id, text, figure, done, date }: TodoProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const dispach = useAppDispatch();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (done && toggle) {
      timeout = setTimeout(() => setToggle(false), 1200);
    }

    if (!done && toggle) {
      setToggle(false);
    }

    return () => clearTimeout(timeout);
  }, [toggle, done]);

  const onToggleTodoHandler = useCallback(
    (id: string) => {
      dispach(toggleTodo(id));

      if (!done) {
        setToggle(true);
      }
    },
    [dispach, done]
  );

  const onRemoveTodoHandler = useCallback(
    (id: string) => {
      dispach(removeTodo(id));
    },
    [dispach]
  );

  return (
    <>
      <Notification toggle={toggle} figure={figure} />
      <TodoItem>
        <TodoItemContent onClick={() => onToggleTodoHandler(id)}>
          <StyledFigures figurecolor={figure} size='small' />
          <ContentText done={done}>{text}</ContentText>
          <TodoDate>{date}</TodoDate>
        </TodoItemContent>
        {done && (
          <RemoveBtn onClick={() => onRemoveTodoHandler(id)}>
            {'지우기'}
          </RemoveBtn>
        )}
      </TodoItem>
    </>
  );
};

export default React.memo(TodoListItem);

const TodoDate = styled.p`
  display: none;
  font-weight: 700;
  color: ${({ theme }) => theme.commonColors.gray};

  ${({ theme }) => theme.device.desktop} {
    display: block;
    padding-top: 0.5rem;
    border-top: 0.1rem solid ${({ theme }) => theme.commonColors.light_gray};
  }
`;

const ContentText = styled.p<{ done: boolean }>`
  width: 100%;
  max-height: 12rem;
  font-size: 1.5rem;
  line-height: 2rem;
  word-break: break-all;
  margin-left: 0.6rem;

  color: ${({ theme, done }) =>
    done ? theme.commonColors.gray : theme.commonColors.black};
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  white-space: pre-line;

  ${({ theme }) => theme.device.desktop} {
    width: 100%;
    height: 5rem;
    max-height: 5rem;
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

const TodoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.8rem;
  margin-bottom: 0.8rem;
  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.25);

  ${({ theme }) => theme.device.desktop} {
    padding: 1rem;

    &:hover {
      transition: background-color 0.3s ease-in-out;
      transform: translateY(-2rem);
      transition: transform 0.2s ease-in-out;
    }
  }
`;

const TodoItemContent = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => theme.device.desktop} {
    display: block;
  }
`;

const RemoveBtn = styled(StyledBtn)`
  width: 100%;
  margin-top: 1rem;
  color: ${({ theme }) => theme.commonColors.gray};
`;
