import styled from 'styled-components';
import StyledCircle from '../assets/Circle';
import StyledSquare from '../assets/Square';
import StyledTriangle from '../assets/Triangle';

const Li = styled.li`
  padding: 8px;

  ${({ theme }) => theme.device.desktop} {
    &:hover {
      transition: background-color 0.3s ease-in-out;
      transform: translateY(-10px);
      transition: transform 0.2s ease-in-out;
    }
  }
`;

const FigureListItem = ({ figure, done }) => {
  return (
    <Li>
      {figure === 'circle' && done && <StyledCircle figurecolor='circle' />}
      {figure === 'triangle' && done && (
        <StyledTriangle figurecolor='triangle' />
      )}
      {figure === 'square' && done && <StyledSquare figurecolor='square' />}
    </Li>
  );
};

export default FigureListItem;
