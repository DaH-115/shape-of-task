import TodoListItem from './TodoListItem';

const DUMMY_DATA = [
  {
    id: 1,
    date: '2022.04.05',
    text: '힛츄윗댓투두투두',
    figure: 'circle',
    checked: false,
  },
  {
    id: 2,
    date: '2022.04.05',
    text: '두 번째 투두',
    figure: 'triangle',
    checked: false,
  },
  {
    id: 3,
    date: '2022.04.05',
    text: '세 번째 투두',
    figure: 'square',
    checked: true,
  },
];

const TodoList = () => {
  return (
    <ul>
      {DUMMY_DATA.map((data) => {
        return (
          <TodoListItem
            key={data.id}
            text={data.text}
            figure={data.figure}
            done={data.done}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
