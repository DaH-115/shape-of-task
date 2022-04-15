import FigureListItem from './FigureListItem';

const FigureList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todoItem) => {
        return <FigureListItem key={todoItem.id} figure={todoItem.figure} />;
      })}
    </ul>
  );
};

export default FigureList;
