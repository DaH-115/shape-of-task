import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onToggleTodo, onRemoveTodo }) => {
  return (
    <ul>
      {todoList.map((todoItem) => {
        return (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
            onToggleTodo={onToggleTodo}
            onRemoveTodo={onRemoveTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
