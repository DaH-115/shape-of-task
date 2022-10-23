import styled, { css } from 'styled-components';

import { ReactComponent as Circle } from '../assets/Circle.svg';

const StyledFigure = styled(Circle)`
  ${({ theme, size }) => {
    return css`
      fill: ${theme.colors.orange};
      width: ${size === 'small' ? '35px' : 'auto'};
      height: ${size === 'small' ? '35px' : 'auto'};
    `;
  }}
`;

const StyledCircle = ({ size }) => {
  return <StyledFigure size={size} />;
};

export default StyledCircle;
