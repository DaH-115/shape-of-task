import TodoList from '../../components/TodoList';

const TodoListPage = ({ todoList, onToggleTodo }) => {
  return <TodoList todoList={todoList} onToggleTodo={onToggleTodo} />;
};

export default TodoListPage;
