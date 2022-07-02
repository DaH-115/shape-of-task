import { ReactComponent as Circle } from '../assets/Circle.svg';
import { ReactComponent as Triangle } from '../assets/Triangle.svg';
import { ReactComponent as Square } from '../assets/Square.svg';

const FigureListItem = ({ figure }) => {
  return (
    <li>
      {figure === 'circle' && <Circle fill='#EE5A24' />}
      {figure === 'triangle' && <Triangle fill='#FFC312' />}
      {figure === 'square' && <Square fill='#5758BB' />}
    </li>
  );
};

export default FigureListItem;
