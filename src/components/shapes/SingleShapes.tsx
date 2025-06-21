import { memo } from 'react';
import { ShapeName } from 'types/task';
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
  // 도형 타입에 따른 컴포넌트 매핑
  const Components: Record<ShapeName, typeof StyledCircle> = {
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
