import styled from 'styled-components';
import { useAppSelector } from 'store/hooks';
import TodoListItem from 'components/TodoListItem';
import InfoMessage from 'layout/InfoMessage';

export interface TodoProps {
  id: string;
  text: string;
  figure: string;
  done: boolean;
  date: string;
}

const TodoListPage = () => {
  const todoList = useAppSelector((state) => state.todoList.todoList);

  return (
    <TodoList>
      {!todoList.length ? (
        <InfoMessage message='할 일을 정리해 보세요' />
      ) : (
        todoList.map((todoItem: TodoProps) => (
          <TodoListItem
            key={todoItem.id}
            id={todoItem.id}
            text={todoItem.text}
            figure={todoItem.figure}
            done={todoItem.done}
            date={todoItem.date}
          />
        ))
      )}
    </TodoList>
  );
};

export default TodoListPage;

const TodoList = styled.ul`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
  padding: 1rem;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
