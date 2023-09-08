import styled from 'styled-components';
import { ReactComponent as Circle } from '../../assets/Circle.svg';
import { ReactComponent as Square } from '../../assets/Square.svg';
import { ReactComponent as Triangle } from '../../assets/Triangle.svg';

export const StyledCircle = styled(Circle)<{ figurecolor: string }>`
  fill: ${({ theme, figurecolor }) =>
    figurecolor === 'circle'
      ? theme.colors.anytime
      : theme.commonColors.light_gray};
`;

export const StyledSquare = styled(Square)<{ figurecolor: string }>`
  fill: ${({ theme, figurecolor }) =>
    figurecolor === 'square'
      ? theme.colors.remember
      : theme.commonColors.light_gray};
`;

export const StyledTriangle = styled(Triangle)<{ figurecolor: string }>`
  fill: ${({ theme, figurecolor }) =>
    figurecolor === 'triangle'
      ? theme.colors.important
      : theme.commonColors.light_gray};
`;
