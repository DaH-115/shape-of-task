import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../store/todoListSlice';
import styled, { css } from 'styled-components';

import StyledTriangle from '../assets/Triangle';
import StyledSquare from '../assets/Square';
import StyledCircle from '../assets/Circle';
import StyledButton from '../styles/StyledButton';
import Notification from '../layout/Notification';

const TodoItemLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  box-sizing: border-box;
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
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      width: 100%;

      .todo-date {
        display: none;
        font-weight: bold;
        color: ${theme.colors.grey};
      }

      .content-text {
        width: 100%;
        font-size: 18px;
        line-height: 28px;
        word-break: break-all;
        margin-left: 12px;

        width: 100%;
        max-height: 150px;

        /* scrollbar */
        overflow-y: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
      }

      .content-text.done {
        color: ${theme.colors.grey};
        text-decoration: line-through;
      }

      ${theme.device.desktop} {
        display: block;

        .content-text {
          width: 100%;
          height: 100px;
          max-height: 100px;
        }

        .todo-date {
          display: block;
          border-top: 2px solid ${({ theme }) => theme.colors.light_grey};
          padding-top: 10px;
        }
      } ;
    `;
  }}
`;

const RemoveBtn = styled(StyledButton)`
  width: 100%;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.grey};
`;

const TodoListItem = ({ todoItem }) => {
  const { id, text, figure, done, date } = todoItem;
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

  const onToggleTodoHandler = (id) => {
    dispach(toggleTodo(id));

    if (!done) {
      setToggle(true);
    }
  };

  const onRemoveTodoHandler = (id) => {
    dispach(removeTodo(id));
  };

  return (
    <>
      <Notification toggle={toggle} figure={figure} />
      <TodoItemLi>
        <TodoItemWrapper onClick={() => onToggleTodoHandler(id)}>
          {figure === 'circle' && <StyledCircle size='small' />}
          {figure === 'triangle' && <StyledTriangle size='small' />}
          {figure === 'square' && <StyledSquare size='small' />}
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

export default TodoListItem;
