import styled from 'styled-components';
import Circle from 'assets/icons/Circle.svg?react';
import Square from 'assets/icons/Square.svg?react';
import Triangle from 'assets/icons/Triangle.svg?react';

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
      : theme.commonColors.medium_gray};
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
      : theme.commonColors.medium_gray};
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
      : theme.commonColors.medium_gray};
`;
