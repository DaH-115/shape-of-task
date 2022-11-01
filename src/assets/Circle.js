import styled, { css } from 'styled-components';

import { ReactComponent as Circle } from '../assets/Circle.svg';

const StyledFigure = styled(Circle)`
  ${({ theme, size, figurecolor }) => {
    return css`
      fill: ${figurecolor === 'circle'
        ? theme.colors.orange
        : theme.colors.light_grey};
      width: ${size === 'small' ? '35px' : 'auto'};
      height: ${size === 'small' ? '35px' : 'auto'};
    `;
  }}
`;

const StyledCircle = ({ size, figurecolor }) => {
  return <StyledFigure size={size} figurecolor={figurecolor} />;
};

export default StyledCircle;
