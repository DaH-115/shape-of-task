import { memo } from 'react';
import styled from 'styled-components';
import {
  StyledCircle,
  StyledSquare,
  StyledTriangle,
} from 'components/shapes/SingleShapes.styles';
import { ShapeName } from 'store/taskListSlice';

const SelectedShapes = ({ shape }: { shape: ShapeName }) => {
  return (
    <ShapeWrapper>
      <StyledTriangle $shapeName={shape} $isCountTask />
      <StyledSquare $shapeName={shape} $isCountTask />
      <StyledCircle $shapeName={shape} $isCountTask />
    </ShapeWrapper>
  );
};

export default memo(SelectedShapes);

const ShapeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
