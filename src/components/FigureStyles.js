import styled from 'styled-components';
import { ReactComponent as Circle } from '../assets/Circle.svg';
import { ReactComponent as Square } from '../assets/Square.svg';
import { ReactComponent as Triangle } from '../assets/Triangle.svg';

export const StyledCircle = styled(Circle)`
  fill: ${({ theme, figurecolor }) =>
    figurecolor === 'circle' ? theme.colors.orange : theme.colors.light_gray};
  width: ${({ size }) => (size === 'small' ? '35px' : 'auto')};
  height: ${({ size }) => (size === 'small' ? '35px' : 'auto')};
`;

export const StyledSquare = styled(Square)`
  fill: ${({ theme, figurecolor }) =>
    figurecolor === 'square' ? theme.colors.blue : theme.colors.light_gray};
  width: ${({ size }) => (size === 'small' ? '30px' : 'auto')};
  height: ${({ size }) => (size === 'small' ? '30px' : 'auto')};
`;

export const StyledTriangle = styled(Triangle)`
  fill: ${({ theme, figurecolor }) =>
    figurecolor === 'triangle' ? theme.colors.yellow : theme.colors.light_gray};
  width: ${({ size }) => (size === 'small' ? '35px' : 'auto')};
  height: ${({ size }) => (size === 'small' ? '35px' : 'auto')};
`;
