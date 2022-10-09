import StyledCircle from '../assets/Circle';
import StyledSquare from '../assets/Square';
import StyledTriangle from '../assets/Triangle';

const FigureListItem = ({ figure, done }) => {
  return (
    <li>
      {figure === 'circle' && done && <StyledCircle done={done.toString()} />}
      {figure === 'triangle' && done && (
        <StyledTriangle done={done.toString()} />
      )}
      {figure === 'square' && done && <StyledSquare done={done.toString()} />}
    </li>
  );
};

export default FigureListItem;
