import styled, { css } from 'styled-components';

import { ReactComponent as Triangle } from '../assets/Triangle.svg';

const StyledFigure = styled(Triangle)`
  ${({ theme, size }) => {
    return css`
      fill: ${theme.colors.yellow};
      width: ${size === 'small' ? '35px' : 'auto'};
      height: ${size === 'small' ? '35px' : 'auto'};
    `;
  }}
`;

const StyledTriangle = ({ size }) => {
  return <StyledFigure size={size} />;
};

export default StyledTriangle;
