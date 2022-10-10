import StyledCircle from '../assets/Circle';
import StyledSquare from '../assets/Square';
import StyledTriangle from '../assets/Triangle';

const FigureListItem = ({ figure, done }) => {
  return (
    <li>
      {figure === 'circle' && done && <StyledCircle />}
      {figure === 'triangle' && done && <StyledTriangle />}
      {figure === 'square' && done && <StyledSquare />}
    </li>
  );
};

export default FigureListItem;
