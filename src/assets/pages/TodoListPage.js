import TodoList from '../../components/TodoList';

const TodoListPage = ({ todoList, onToggleTodo, onRemoveTodo }) => {
  return (
    <TodoList
      todoList={todoList}
      onToggleTodo={onToggleTodo}
      onRemoveTodo={onRemoveTodo}
    />
  );
};

export default TodoListPage;
