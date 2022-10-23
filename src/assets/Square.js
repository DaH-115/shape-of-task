import styled, { css } from 'styled-components';

import { ReactComponent as Square } from '../assets/Square.svg';

const StyledFigure = styled(Square)`
  ${({ theme, size }) => {
    return css`
      fill: ${theme.colors.blue};
      width: ${size === 'small' ? '30px' : 'auto'};
      height: ${size === 'small' ? '30px' : 'auto'};
    `;
  }}
`;

const StyledSquare = ({ size }) => {
  return <StyledFigure size={size} />;
};

export default StyledSquare;
