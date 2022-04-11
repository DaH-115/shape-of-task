import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, toggleTodo }) => {
  return (
    <ul>
      {todoList.map((todoItem) => {
        return (
          <TodoListItem
            key={todoItem.id}
            id={todoItem.id}
            text={todoItem.text}
            figure={todoItem.figure}
            done={todoItem.done}
            todoList={todoList}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
