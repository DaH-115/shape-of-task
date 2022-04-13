import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onToggleTodo }) => {
  return (
    <ul>
      {todoList.map((todoItem) => {
        return (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
            onToggleTodo={onToggleTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
