import FigureList from '../../components/FigureList';

const FigureListPage = ({ todoList, onCapture }) => {
  return (
    <>
      <FigureList todoList={todoList} onCapture={onCapture} />
    </>
  );
};

export default FigureListPage;
