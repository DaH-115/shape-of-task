import styled, { css } from 'styled-components';

import { ReactComponent as Circle } from '../assets/Circle.svg';

const StyledFigure = styled(Circle)`
  ${({ theme, done, size }) => {
    return css`
      fill: ${done === 'true' ? theme.colors.orange : theme.colors.grey};
      width: ${size === 'small' ? '50px' : 'auto'};
      height: ${size === 'small' ? '50px' : 'auto'};
    `;
  }}
`;

const StyledCircle = ({ done, size }) => {
  return <StyledFigure done={done} size={size} />;
};

export default StyledCircle;
