import styled from 'styled-components';
import { ReactComponent as Circle } from 'assets/Circle.svg';
import { ReactComponent as Square } from 'assets/Square.svg';
import { ReactComponent as Triangle } from 'assets/Triangle.svg';

export const StyledCircle = styled(Circle)<{ $shapeName: string }>`
  fill: ${({ theme, $shapeName }) =>
    $shapeName === 'circle'
      ? theme.colors.anytime
      : theme.commonColors.light_gray};
`;

export const StyledSquare = styled(Square)<{ $shapeName: string }>`
  fill: ${({ theme, $shapeName }) =>
    $shapeName === 'square'
      ? theme.colors.remember
      : theme.commonColors.light_gray};
`;

export const StyledTriangle = styled(Triangle)<{ $shapeName: string }>`
  fill: ${({ theme, $shapeName }) =>
    $shapeName === 'triangle'
      ? theme.colors.important
      : theme.commonColors.light_gray};
`;
