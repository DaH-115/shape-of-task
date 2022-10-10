import TodoListItem from './TodoListItem';

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todoItem) => {
        return <TodoListItem key={todoItem.id} todoItem={todoItem} />;
      })}
    </ul>
  );
};

export default TodoList;
