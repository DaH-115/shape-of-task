import styled, { css } from 'styled-components';
import { ReactComponent as Circle } from '../assets/Circle.svg';

const StyledCircle = ({ size, figurecolor }) => {
  return <StyledFigure size={size} figurecolor={figurecolor} />;
};

export default StyledCircle;

const StyledFigure = styled(Circle)`
  ${({ theme, size, figurecolor }) => {
    return css`
      fill: ${figurecolor === 'circle'
        ? theme.colors.orange
        : theme.colors.light_gray};
      width: ${size === 'small' ? '35px' : 'auto'};
      height: ${size === 'small' ? '35px' : 'auto'};
    `;
  }}
`;
