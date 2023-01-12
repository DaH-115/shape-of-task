import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TodoListItem from '../components/TodoListItem';
import MessageBox from '../layout/MessageBox';

const TodoListPage = () => {
  const todoList = useSelector((state) => state.todoList.value);

  return (
    <TodoListUl>
      {!todoList.length ? (
        <MessageBox messgae='할 일을 정리해 보세요.😊' />
      ) : (
        todoList.map((todoItem) => (
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
    </TodoListUl>
  );
};

export default TodoListPage;

const TodoListUl = styled.ul`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.commonColors.light_gray};
  padding: 20px;

  /* scrollbar */
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
