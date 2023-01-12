import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todoListSlice';
import styled from 'styled-components';

import StyledFigure from './StyledFigure';
import StyledBtn from '../styles/StyledBtn';
import Notification from '../layout/Notification';

const TodoListItem = ({ id, text, figure, done, date }) => {
  const [toggle, setToggle] = useState(false);
  const dispach = useDispatch();

  useEffect(() => {
    let timeout;

    if (done && toggle) {
      timeout = setTimeout(() => setToggle(false), 1200);
    }

    if (!done && toggle) {
      setToggle(false);
    }

    return () => clearTimeout(timeout);
  }, [toggle, done]);

  const onToggleTodoHandler = useCallback(
    (id) => {
      dispach(toggleTodo(id));

      if (!done) {
        setToggle(true);
      }
    },
    [dispach, done]
  );

  const onRemoveTodoHandler = useCallback(
    (id) => {
      dispach(removeTodo(id));
    },
    [dispach]
  );

  return (
    <>
      <Notification toggle={toggle} figure={figure} />
      <TodoItemLi>
        <TodoItemWrapper onClick={() => onToggleTodoHandler(id)}>
          <StyledFigure size='small' figure={figure} />
          <p className={`content-text ${done && 'done'}`}>{text}</p>
          <p className='todo-date'>{date}</p>
        </TodoItemWrapper>
        {done && (
          <RemoveBtn onClick={() => onRemoveTodoHandler(id)}>지우기</RemoveBtn>
        )}
      </TodoItemLi>
    </>
  );
};

export default React.memo(TodoListItem);

const TodoItemLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  margin-bottom: 12px;
  box-shadow: 0px 5px 40px rgba(177, 177, 177, 0.25);

  ${({ theme }) => theme.device.desktop} {
    padding: 30px 30px 20px 30px;

    &:hover {
      transition: background-color 0.3s ease-in-out;
      transform: translateY(-20px);
      transition: transform 0.2s ease-in-out;
    }
  }
`;

const TodoItemWrapper = styled.div`
  display: flex;
  width: 100%;

  .todo-date {
    display: none;
    font-weight: 700;
    color: ${({ theme }) => theme.commonColors.gray};
  }

  .content-text {
    width: 100%;
    max-height: 150px;
    font-size: 24px;
    line-height: 28px;
    word-break: break-all;
    margin-top: 4px;
    margin-left: 12px;

    white-space: pre-line;

    /* scrollbar */
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }

  .content-text.done {
    color: ${({ theme }) => theme.commonColors.gray};
    text-decoration: line-through;
  }

  ${({ theme }) => theme.device.desktop} {
    display: block;

    .todo-date {
      display: block;
      border-top: 2px solid ${({ theme }) => theme.commonColors.light_gray};
      padding-top: 10px;
    }

    .content-text {
      width: 100%;
      height: 100px;
      max-height: 100px;
      margin-left: 4px;
    }
  }
`;

const RemoveBtn = styled(StyledBtn)`
  width: 100%;
  margin-top: 20px;
  color: ${({ theme }) => theme.commonColors.gray};
`;
