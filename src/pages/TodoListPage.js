import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TodoListItem from '../components/TodoListItem';

const Ul = styled.ul`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.light_gray};
  padding: 20px;
  box-sizing: border-box;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const TodoListPage = () => {
  const todoList = useSelector((state) => state.todoList.value);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <Ul>
      {todoList.map((todoItem) => {
        return <TodoListItem key={todoItem.id} todoItem={todoItem} />;
      })}
    </Ul>
  );
};

export default TodoListPage;
