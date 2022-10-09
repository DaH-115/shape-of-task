import StyledCircle from '../assets/Circle';
import StyledSquare from '../assets/Square';
import StyledTriangle from '../assets/Triangle';

const FigureListItem = ({ figure, done }) => {
  return (
    <li>
      {figure === 'circle' && done && <StyledCircle done={done} />}
      {figure === 'triangle' && done && <StyledTriangle done={done} />}
      {figure === 'square' && done && <StyledSquare done={done} />}
    </li>
  );
};

export default FigureListItem;
