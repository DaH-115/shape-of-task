import styled, { css } from 'styled-components';

import { ReactComponent as Circle } from '../assets/Circle.svg';

const StyledFigure = styled(Circle)`
  ${({ theme, size }) => {
    return css`
      fill: ${theme.colors.orange};
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

const StyledCircle = ({ size }) => {
  return <StyledFigure size={size} />;
};

export default StyledCircle;
