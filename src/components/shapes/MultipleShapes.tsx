import { memo } from 'react';
import styled from 'styled-components';
import {
  StyledCircle,
  StyledSquare,
  StyledTriangle,
} from 'components/shapes/SingleShapes.styles';
import { ShapeName } from 'types/task';

interface MultipleShapesProps {
  shape: ShapeName;
}

const MultipleShapes = ({ shape }: MultipleShapesProps) => {
  return (
    <ShapeWrapper>
      <StyledTriangle $shapeName={shape} $isCountTask />
      <StyledSquare $shapeName={shape} $isCountTask />
      <StyledCircle $shapeName={shape} $isCountTask />
    </ShapeWrapper>
  );
};

export default memo(MultipleShapes);

const ShapeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
