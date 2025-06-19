import styled from 'styled-components';
import { ReactComponent as Circle } from 'assets/Circle.svg';
import { ReactComponent as Square } from 'assets/Square.svg';
import { ReactComponent as Triangle } from 'assets/Triangle.svg';

export const ShapeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
`;

export const StyledCircle = styled(Circle)<{
  $shapeName: string;
  $isCountTask?: boolean;
}>`
  width: 100%;
  height: 100%;
  fill: ${({ theme, $shapeName, $isCountTask }) =>
    $shapeName === 'circle' && $isCountTask
      ? theme.colors.anytime
      : theme.commonColors.light_gray};
`;

export const StyledSquare = styled(Square)<{
  $shapeName: string;
  $isCountTask?: boolean;
}>`
  width: 110%;
  height: 110%;
  fill: ${({ theme, $shapeName, $isCountTask }) =>
    $shapeName === 'square' && $isCountTask
      ? theme.colors.remember
      : theme.commonColors.light_gray};
`;

export const StyledTriangle = styled(Triangle)<{
  $shapeName: string;
  $isCountTask?: boolean;
}>`
  width: 115%;
  height: 100%;
  fill: ${({ theme, $shapeName, $isCountTask }) =>
    $shapeName === 'triangle' && $isCountTask
      ? theme.colors.important
      : theme.commonColors.light_gray};
`;
