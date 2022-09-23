import styled, { css } from 'styled-components';

import { ReactComponent as Circle } from '../assets/Circle.svg';
import { ReactComponent as Triangle } from '../assets/Triangle.svg';
import { ReactComponent as Square } from '../assets/Square.svg';

const TodoItemLi = styled.li`
  width: 100%;
  border-bottom: 3px solid #ecf0f1;

  &:hover {
    background-color: #ecf0f1;
  }

  ${({ theme }) => {
    return css`
      ${theme.device.desktop} {
        width: 100%;
        height: 200px;
      } ;
    `;
  }}
`;

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;

  .todo-date {
    display: none;
  }

  .circle,
  .triangle,
  .square {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  .content-text {
    font-size: 24px;
    line-height: 28px;
    word-break: break-all;
  }

  .content-text.done {
    color: #a6c6c4;
    text-decoration: line-through;
  }

  ${({ theme }) => {
    return css`
      ${theme.device.desktop} {
        display: block;
        padding: 20px;

        .content-text {
          width: 100%;
          height: 100px;
          max-height: 100px;
          margin-top: 5px;
          margin-bottom: 5px;

          /* scrollbar */
          overflow-y: scroll;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
          &::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
          }
        }

        .todo-date {
          display: block;
          font-weight: bold;
          color: #a6c6c4;
        }
      } ;
    `;
  }}
`;

const TodoListItem = ({ todoItem, onToggleTodo }) => {
  const { id, text, figure, done, date } = todoItem;

  const onToggleTodoHandler = (id) => {
    onToggleTodo(id);
  };

  return (
    <TodoItemLi onClick={() => onToggleTodoHandler(id)}>
      <TodoItemWrapper>
        {figure === 'circle' && (
          <Circle fill={done ? '#EE5A24' : '#A6C6C4'} className='circle' />
        )}
        {figure === 'triangle' && (
          <Triangle fill={done ? '#FFC312' : '#A6C6C4'} className='circle' />
        )}
        {figure === 'square' && (
          <Square fill={done ? '#5758BB' : '#A6C6C4'} className='circle' />
        )}
        <p className={`content-text ${done && 'done'}`}>{text}</p>
        <p className='todo-date'>{date}</p>
      </TodoItemWrapper>
    </TodoItemLi>
  );
};

export default TodoListItem;
