import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from 'store/hooks';
import { TodoItemTypes } from 'store/todoListSlice';
import TodoListItem from 'components/TodoListItem';

const TodoListPage = () => {
  const todoList = useAppSelector((state) => state.todoList.todoList);

  return (
    <TodoList>
      {!todoList.length ? (
        <InfoMessage>{'할 일을 정리하고 도형을 획득해 보세요'}</InfoMessage>
      ) : (
        todoList.map((todoItem: TodoItemTypes) => (
          <TodoListItem
            key={todoItem.id}
            id={todoItem.id}
            text={todoItem.text}
            shape={todoItem.shape}
            done={todoItem.done}
            date={todoItem.date}
          />
        ))
      )}
    </TodoList>
  );
};

export default React.memo(TodoListPage);

const InfoMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.commonColors.gray};
  font-size: 1.2rem;
`;

const TodoList = styled.ul`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
  padding: 2rem 1rem;
  padding-bottom: 5rem;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  ${({ theme }) => theme.device.tablet} {
    padding: 1rem 2rem;
    padding-bottom: 5rem;
  }
`;
