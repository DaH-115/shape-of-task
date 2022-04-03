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
  /* justify-content: center; */
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

const TodoListItem = () => {
  return (
    <>
      <TodoItemLi>
        <TodoItemContainer>
          <Circle className='circle' />
          <p className='content-text'>힛츄윗댓투두투두</p>
        </TodoItemContainer>
      </TodoItemLi>
      <TodoItemLi>
        <TodoItemContainer>
          <Triangle className='triangle' />
          <p className='content-text'>힛츄윗댓투두투두</p>
        </TodoItemContainer>
      </TodoItemLi>
      <TodoItemLi>
        <TodoItemContainer>
          <Square className='square' />
          <p className='content-text'>힛츄윗댓투두투두</p>
        </TodoItemContainer>
      </TodoItemLi>
      <TodoItemLi>
        <TodoItemContainer>
          <Circle className='circle' />
          <p className='content-text'>힛츄윗댓투두투두</p>
        </TodoItemContainer>
      </TodoItemLi>
      <TodoItemLi>
        <TodoItemContainer>
          <Triangle className='triangle' />
          <p className='content-text'>힛츄윗댓투두투두</p>
        </TodoItemContainer>
      </TodoItemLi>
      <TodoItemLi>
        <TodoItemContainer>
          <Square className='square' />
          <p className='content-text'>힛츄윗댓투두투두</p>
        </TodoItemContainer>
      </TodoItemLi>
      <TodoItemLi>
        <TodoItemContainer>
          <Circle className='circle' />
          <p className='content-text'>힛츄윗댓투두투두</p>
        </TodoItemContainer>
      </TodoItemLi>
      <TodoItemLi>
        <TodoItemContainer>
          <Triangle className='triangle' />
          <p className='content-text'>힛츄윗댓투두투두</p>
        </TodoItemContainer>
      </TodoItemLi>
      <TodoItemLi>
        <TodoItemContainer>
          <Square className='square' />
          <p className='content-text'>힛츄윗댓투두투두</p>
        </TodoItemContainer>
      </TodoItemLi>
      <TodoItemLi>
        <TodoItemContainer>
          <Square className='square' />
          <p className='content-text'>힛츄윗댓투두투두</p>
        </TodoItemContainer>
      </TodoItemLi>
    </>
  );
};

export default TodoListItem;
