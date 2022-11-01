import styled, { css } from 'styled-components';

import { ReactComponent as Triangle } from '../assets/Triangle.svg';

const StyledFigure = styled(Triangle)`
  ${({ theme, size, figurecolor }) => {
    return css`
      fill: ${figurecolor === 'triangle'
        ? theme.colors.yellow
        : theme.colors.light_grey};
      width: ${size === 'small' ? '35px' : 'auto'};
      height: ${size === 'small' ? '35px' : 'auto'};
    `;
  }}
`;

const StyledTriangle = ({ size, figurecolor }) => {
  return <StyledFigure size={size} figurecolor={figurecolor} />;
};

export default StyledTriangle;
