import styled, { css } from 'styled-components';

import { ReactComponent as Triangle } from '../assets/Triangle.svg';

const StyledFigure = styled(Triangle)`
  ${({ theme, done, size }) => {
    return css`
      fill: ${done === 'true' ? theme.colors.yellow : theme.colors.grey};
      width: ${size === 'small' ? '50px' : 'auto'};
      height: ${size === 'small' ? '50px' : 'auto'};
    `;
  }}
`;

const StyledTriangle = ({ done, size }) => {
  return <StyledFigure done={done} size={size} />;
};

export default StyledTriangle;
