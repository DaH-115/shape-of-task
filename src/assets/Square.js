import styled, { css } from 'styled-components';
import { ReactComponent as Square } from '../assets/Square.svg';

const StyledSquare = ({ size, figurecolor }) => {
  return <StyledFigure size={size} figurecolor={figurecolor} />;
};

export default StyledSquare;

const StyledFigure = styled(Square)`
  ${({ theme, size, figurecolor }) => {
    return css`
      fill: ${figurecolor === 'square'
        ? theme.colors.blue
        : theme.colors.light_gray};
      width: ${size === 'small' ? '30px' : 'auto'};
      height: ${size === 'small' ? '30px' : 'auto'};
    `;
  }}
`;
