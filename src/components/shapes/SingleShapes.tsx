import { memo } from 'react';
import { ShapeName } from 'store/taskListSlice';
import {
  ShapeWrapper,
  StyledCircle,
  StyledSquare,
  StyledTriangle,
} from 'components/shapes/SingleShapes.styles';

interface SingleShapesProps {
  shapeName: ShapeName;
  isCountTask?: boolean;
}

const SingleShapes = ({ shapeName, isCountTask = true }: SingleShapesProps) => {
  const Components = {
    circle: StyledCircle,
    square: StyledSquare,
    triangle: StyledTriangle,
  };
  const ShapeComponent = Components[shapeName];

  return (
    <ShapeWrapper>
      <ShapeComponent $shapeName={shapeName} $isCountTask={isCountTask} />
    </ShapeWrapper>
  );
};

export default memo(SingleShapes);
