import styled, { css } from 'styled-components';

import StyledTriangle from '../assets/Triangle';
import StyledSquare from '../assets/Square';
import StyledCircle from '../assets/Circle';

const TodoItemLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light_grey};
  }
`;

const TodoItemWrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      width: 100%;
      padding-bottom: 20px;

      .todo-date {
        display: none;
        font-weight: bold;
        color: ${theme.colors.grey};
      }

      .content-text {
        width: 100%;
        font-size: 24px;
        line-height: 28px;
        word-break: break-all;
        margin-top: 6px;

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
          margin: 10px 0 5px 0;
        }

        .todo-date {
          display: block;
        }
      } ;
    `;
  }}
`;

const MoveToFL = styled.button`
  ${({ theme }) => {
    return css`
      width: 100%;
      color: ${theme.colors.grey};
      background-color: #fff;
      border: 1px solid ${theme.colors.grey};
      border-radius: 20px;
      padding: 10px;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: -0.02em;

      &:active {
        color: #fff;
        background-color: ${theme.colors.orange};
      }

      ${theme.device.desktop} {
        display: block;
      } ;
    `;
  }}
`;

const TodoListItem = ({ todoItem, onToggleTodo, onRemoveTodo }) => {
  const { id, text, figure, done, date } = todoItem;

  const onToggleTodoHandler = (id) => {
    onToggleTodo(id);
  };

  const onRemoveTodoHandler = (id) => {
    onRemoveTodo(id);
  };

  return (
    <>
      <TodoItemLi>
        <TodoItemWrapper onClick={() => onToggleTodoHandler(id)}>
          {figure === 'circle' && <StyledCircle done={done} size='small' />}
          {figure === 'triangle' && <StyledTriangle done={done} size='small' />}
          {figure === 'square' && <StyledSquare done={done} size='small' />}
          <p className={`content-text ${done && 'done'}`}>{text}</p>
          <p className='todo-date'>{date}</p>
        </TodoItemWrapper>
        {done && (
          <MoveToFL onClick={() => onRemoveTodoHandler(id)}>지우기</MoveToFL>
        )}
      </TodoItemLi>
    </>
  );
};

export default TodoListItem;
