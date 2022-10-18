import styled, { css } from 'styled-components';

import { ReactComponent as Square } from '../assets/Square.svg';

const StyledFigure = styled(Square)`
  ${({ theme, size }) => {
    return css`
      fill: ${theme.colors.blue};
      width: ${size === 'small' ? '50px' : 'auto'};
      height: ${size === 'small' ? '50px' : 'auto'};

      &:hover {
        transition: background-color 0.3s ease-in-out;
        transform: translateY(-20px);
        transition: transform 0.2s ease-in-out;
      }
    `;
  }}
`;

const StyledSquare = ({ size }) => {
  return <StyledFigure size={size} />;
};

export default StyledSquare;
