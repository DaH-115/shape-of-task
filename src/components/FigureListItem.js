import styled from 'styled-components';
import StyledCircle from '../assets/Circle';
import StyledSquare from '../assets/Square';
import StyledTriangle from '../assets/Triangle';

const Li = styled.li`
  padding: 8px;
`;

const FigureListItem = ({ figure, done }) => {
  return (
    <Li>
      {figure === 'circle' && done && <StyledCircle />}
      {figure === 'triangle' && done && <StyledTriangle />}
      {figure === 'square' && done && <StyledSquare />}
    </Li>
  );
};

export default FigureListItem;
