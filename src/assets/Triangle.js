import styled, { css } from 'styled-components';

import { ReactComponent as Triangle } from '../assets/Triangle.svg';

const StyledFigure = styled(Triangle)`
  ${({ theme, size }) => {
    return css`
      fill: ${theme.colors.yellow};
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

const StyledTriangle = ({ size }) => {
  return <StyledFigure size={size} />;
};

export default StyledTriangle;
