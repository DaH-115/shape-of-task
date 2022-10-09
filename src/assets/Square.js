import styled, { css } from 'styled-components';

import { ReactComponent as Square } from '../assets/Square.svg';

const StyledFigure = styled(Square)`
  ${({ theme, done, size }) => {
    return css`
      fill: ${done === true ? theme.colors.blue : theme.colors.grey};
      width: ${size === 'small' ? '50px' : 'auto'};
      height: ${size === 'small' ? '50px' : 'auto'};
    `;
  }}
`;

const StyledSquare = ({ done, size }) => {
  return <StyledFigure done={done} size={size} />;
};

export default StyledSquare;
