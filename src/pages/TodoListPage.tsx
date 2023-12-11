import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from 'store/hooks';
import { TodoItemTypes } from 'store/todoListSlice';
import TodoListItem from 'components/TodoListItem';
import AddBtn from 'components/AddBtn';

const TodoListPage = () => {
  const todoList = useAppSelector((state) => state.todoList.todoList);
  const restTodo = todoList.filter(
    (todo: { done: boolean }) => todo.done === false
  );

  return (
    <Wrapper>
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
      <ContentBottom>
        <TodoCountMessage>{restTodo.length}</TodoCountMessage>
        <AddBtn />
      </ContentBottom>
    </Wrapper>
  );
};

export default React.memo(TodoListPage);

const Wrapper = styled.div`
  flex: 1;
  overflow: auto;
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

const InfoMessage = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.commonColors.gray};
  font-size: 1.2rem;
`;

const ContentBottom = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 5rem;

  display: flex;
  align-items: center;

  font-size: 1.2rem;

  ${({ theme }) => theme.device.tablet} {
    bottom: 2rem;
    font-size: 1rem;
  }
`;

const TodoCountMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.8rem;
  height: 2.8rem;

  font-weight: 700;
  text-align: center;
  line-height: 2.8rem;

  padding-right: 0.1rem;

  color: ${({ theme }) => theme.colors.important};
  background-color: #fff;
  border: 0.1rem solid ${({ theme }) => theme.colors.important};
  border-radius: 50%;

  box-shadow: 0 0.2rem 2rem rgba(177, 177, 177, 0.3);
`;
