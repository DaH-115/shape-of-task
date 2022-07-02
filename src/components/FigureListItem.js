import { ReactComponent as Circle } from '../assets/Circle.svg';
import { ReactComponent as Triangle } from '../assets/Triangle.svg';
import { ReactComponent as Square } from '../assets/Square.svg';

const FigureListItem = ({ figure, done }) => {
  return (
    <li>
      {figure === 'circle' && done ? <Circle fill='#EE5A24' /> : null}
      {figure === 'triangle' && done ? <Triangle fill='#FFC312' /> : null}
      {figure === 'square' && done ? (
        <Square fill='#5758BB' style={{ margin: '8px' }} />
      ) : null}
    </li>
  );
};

export default FigureListItem;
