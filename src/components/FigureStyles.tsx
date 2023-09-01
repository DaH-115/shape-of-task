import styled from 'styled-components';
import { ReactComponent as Circle } from '../assets/Circle.svg';
import { ReactComponent as Square } from '../assets/Square.svg';
import { ReactComponent as Triangle } from '../assets/Triangle.svg';

interface FigureStyledPorps {
  figurecolor: string;
  size?: string;
}

export const StyledCircle = styled(Circle)<FigureStyledPorps>`
  fill: ${({ theme, figurecolor }) =>
    figurecolor === 'circle'
      ? theme.colors.anytime
      : theme.commonColors.light_gray};
`;

export const StyledSquare = styled(Square)<FigureStyledPorps>`
  fill: ${({ theme, figurecolor }) =>
    figurecolor === 'square'
      ? theme.colors.remember
      : theme.commonColors.light_gray};
`;

export const StyledTriangle = styled(Triangle)<FigureStyledPorps>`
  fill: ${({ theme, figurecolor }) =>
    figurecolor === 'triangle'
      ? theme.colors.important
      : theme.commonColors.light_gray};
`;
