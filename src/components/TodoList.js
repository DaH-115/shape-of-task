import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, toggleTodo }) => {
  return (
    <ul>
      {todoList.map((todoItem) => {
        return (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
