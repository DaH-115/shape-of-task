import styled from 'styled-components';

import { ReactComponent as Circle } from '../assets/Circle.svg';
import { ReactComponent as Triangle } from '../assets/Triangle.svg';
import { ReactComponent as Square } from '../assets/Square.svg';

const TodoItemLi = styled.li`
  width: 100%;
  background-color: #fff;
  border-bottom: 3px solid #ecf0f1;
`;

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  &:hover {
    background-color: #ecf0f1;
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
  }
`;

const TodoListItem = ({ todoItem, onToggleTodo }) => {
  const { id, text, figure, done } = todoItem;

  const onToggleTodoHandler = (id) => {
    onToggleTodo(id);
  };

  return (
    <TodoItemLi onClick={() => onToggleTodoHandler(id)}>
      <TodoItemContainer>
        {figure === 'circle' && (
          <Circle fill={done ? '#EE5A24' : '#A6C6C4'} className='circle' />
        )}
        {figure === 'triangle' && (
          <Triangle fill={done ? '#FFC312' : '#A6C6C4'} className='circle' />
        )}
        {figure === 'square' && (
          <Square fill={done ? '#5758BB' : '#A6C6C4'} className='circle' />
        )}
        <p className='content-text'>{text}</p>
      </TodoItemContainer>
    </TodoItemLi>
  );
};

export default TodoListItem;
