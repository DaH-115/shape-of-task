import TodoListItem from '../components/TodoListItem';

const TodoListPage = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todoItem) => {
        return <TodoListItem key={todoItem.id} todoItem={todoItem} />;
      })}
    </ul>
  );
};

export default TodoListPage;
