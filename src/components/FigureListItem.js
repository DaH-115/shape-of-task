import { ReactComponent as Circle } from '../assets/Circle.svg';
import { ReactComponent as Triangle } from '../assets/Triangle.svg';
import { ReactComponent as Square } from '../assets/Square.svg';
import styled from 'styled-components';

const LiBox = styled.li`
  padding: 4px;
`;

const FigureListItem = ({ figure, done }) => {
  return (
    <LiBox>
      {figure === 'circle' && done ? <Circle fill='#EE5A24' /> : null}
      {figure === 'triangle' && done ? (
        <Triangle fill='#FFC312' style={{ 'margin-left': '-15px' }} />
      ) : null}
      {figure === 'square' && done ? <Square fill='#5758BB' /> : null}
    </LiBox>
  );
};

export default FigureListItem;
