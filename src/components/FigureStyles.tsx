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
      ? theme.colors.circle
      : theme.commonColors.light_gray};
  width: ${({ size }) => (size === 'small' ? '35px' : 'auto')};
  height: ${({ size }) => (size === 'small' ? '35px' : 'auto')};
`;

export const StyledSquare = styled(Square)<FigureStyledPorps>`
  fill: ${({ theme, figurecolor }) =>
    figurecolor === 'square'
      ? theme.colors.square
      : theme.commonColors.light_gray};
  width: ${({ size }) => (size === 'small' ? '30px' : 'auto')};
  height: ${({ size }) => (size === 'small' ? '30px' : 'auto')};
`;

export const StyledTriangle = styled(Triangle)<FigureStyledPorps>`
  fill: ${({ theme, figurecolor }) =>
    figurecolor === 'triangle'
      ? theme.colors.triangle
      : theme.commonColors.light_gray};
  width: ${({ size }) => (size === 'small' ? '35px' : 'auto')};
  height: ${({ size }) => (size === 'small' ? '35px' : 'auto')};
`;
