import FigureList from '../components/FigureList';

const FigureListPage = ({ todoList, capture, onCapture }) => {
  return (
    <>
      <FigureList todoList={todoList} capture={capture} onCapture={onCapture} />
    </>
  );
};

export default FigureListPage;
