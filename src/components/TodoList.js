import TodoListItem from './TodoListItem';

// const DUMMY_DATA = [
//   {
//     id: 1,
//     date: '2022.04.05',
//     text: '힛츄윗댓투두투두',
//     figure: 'circle',
//     checked: false,
//   },
//   {
//     id: 2,
//     date: '2022.04.05',
//     text: '두 번째 투두',
//     figure: 'triangle',
//     checked: false,
//   },
//   {
//     id: 3,
//     date: '2022.04.05',
//     text: '세 번째 투두',
//     figure: 'square',
//     checked: true,
//   },
// ];

const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todoItem) => {
        return (
          <TodoListItem
            key={todoItem.id}
            text={todoItem.text}
            figure={todoItem.figure}
            done={todoItem.done}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
